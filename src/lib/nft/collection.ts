import oops from "@/assets/nft-oops.jpg";
import founder from "@/assets/nft-founder.jpg";
import night from "@/assets/nft-night.jpg";
import poolside from "@/assets/nft-poolside.jpg";
import debuggerImg from "@/assets/nft-debugger.jpg";
import maxdeploy from "@/assets/nft-maxdeploy.jpg";
import genesis from "@/assets/nft-genesis.jpg";
import lastdeploy from "@/assets/nft-lastdeploy.jpg";
import hacker from "@/assets/nft-hacker.jpg";
import deployking from "@/assets/nft-deployking.jpg";

import type { CombinationTitle, Deployer, Traits } from "./types";

/**
 * Special titles unlocked by trait combinations.
 * Add new entries here — the detail card resolves them automatically.
 */
export const COMBINATION_TITLES: CombinationTitle[] = [
  {
    title: "THE HACKER",
    match: { background: "Server Room", outfit: "Hacker Outfit", eyes: "Laser Eyes", accessories: "Laptop" },
  },
  {
    title: "POOL DEGEN",
    match: { background: "Pool Green", outfit: "Poolside Shirt", eyes: "Sunglasses", accessories: "Coffee" },
  },
  {
    title: "NIGHT SHIFT",
    match: { background: "Terminal", outfit: "Black DEPLOY Hoodie", eyes: "Sleepy", accessories: "Coffee" },
  },
  {
    title: "DEPLOY KING",
    match: { background: "Golden Deploy", headwear: "Golden Crown", eyes: "Golden Eyes" },
  },
];

export function resolveCombinationTitle(traits: Traits): string | undefined {
  return COMBINATION_TITLES.find((c) =>
    Object.entries(c.match).every(([k, v]) => traits[k as keyof Traits] === v),
  )?.title;
}

/**
 * Curated sample metadata. Swap for a fetch of real IPFS/Arweave metadata
 * later — every component consumes the `Deployer` shape, not these constants.
 */
