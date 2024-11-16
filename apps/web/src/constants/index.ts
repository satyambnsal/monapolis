import {
  CubeIcon,
  FileTextIcon,
  GlobeIcon,
  LightningBoltIcon,
  StarFilledIcon,
  ThickArrowUpIcon,
} from "@radix-ui/react-icons";

import PersonWaiting from "../../public/lotties/personWaiting.json";
import Failed from "../../public/lotties/failed.json";
import DoneLottie from "../../public/lotties/doneLottie.json";
import TxnConfirmed from "../../public/lotties/txnConfirmed.json";
import confusingLottie from "../../public/lotties/confusingLottie.json";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type AttributeValue = {
  [key: string]: string;
};

type AttributeData = {
  Icon: React.ComponentType<IconProps>;
  description: string;
  values: AttributeValue;
};

export type AttributesDataType = {
  "Sustainability Rating": AttributeData;
  "Efficiency Level": AttributeData;
  "Environmental Affinity": AttributeData;
  "Urban Planning Expertise": AttributeData;
  "Special Ability": AttributeData;
  Edition: AttributeData;
};

export const MINA_DENOM = 1e9;
export const TREASURY_ADDRESS =
  "B62qqhL8xfHBpCUTk1Lco2Sq8HitFsDDNJraQG9qCtWwyvxcPADn4EV";
export const FAUCET_URL = "https://faucet.minaprotocol.com/";
export const GAME_ENTRY_FEE_KEY = "is_entry_fee_paid";
export const GITHUB_URL = "https://github.com/tileville/tileville";
export const GAME_TUTORIAL_VIDEO_URL = "https://youtu.be/rUd880VHHT0";
export const MY_GITHUB_URL = "https://github.com/satyambnsal";
export const FEEDBACK_FORM_URL = "https://forms.gle/PyPU67YmDvQvZ7HF9";
export const ZKIGNITE_PROPOSAL =
  "https://zkignite.minaprotocol.com/zkignite/zkapp-cohort-3/funding/suggestion/655";
export const GAME_ROADMAP_URL =
  "https://docs.google.com/document/d/1Bvf_EVjZbPQ7mXUFMmxeZlGfzzd78Bn6Cf1DgZIuquA/edit#heading=h.lq3c7p71mqq7";

export const SEQUENCER_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_SEQUENCER_GRAPHQL_URL ||
  "http://localhost:8080/graphql";

export enum Currency {
  MINA = "$MINA",
  ZNAKES = "$znakes",
}

export const ROUND_PRICE = 0;
export const BRIDGE_ADDR =
  "B62qkh5QbigkTTXF464h5k6GW76SHL7wejUbKxKy5vZ9qr9dEcowe6G";

export const BLOCKBERRY_MAINNET_BASE_URL =
  "https://api.blockberry.one/mina-mainnet";

export const BLOCKBERRY_API_KEY =
  process.env.NEXT_PUBLIC_BLOCKBERRY_API_KEY ||
  "DVz3toZ3FiqrwSakq7EwiA0wZ6HCYb";

export const POSTHOG_TOKEN =
  process.env.NEXT_PUBLIC_POSTHOG_TOKEN ||
  "phc_JosSJyx52qurZc76Tbf9qrnokKRvcL7oZE7aQAifoNH";
export const POSTHOG_URI =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

export const isMockEnv = (): boolean => {
  const mintKey =
    typeof window !== "undefined" ? localStorage.getItem("IS_MOCK") : null;

  if (mintKey) {
    return true;
  } else if (process.env.NEXT_PUBLIC_IS_MOCK_ENV === "true") {
    return true;
  } else {
    return false;
  }
};

export const NOVU_API_KEY =
  process.env.NEXT_PUBLIC_NOVU_API_KEY || "ed1f7d240a9a31843dc24795660e95d4";
export const NOVU_APP_ID =
  process.env.NEXT_PUBLIC_NOVU_APP_ID || "OJ-4H0k4zMEd";

