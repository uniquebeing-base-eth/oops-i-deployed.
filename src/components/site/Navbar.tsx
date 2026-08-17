import { useEffect, useState } from "react";
import mascot from "@/assets/mascot-hero.png";
import { DEPLOY_CONFIG } from "@/lib/deploy-config";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#nfts", label: "NFTs" },
  { href: "#lore", label: "Lore" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "border-b-2 border-border bg-background/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center overflow-hidden rounded-full border-2 border-border bg-card">
            <img src={mascot} alt="" width={36} height={36} className="size-8 object-cover" />
          </span>
          <span className="font-display text-sm leading-none tracking-tight sm:text-base">
            OOPS<span className="text-deploy">.</span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-4">
          <ul className="hidden items-center gap-1 sm:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={DEPLOY_CONFIG.poolsFunUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border-2 border-border bg-deploy px-4 py-2 text-xs font-bold uppercase tracking-wide text-deploy-foreground shadow-hard-sm transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:text-sm"
          >
            Get {DEPLOY_CONFIG.ticker}
          </a>
        </div>
      </nav>
    </header>
  );
}
