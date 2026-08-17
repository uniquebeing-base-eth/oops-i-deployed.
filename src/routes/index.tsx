import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { DeployConsole } from "@/components/site/DeployConsole";
import { NftCollection } from "@/components/site/NftCollection";
import { NftGallery } from "@/components/site/NftGallery";
import { Lore } from "@/components/site/Lore";
import { Roadmap } from "@/components/site/Roadmap";
import { Footer } from "@/components/site/Footer";

const title = "Oops, I Deployed ($DEPLOY) — Unofficial Meme Coin & NFTs";
const description =
  "I think I pressed deploy. $DEPLOY is an unofficial community meme born on Pools.fun, plus THE DEPLOYED: 10,000 little deployer NFTs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <DeployConsole />
        <NftCollection />
        <NftGallery />
        <Lore />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
