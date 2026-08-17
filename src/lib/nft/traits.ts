import type { Rarity, TraitCategory } from "./types";

/**
 * The trait bible. Later this can be replaced by the generator's real
 * trait manifest — the UI only reads category -> rarity -> values.
 */
export const TRAIT_BIBLE: Record<TraitCategory, Partial<Record<Rarity | "Ultra rare", string[]>>> = {
  background: {
    Common: ["Deploy Cream", "Pool Green", "Warning Red", "Terminal", "Midnight"],
    Uncommon: ["Server Room", "Liquidity Pool", "Error 404"],
    Rare: ["Rainbow Glitch", "The Void"],
    Legendary: ["Golden Deploy", "Genesis"],
  },
  headwear: {
    Common: ["DEPLOY Cap", "Backwards DEPLOY Cap", "Green Beanie", "Builder Helmet", "Black Beanie"],
    Uncommon: ["Cowboy Hat", "Bucket Hat", "Security Helmet", "Programmer Hood", "Pool Visor"],
    Rare: ["Crown", "Wizard Hat", "Pirate Hat", "Detective Hat", "Chef Hat"],
    Epic: ["Astronaut Helmet", "Samurai Helmet", "Golden Crown", "Glitch Helmet"],
    Legendary: ["Halo", "Burning Crown", "Infinite Deploy Crown"],
    "Ultra rare": ["The Original Cap", "Golden DEPLOY Cap", "Forbidden Hat"],
  },
  eyes: {
    Common: ["Normal", "Happy", "Worried", "Suspicious", "Sleepy"],
    Uncommon: ["Sunglasses", "Wide Eyes", "Side Eye", "Angry", "Crying"],
    Rare: ["Laser Eyes", "X Eyes", "Money Eyes", "Pixel Eyes", "Glitch Eyes"],
    Epic: ["Cosmic Eyes", "Fire Eyes", "Rainbow Eyes", "Terminal Eyes"],
    Legendary: ["The All Seeing Deploy", "Void Eyes", "Golden Eyes"],
  },
  expression: {
    Common: ["Neutral", "Smile", "Open Mouth", "Smirk"],
    Uncommon: ["Tongue Out", "Shocked", "Nervous", "Confused"],
    Rare: ["Gold Teeth", "Vampire Fangs", "Cigarette", "Bubblegum", "OH NO"],
    Epic: ["Fire Breath", "Rainbow Tongue", "Glitch Mouth"],
    Legendary: ["The Screaming Deploy", "The Forbidden Smile"],
  },
  outfit: {
    Common: [
      "Black DEPLOY Hoodie",
      "Green DEPLOY Hoodie",
      "White DEPLOY Hoodie",
      "Developer Tee",
      "Poolside Shirt",
    ],
    Uncommon: [
      "Business Suit",
      "Construction Vest",
      "Mechanic Outfit",
      "Security Outfit",
      "Chef Outfit",
      "Delivery Uniform",
    ],
    Rare: [
      "Hacker Outfit",
      "Cowboy Outfit",
      "Samurai Outfit",
      "Pirate Outfit",
      "Prison Outfit",
      "Astronaut Suit",
    ],
    Epic: ["Royal Robe", "Cyber Suit", "Superhero Suit", "Mad Scientist", "Space Commander"],
    Legendary: ["Golden Suit", "Ancient Deployer", "Final Boss", "The Deployer"],
  },
  accessories: {
    Common: ["Coffee", "Phone", "Laptop", "Keyboard", "Mouse", "Clipboard", "Water Bottle"],
    Uncommon: ["Contract", "Briefcase", "Toolbox", "Pizza", "Headphones", "Backpack", "Stack of Cash"],
    Rare: ["Giant Deploy Button", "Server", "Rocket", "Treasure Chest", "Diamond", "Golden Contract"],
    Epic: ["Floating Contract", "Portal", "Mini Pool", "Burning Laptop", "Infinite Keyboard"],
    Legendary: ["The Original Deploy Button", "The Contract", "The Pool", "The Bag"],
  },
  specialEffect: {
    Common: ["None"],
    Uncommon: ["Sparkles", "Small Glitch", "Bubbles", "Speed Lines"],
    Rare: ["Fire", "Lightning", "Green Particles", "Red Warning Aura", "Digital Glitch"],
    Epic: ["Rainbow Aura", "Cosmic Particles", "Portal", "Holographic Glitch"],
    Legendary: ["Golden Aura", "Black Hole", "Infinite Deploy", "System Override"],
  },
};

export const RARITY_STYLES: Record<string, string> = {
  Common: "bg-secondary text-foreground",
  Uncommon: "bg-goo text-goo-foreground",
  Rare: "bg-chart-5 text-primary-foreground",
  Epic: "bg-primary text-primary-foreground",
  Legendary: "bg-chart-4 text-ink",
  "1/1": "bg-deploy text-deploy-foreground",
};