export const BUG_REPORT_URL = "https://t.me/tilevilleBugs";
export const COMPETITION_SCORE_TWEET_DEFAULT_CONTENT =
  "Just conquered Nicobar with a score of ${score} in @TileVilleSocial 🏆 The strategic city-builder on @MinaProtocol is a must-play. Build your dream city: https://tileville.xyz #TileVille #MinaBlockchain";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const GAMEPLAY_NOT_ALLOWED_MESSAGES = {
  TRANSACTION_FAILED: {
    title: "Transaction Failed",
    description: "Transaction failed. you are not part of the competition",
    animation: Failed,
  },
  TRANSACTION_PENDING: {
    title: "Transaction is pending.",
    description:
      "We are fetching your participation fee payment transaction details...",
    animation: PersonWaiting,
  },
  GAME_ALREADY_PLAYED: {
    title: "Game is already played",
    description:
      "You have already played the game. Please check your game status in user profile section.",
    animation: DoneLottie,
  },
  TRANSACTION_CONFIRMED: {
    title: "Transaction Confirmed.",
    description:
      "Transaction is confirmed. Please close the modal and click on play button to start playing.",
    animation: TxnConfirmed,
  },
  NONE: {
    title: "Un-Ohh There Might be some issue",
    description:
      "Please use the bug report button from Header if you are not able to play the game.",
    animation: confusingLottie,
  },
};

export const GLOBAL_CONFIG_DEFAULT = {
  nft_mint_start_date: "2024-07-29",
};

export const ACCOUNT_AUTH_MESSAGE =
  "I am authenticating my wallet for TileVille";
export const ACCOUNT_AUTH_LOCAL_KEY = "tileville_auth_signature";
export const DEFAULT_TRASURY_ADDRESS =
  "B62qqhL8xfHBpCUTk1Lco2Sq8HitFsDDNJraQG9qCtWwyvxcPADn4EV";

