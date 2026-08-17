export const RARITIES = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "1/1"] as const;
export type Rarity = (typeof RARITIES)[number];

export const TRAIT_CATEGORIES = [
  "background",
  "headwear",
  "eyes",
  "expression",
  "outfit",
  "accessories",
  "specialEffect",
] as const;
export type TraitCategory = (typeof TRAIT_CATEGORIES)[number];

export const TRAIT_CATEGORY_LABELS: Record<TraitCategory, string> = {
  background: "Background",
  headwear: "Headwear",
  eyes: "Eyes",
  expression: "Expression",
  outfit: "Outfit",
  accessories: "Accessories",
  specialEffect: "Special Effects",
};

export type Traits = Record<TraitCategory, string>;

/**
 * The shape real metadata will take once the collection is minted.
 * `image` becomes an IPFS/Arweave URL — everything else stays identical.
 */
export type Deployer = {
  tokenId: number;
  name: string;
  image: string;
  rarity: Rarity;
  title?: string;
  lore?: string;
  traits: Traits;
};

export type CombinationTitle = {
  title: string;
  /** Partial trait match — all listed traits must be present. */
  match: Partial<Traits>;
};
