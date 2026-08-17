import mascot from "@/assets/mascot-hero.png";
import { DEPLOY_CONFIG } from "@/lib/deploy-config";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src={mascot}
                alt=""
                width={48}
                height={48}
                loading="lazy"
                className="size-12 rounded-full border-2 border-border bg-card object-cover"
              />
              <span className="font-display text-2xl">
                {DEPLOY_CONFIG.ticker}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {DEPLOY_CONFIG.name} — a community meme that started on Pools.fun and got out of hand.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="text-xs tracking-widest text-muted-foreground">Site</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="#home" className="hover:text-deploy">Home</a></li>
                <li><a href="#nfts" className="hover:text-deploy">NFTs</a></li>
                <li><a href="#lore" className="hover:text-deploy">Lore</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs tracking-widest text-muted-foreground">Elsewhere</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={DEPLOY_CONFIG.poolsFunUrl} target="_blank" rel="noreferrer noopener" className="hover:text-deploy">
                    Pools.fun
                  </a>
                </li>
                <li>
                  <a href={DEPLOY_CONFIG.twitterUrl} target="_blank" rel="noreferrer noopener" className="hover:text-deploy">
                    X / Twitter
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-10 border-t-2 border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> {DEPLOY_CONFIG.name} ({DEPLOY_CONFIG.ticker})
          is an unofficial, community-created meme project. It is not affiliated with, sponsored by, or
          endorsed by oxdeployer, BNKR, or Pools.fun. Nothing here is financial advice. Meme coins and NFTs
          are highly speculative and you can lose everything. No contract has been deployed for the NFT
          collection yet; all mint interfaces on this site are placeholders.
        </p>
      </div>
    </footer>
  );
}