export const ATTRIBUTES_DATA: AttributesDataType = {
  "Sustainability Rating": {
    Icon: StarFilledIcon,
    description:
      "Sustainability Rating reflects the Builder's commitment to eco-friendly development",
    values: {
      Diamond:
        "Builders with Diamond rating (6 star) demonstrate unparalleled mastery of sustainable city planning.",
      Platinum:
        "Builders with Platinum rating (5 star) show exceptional focus on sustainability.",
      Gold: "Builders with Gold rating (4 star) exhibit high commitment to sustainable development.",
      Silver:
        "Builders with Silver rating (3 star) display good sustainability awareness.",
      Bronze:
        "Builders with Bronze rating (1-2 star) implement basic sustainability practices.",
    },
  },
  "Efficiency Level": {
    Icon: ThickArrowUpIcon,
    description:
      "Efficiency Level represents the Builder's overall productivity and skill level",
    values: {
      Legendary:
        "Builders with Legendary efficiency (200%) demonstrate exceptional, game-changing productivity.",
      Master:
        "Builders with Master efficiency (150%) show highly superior productivity.",
      Expert:
        "Builders with Expert efficiency (125%) exhibit significantly improved productivity.",
      Proficient:
        "Builders with Proficient efficiency (110%) display slightly enhanced productivity.",
      Novice:
        "Builders with Novice efficiency (100%) operate at a standard productivity level.",
    },
  },
  "Environmental Affinity": {
    Icon: GlobeIcon,
    description:
      "Environmental Affinity indicates the Builder's harmony with specific environmental elements",
    values: {
      "Eco-Balancer":
        "Builders with Eco-Balancer affinity are versatile environmental experts, providing small bonuses across all environmental aspects.",
      "Soil Cultivator":
        "Builders with Soil Cultivator affinity are skilled in maximizing land fertility, offering possible bonuses to farms and agriculture.",
      "Water Guardian":
        "Builders with Water Guardian affinity are attuned to water resources, potentially improving water-related infrastructure efficiency.",
      "Tree Hugger":
        "Builders with Tree Hugger affinity are deeply connected to green spaces, possibly enhancing the effects of trees and parks.",
      "Wind Whisperer":
        "Builders with Wind Whisperer affinity have a natural affinity for wind energy, offering potential bonuses with windmills.",
    },
  },
  "Urban Planning Expertise": {
    Icon: CubeIcon,
    description:
      "Urban Planning Expertise represents the Builder's primary area of focus in city development. Each specialization aligns with key aspects of TileVille's gameplay",
    values: {
      "Agricultural Planner":
        "Builders with Agricultural Planner expertise are skilled in optimizing farmland and food production, potentially improving resource management.",
      "Residential Developer":
        "Builders with Residential Developer expertise are experts in housing and community planning, possibly increasing population growth and satisfaction.",
      "Energy Grid Innovator":
        "Builders with Energy Grid Innovator expertise specialize in power infrastructure, potentially boosting energy production and distribution efficiency.",
      "Green Space Designer":
        "Builders with Green Space Designer expertise are masterful in creating parks and green areas, possibly enhancing city aesthetics and resident happiness.",
      "Street Specialist":
        "Builders with Street Specialist expertise excel in designing efficient road networks, potentially improving connectivity and traffic flow.",
    },
  },
  "Special Ability": {
    Icon: LightningBoltIcon,
    description: "Each Builder possesses a unique talent that sets them apart",
    values: {
      "Home Sweet Home":
        "Builders with Home Sweet Home ability can optimize house placement, potentially increasing residential satisfaction and efficiency.",
      "Aqua Boost":
        "Builders with Aqua Boost ability can improve water resource management, possibly enhancing water-related infrastructure.",
      "Power Surge":
        "Builders with Power Surge ability can boost windmill output, potentially increasing energy production.",

      "Green Thumb":
        "Builders with Green Thumb ability can accelerate tree and park growth, possibly enhancing city beautification.",
      "Rapid Transit":
        "Builders with Rapid Transit ability can enable faster street connections, potentially speeding up city expansion.",
    },
  },
  Edition: {
    Icon: FileTextIcon,
    description: "NFTs Edition",
    values: {
      First: "This NFT is part of our first edition of TileVille Builders.",
    },
  },
};

export const NFT_DESCRIPTION =
  "This NFT is part of our first edition of TileVille Builders.";

export const PAGINATION_SIBLING_COUNT = 1;
export const NFT_PAGE_SIZE = 20;

export const DEFAULT_POSTER_URL = "/img/avatars/2.jpeg";
export const ACTIVE_GAMES_URL = "/profile?tab=active-games";
export const COLLECTION_URL = "/profile?tab=collection";

export const HIDE_BACK_BUTTON_PATHS = ["/main-menu", "/"];
export const BACKGROUND_PATHS_HEADER = [
  "/traits-info",
  "/marketplace",
  "/competitions",
  "/leaderboard",
  "/faq",
];
export const NAVIGATION_MENU_ITEMS = [
  {
    name: "Play Game",
    key: 0,
    href: "/competitions",
  },
  {
    name: "Guide",
    key: 1,
    targetBlank: false,
    href: "/guide",
  },

  {
    name: "Leaderboard",
    key: 2,
    targetBlank: false,
    href: "/leaderboard",
  },
  {
    name: "Community Section",
    key: 7,
    targetBlank: false,
    href: "/community",
  },

  {
    name: "User Profile",
    key: 3,
    targetBlank: false,
    href: "/profile",
  },
  {
    name: "NFTS MARKETPLACE",
    key: 4,
    targetBlank: false,
    href: "/marketplace",
  },
  {
    name: "FAQ",
    key: 5,
    targetBlank: false,
    href: "/faq",
  },

  {
    name: "ZKNOID games store",
    key: 6,
    href: "https://app.zknoid.io/",
    targetBlank: true,
  },
];

