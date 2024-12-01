import React from "react";
import { TraitsInfoTooltip } from "./TraitsInfoTooltip";
import { Json } from "@/lib/database.types"; // Import the Json type from your database types
import { useAtomValue } from "jotai";
import { globalConfigAtom } from "@/contexts/atoms";
import { NFT_COLLECTIONS } from "@/constants";

type TraitsIntoCardType = {
  traitKey: string;
  traitIcon: any;
  traitValue: string | number;
  description: string;
  value: string;
};

interface TraitsRarityCounts {
  [traitName: string]: {
    [traitValue: string]: number;
  };
}

interface ConfigValues {
  total_nft_count: string;
  nft_mint_start_date: string;
  traits_rarity_counts: TraitsRarityCounts;
}

interface GlobalConfig {
  created_at: string;
  id: number;
  name: string | null;
  config_values: Json;
}


//TODO: This component is currently tied to Tileville NFT collection. Needs to make this generic to support other collections as well
export const TraitsInfoCard = ({
  traitKey,
  traitIcon,
  traitValue,
  description,
  value,
}: TraitsIntoCardType) => {
  const globalConfig = useAtomValue(globalConfigAtom)
  const configValues = globalConfig?.nft_collections_config?.[NFT_COLLECTIONS.TILEVILLE]
  const rarityData = configValues?.traits_rarity_counts;
  const traitCount = rarityData?.[traitKey]?.[traitValue as string] ?? 0;
  const totalNFTCount = parseInt(configValues?.total_nft_count || "0", 10);
  const rarityPercentage = getRarityPercentage(traitCount, totalNFTCount);
  const textColor = getRarityColor(rarityPercentage);
  const bgColor = getRarityBackgroundColor(rarityPercentage);

  return (
    <li className="relative flex flex-col items-center gap-2 rounded-md bg-white px-3 py-5">
      <div className="flex items-center gap-2">
        <span className="text-black/70">{traitKey}</span>

        <span className="absolute left-2 top-2">
          {React.createElement(traitIcon)}
        </span>

        <TraitsInfoTooltip description={description} value={value} />
      </div>
      <div className="text-md font-semibold">{traitValue}</div>

      <div>
        <span className={`block rounded p-2 ${bgColor}`}>
          <span className="mr-1">{traitCount}</span>
          <span className={`font-semibold ${textColor}`}>
            {rarityPercentage}%
          </span>
        </span>
      </div>
    </li>
  );
};

const getRarityColor = (percentage: number) => {
  if (percentage < 5) {
    return "text-red-900";
  } else if (percentage < 20) {
    return "text-[#a5a51b]";
  } else {
    return "text-primary";
  }
};

const getRarityBackgroundColor = (percentage: number) => {
  if (percentage < 5) {
    return "bg-[red]/10";
  } else if (percentage < 20) {
    return "bg-[yellow]/10";
  } else {
    return "bg-primary/30";
  }
};

const getRarityPercentage = (count: number, total: number) => {
  return Math.ceil((count / total) * 100);
};