export const SAMPLE_DEPLOYERS: Deployer[] = [
  {
    tokenId: 1,
    name: "THE FIRST DEPLOY",
    image: genesis,
    rarity: "1/1",
    lore: "The first mistake.",
    traits: {
      background: "Genesis",
      headwear: "The Original Cap",
      eyes: "Normal",
      expression: "Neutral",
      outfit: "The Deployer",
      accessories: "The Original Deploy Button",
      specialEffect: "Golden Aura",
    },
  },
  {
    tokenId: 100,
    name: "THE CENTURY",
    image: founder,
    rarity: "Legendary",
    lore: "100 deployments in. Nobody stopped him.",
    traits: {
      background: "Golden Deploy",
      headwear: "Golden DEPLOY Cap",
      eyes: "Money Eyes",
      expression: "Smirk",
      outfit: "Golden Suit",
      accessories: "The Bag",
      specialEffect: "Sparkles",
    },
  },
  {
    tokenId: 404,
    name: "THE DEBUGGER",
    image: debuggerImg,
    rarity: "Rare",
    lore: "Fixed it. Broke two other things.",
    traits: {
      background: "Error 404",
      headwear: "Programmer Hood",
      eyes: "Pixel Eyes",
      expression: "Confused",
      outfit: "Developer Tee",
      accessories: "Keyboard",
      specialEffect: "Digital Glitch",
    },
  },
  {
    tokenId: 777,
    name: "THE HACKER",
    image: hacker,
    rarity: "Epic",
    lore: "Says he's whitehat. The logs disagree.",
    traits: {
      background: "Server Room",
      headwear: "Programmer Hood",
      eyes: "Laser Eyes",
      expression: "Smirk",
      outfit: "Hacker Outfit",
      accessories: "Laptop",
      specialEffect: "Green Particles",
    },
  },
  {
    tokenId: 1000,
    name: "ONE THOUSAND",
    image: maxdeploy,
    rarity: "Legendary",
    lore: "Still deploying.",
    traits: {
      background: "Warning Red",
      headwear: "Burning Crown",
      eyes: "Fire Eyes",
      expression: "OH NO",
      outfit: "Final Boss",
      accessories: "Giant Deploy Button",
      specialEffect: "Red Warning Aura",
    },
  },
  {
    tokenId: 2048,
    name: "POOL DEGEN",
    image: poolside,
    rarity: "Uncommon",
    lore: "Liquidity is warm this time of year.",
    traits: {
      background: "Pool Green",
      headwear: "Pool Visor",
      eyes: "Sunglasses",
      expression: "Smile",
      outfit: "Poolside Shirt",
      accessories: "Coffee",
      specialEffect: "Bubbles",
    },
  },
  {
    tokenId: 3141,
    name: "NIGHT SHIFT",
    image: night,
    rarity: "Rare",
    lore: "Commits at 3AM hit different.",
    traits: {
      background: "Terminal",
      headwear: "Black Beanie",
      eyes: "Sleepy",
      expression: "Neutral",
      outfit: "Black DEPLOY Hoodie",
      accessories: "Coffee",
      specialEffect: "Small Glitch",
    },
  },
  {
    tokenId: 5000,
    name: "HALFWAY THERE",
    image: oops,
    rarity: "Common",
    lore: "Five thousand mistakes deep. Coffee required.",
    traits: {
      background: "Deploy Cream",
      headwear: "DEPLOY Cap",
      eyes: "Worried",
      expression: "Nervous",
      outfit: "Green DEPLOY Hoodie",
      accessories: "Coffee",
      specialEffect: "None",
    },
  },
  {
    tokenId: 8888,
    name: "DEPLOY KING",
    image: deployking,
    rarity: "Epic",
    lore: "Crowned by nobody. Rules anyway.",
    traits: {
      background: "Golden Deploy",
      headwear: "Golden Crown",
      eyes: "Golden Eyes",
      expression: "The Forbidden Smile",
      outfit: "Royal Robe",
      accessories: "Golden Contract",
      specialEffect: "Rainbow Aura",
    },
  },
  {
    tokenId: 9999,
    name: "SECOND TO LAST",
    image: oops,
    rarity: "Uncommon",
    lore: "Wait… we're almost done?",
    traits: {
      background: "Midnight",
      headwear: "Backwards DEPLOY Cap",
      eyes: "Wide Eyes",
      expression: "Shocked",
      outfit: "White DEPLOY Hoodie",
      accessories: "Phone",
      specialEffect: "Speed Lines",
    },
  },
  {
    tokenId: 10000,
    name: "THE LAST DEPLOY",
    image: lastdeploy,
    rarity: "1/1",
    lore: "It was supposed to be the last one.",
    traits: {
      background: "The Void",
      headwear: "Infinite Deploy Crown",
      eyes: "The All Seeing Deploy",
      expression: "The Screaming Deploy",
      outfit: "Ancient Deployer",
      accessories: "The Contract",
      specialEffect: "Infinite Deploy",
    },
  },
  {
    tokenId: 42,
    name: "WORKS ON MY MACHINE",
    image: founder,
    rarity: "Common",
    lore: "It did, though.",
    traits: {
      background: "Deploy Cream",
      headwear: "Green Beanie",
      eyes: "Suspicious",
      expression: "Smirk",
      outfit: "Developer Tee",
      accessories: "Laptop",
      specialEffect: "None",
    },
  },
];

export const FEATURED_DEPLOYER = SAMPLE_DEPLOYERS[0]!;

export type SpecialDeployer = { name: string; description: string };

export const SPECIAL_DEPLOYERS: SpecialDeployer[] = [
  { name: "WHO GAVE HIM ROOT ACCESS?", description: "Nobody. He found the keys under the mat." },
  { name: "DO NOT PRESS", description: "The label was clear. The duck was not." },
  { name: "IT'S LIVE", description: "Announced before anyone checked. Classic." },
  { name: "OOPS", description: "The original reaction. Still the best one." },
  { name: "STILL LOADING", description: "Deployed months ago. Spinner never stopped." },
  { name: "WORKS ON MY MACHINE", description: "A defence used exactly once, forever." },
  { name: "PROD ON FRIDAY", description: "Shipped at 17:58. Left the building at 17:59." },
  { name: "NO TESTNET", description: "Testnet is for people with doubts." },
  { name: "WHOOPSIE", description: "Small word. Very large transaction." },
];