export const MOB_NAV_MENU_ITEMS = [
  {
    name: "Play Game",
    key: 0,
    href: "/competitions",
  },
  {
    name: "Guide",
    key: 1,
    targetBlank: false,
    href: "/guide",
  },

  {
    name: "Leaderboard",
    key: 2,
    targetBlank: false,
    href: "/leaderboard",
  },
  {
    name: "Community Section",
    key: 7,
    targetBlank: false,
    href: "/community",
  },

  {
    name: "User Profile",
    key: 3,
    targetBlank: false,
    href: COLLECTION_URL,
  },
  {
    name: "NFTS MARKETPLACE",
    key: 4,
    targetBlank: false,
    href: "/marketplace",
  },
  {
    name: "FAQ",
    key: 5,
    targetBlank: false,
    href: "/faq",
  },
];

export const TABS_HEADINGS = [
  {
    value: "collection",
    text: "Digital Collection",
    showOnPublicProfile: true,
  },
  {
    value: "active-games",
    text: "Active Games",
    showOnPublicProfile: false,
  },
  {
    value: "past-games",
    text: "Past Games",
    showOnPublicProfile: true,
  },
  {
    value: "transactions",
    text: "transactions",
    showOnPublicProfile: false,
  },
  {
    value: "preferences",
    text: "Preferences",
    showOnPublicProfile: false,
  },
];

export const TRACKS = [
  {
    url: "/sfx/ambience.wav",
    title: "Ambience",
    tags: ["house"],
  },
  {
    url: "/medias/sound1.ogg",
    title: "Melody Of Nature",
    tags: ["dnb"],
  },
  {
    url: "/medias/sound2.ogg",
    title: "scott buckley moonlight",
    tags: ["dnb"],
  },
];

export const TOGGLE_GROUP_OPTIONS = [
  {
    iconSrc: "/icons/gridFour.svg",
    gridApplyClass:
      "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
    id: 0,
  },
  {
    iconSrc: "/icons/gridEight.svg",
    gridApplyClass:
      "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2",
    id: 1,
  },
  {
    iconSrc: "/icons/listThree.svg",
    gridApplyClass: "list-style gap-2",
    id: 2,
  },
];

export const SORT_OPTIONS = [
  {
    text: "Price: High to Low",
    id: 0,
  },
  {
    text: "Price: Low to High",
    id: 1,
  },
];

export const INITIAL_MINT_RESPONSE = {
  state: "idle",
  success: false,
  message: "",
  reason: "",
  txHash: "",
};

export const LEADERBOARD_COLUMNS = [
  "Rank",
  "Username",
  "Wallet Address",
  "Game Id",
  "Score",
];

export const TABLE_SKELETON_CONTENT = [
  "171732534",
  "1717325346195sdfsad1717325346195sdfsad1717325346195sdfsadsdfsdf",
  "7asdfasdfs0",
  "70",
];

export const PRIMARY_BUTTON_STYLES =
  "w-full max-w-[128px] rounded-lg border border-primary bg-[#93B068] py-[3px] px-2 text-sm font-bold text-primary shadow-[0px_1px_4px_0px_#89AB5D]";

export const PRIMARY_BUTTON_STYLES_LG =
  "w-full border border-primary bg-[#93B068] py-1 px-2 text-base font-bold text-primary shadow-[0px_1px_4px_0px_#89AB5D]";

export const FOLLOWING_BTN_LG = `${PRIMARY_BUTTON_STYLES_LG} hover:text-[#830A0A] hover:border-[#820909] hover:shadow-[2px_2px_11px_3px_#82090922]`;

export const FOLLOWING_BTN = `${PRIMARY_BUTTON_STYLES} hover:text-[#830A0A] hover:border-[#820909] hover:shadow-[2px_2px_11px_3px_#82090922]`;

export const BADGE_BASE_CLASSES =
  "flex items-center justify-center gap-1 whitespace-nowrap rounded-[5px] bg-primary/20 px-1 py-[1px] text-[10px] text-[#445137";
