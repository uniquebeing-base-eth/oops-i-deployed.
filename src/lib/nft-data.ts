import oops from "@/assets/nft-oops.jpg";
import founder from "@/assets/nft-founder.jpg";
import night from "@/assets/nft-night.jpg";
import poolside from "@/assets/nft-poolside.jpg";
import debuggerImg from "@/assets/nft-debugger.jpg";
import maxdeploy from "@/assets/nft-maxdeploy.jpg";

export type Deployer = {
  id: number;
  name: string;
  image: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Legendary";
  traits: string[];
};

/**
 * Sample metadata. Later this becomes a fetch of the real 10,000-item
 * collection metadata — the card component only needs this shape.
 */
export const SAMPLE_DEPLOYERS: Deployer[] = [
  { id: 1, name: "Oops", image: oops, rarity: "Common", traits: ["Classic Cap", "Green Bandana", "Blank Stare"] },
  { id: 7, name: "Founder", image: founder, rarity: "Legendary", traits: ["Gold Crown Cap", "Founder Hoodie", "Smug"] },
  { id: 42, name: "Night Shift", image: night, rarity: "Rare", traits: ["Headphones", "Starfield", "3AM Commit"] },
  { id: 88, name: "Poolside", image: poolside, rarity: "Uncommon", traits: ["Unicorn Float", "Backwards Cap", "Wet"] },
  { id: 404, name: "Debugger", image: debuggerImg, rarity: "Rare", traits: ["Code Glasses", "Mint Room", "console.log"] },
  { id: 999, name: "Max Deploy", image: maxdeploy, rarity: "Legendary", traits: ["Button Board", "Red Alert", "No Regrets"] },
];
