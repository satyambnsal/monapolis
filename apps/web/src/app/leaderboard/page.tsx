"use client";
import { useState } from "react";
import Image from "next/image";
import { Table, DropdownMenu } from "@radix-ui/themes";
import {
  useCompetitionsName,
  useLeaderboardEntries,
} from "@/db/react-query-hooks";
import TableSkeleton from "./tableSkeleton";
import { LEADERBOARD_COLUMNS } from "@/constants";

type SelectedCompetition = {
  id: number;
  name: string;
  competition_key: string;
};
type LeaderboardResult = {
  competition_key: string;
  created_at: string;
  game_id: number;
  username: string;
  id: number;
  score: number;
  wallet_address: string;
};

export default function Leaderboard() {
  const {
    data: competitionData,
    isError: isCompetitionError,
    error: competitionError,
  } = useCompetitionsName();

  const [selectedCompetition, setSelectedCompetition] =
    useState<SelectedCompetition>({
      id: 3,
      name: "Hero's Tileville League",
      competition_key: "heros_tileville",
    } as SelectedCompetition);

  const { data: leaderboardData = [], isLoading } = useLeaderboardEntries(
    selectedCompetition.competition_key
  );

  if (isCompetitionError) {
    return (
      <div className="p-30">
        Error: {(competitionError as { message: string }).message}
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 pb-8 pt-12 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="grid grid-cols-2 items-center gap-2 md:flex md:gap-3">
            <p className="col-auto whitespace-nowrap text-sm md:text-base">
              Select Competitions:
            </p>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <button className="border-primary-30  flex h-10 items-center justify-between truncate rounded-md border bg-transparent px-2 text-sm font-semibold text-primary outline-none md:min-w-[224px] md:px-3 md:text-base">
                  <span className="truncate">{selectedCompetition.name}</span>
                  <span>
                    <Image
                      src="icons/topBottomArrows.svg"
                      width={24}
                      height={24}
                      alt="arrows"
                    />
                  </span>
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="min-w-[200px] max-w-[350px] !bg-transparent backdrop-blur-2xl md:min-w-[320px] md:max-w-none">
                {competitionData?.map((competition) => (
                  <DropdownMenu.Item
                    key={competition.id}
                    onClick={() => {
                      setSelectedCompetition({
                        id: competition.id,
                        competition_key: competition.unique_keyname,
                        name: competition.name,
                      });
                    }}
                    className="!md:h-8 !h-auto py-2 hover:bg-primary"
                  >
                    {competition.name}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
        <Table.Root>
          <Table.Header>
            <Table.Row className="whitespace-nowrap">
              {LEADERBOARD_COLUMNS.map((column) => {
                return (
                  <Table.ColumnHeaderCell key={column}>
                    {column}
                  </Table.ColumnHeaderCell>
                );
              })}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {isLoading ? (
              <TableSkeleton />
            ) : (
              <>
                {
                  leaderboardData.length > 0 ?
                    leaderboardData.map(
                      (entry: LeaderboardResult, index: number) => (
                        <Table.Row key={entry.id}>
                          <Table.Cell>{index + 1}</Table.Cell>
                          <Table.Cell>
                            {entry.username ? (
                              entry.username
                            ) : (
                              <span className="ps-4">-</span>
                            )}
                          </Table.Cell>
                          <Table.RowHeaderCell>
                            {entry.wallet_address}
                          </Table.RowHeaderCell>
                          <Table.Cell>{entry.game_id}</Table.Cell>
                          <Table.Cell>{entry.score}</Table.Cell>
                        </Table.Row>
                      )
                    )
                    : <Table.Row>
                      <Table.Cell colSpan={5}>
                        <h2 className="text-2xl font-semibold text-center">
                          No games are played yet :(
                        </h2>
                      </Table.Cell>
                    </Table.Row>
                }
              </>
            )}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
