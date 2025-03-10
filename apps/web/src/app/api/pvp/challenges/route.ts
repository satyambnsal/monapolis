// src/app/api/pvp/challenges/route.ts
import { supabaseServiceClient as supabase } from "@/db/config/server";
import { NextRequest } from "next/server";
import { withAuth } from "../../authMiddleware";
import { v4 as uuidv4 } from "uuid";
import type { Database } from "@/lib/database.types";
import { sendPersonalNotification } from "../../lib/telegram-notifications";
import { ADMIN_API_URL, GROUP_COMPETITION_GAME_TOPIC_ID } from "@/constants";
import { generateChallengeMessageForGroup } from "@/lib/helpers";

type PVPChallengeInsert =
  Database["public"]["Tables"]["pvp_challenges"]["Insert"];

const postHandler = async (request: NextRequest) => {
  try {
    const payload = await request.json();
    const wallet_address = request.headers.get("Wallet-Address");

    if (!wallet_address) {
      throw new Error("Wallet address is required");
    }

    const {
      name,
      entry_fee,
      end_time,
      max_participants,
      is_speed_challenge,
      speed_duration,
      is_public,
    } = payload;

    const challenge: PVPChallengeInsert = {
      name,
      created_by: wallet_address,
      invite_code: uuidv4(),
      entry_fee,
      end_time: new Date(end_time).toISOString(),
      max_participants,
      is_speed_challenge,
      speed_duration: is_speed_challenge ? speed_duration : null,
      is_public,
    };
    const { data: challengeData, error: challengeError } = await supabase
      .from("pvp_challenges")
      .insert(challenge)
      .select()
      .single();

    if (challengeError) throw challengeError;

    // Add creator as first participant
    await supabase.from("pvp_challenge_participants").insert({
      challenge_id: challengeData.id,
      wallet_address: wallet_address,
      txn_status: "NOT_INIT",
    });

    // Get user's telegram chat ID and username
    const { data: userProfile } = await supabase
      .from("player_profile")
      .select("username")
      .eq("wallet_address", wallet_address)
      .single();

    const { data: telegramAuth } = await supabase
      .from("telegram_auth")
      .select("chat_id")
      .eq("wallet_address", wallet_address)
      .eq("authenticated", true)
      .single();

    const inviteLink = `https://tileville.xyz/pvp/invite/${challengeData.invite_code}`;

    const groupMessage = generateChallengeMessageForGroup({
      challengeName: name,
      walletAddress: wallet_address,
      speedDuration: challenge.speed_duration || null,
      endTime: challenge.end_time,
      isSpeedChallenge: challenge.is_speed_challenge || false,
      entryFee: challenge.entry_fee || 0,
      username: userProfile?.username || null,
      maxParticipants: max_participants,
      isPublic: is_public,
      inviteLink: inviteLink,
    });

    await fetch(`${ADMIN_API_URL}/api/telegram/group-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_API_TOKEN || "",
      },
      body: JSON.stringify({
        message: groupMessage,
        groupTopicId: GROUP_COMPETITION_GAME_TOPIC_ID,
      }),
    });

    // Send telegram notification if user has connected telegram
    if (telegramAuth?.chat_id) {
      const displayName =
        userProfile?.username || `Wallet ${wallet_address.slice(0, 6)}`;

      const message = `🎮 Challenge Created!\n\nHey ${displayName}! Your challenge "${name}" has been created successfully.\n\nDetails:\n- Entry Fee: ${entry_fee} MINA\n- Max Participants: ${max_participants}\n- End Time: ${new Date(
        end_time
      ).toLocaleString()}\n${
        is_speed_challenge
          ? `- Speed Challenge Duration: ${speed_duration} seconds\n`
          : ""
      }\nShare this link with others to join your challenge:\n${inviteLink}`;

      await sendPersonalNotification({
        message,
        chatIds: [telegramAuth.chat_id],
      });
    }

    return Response.json({ success: true, data: challengeData });
  } catch (error: any) {
    console.log("ERROR", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};

export const POST = withAuth(postHandler);
