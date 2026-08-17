import { FEATURED_DEPLOYER, resolveCombinationTitle } from "@/lib/nft/collection";
import { TRAIT_CATEGORIES, TRAIT_CATEGORY_LABELS } from "@/lib/nft/types";
import { DEPLOY_CONFIG } from "@/lib/deploy-config";
import { RarityBadge, tokenLabel } from "./DeployerCard";

const STATS = [
  { value: DEPLOY_CONFIG.totalSupply.toLocaleString(), label: "Total deployed" },
  { value: DEPLOY_CONFIG.chain, label: "Chain" },
  { value: "7", label: "Trait categories" },
  { value: "6", label: "Rarities" },
];

export function TheDeployed() {
  const f = FEATURED_DEPLOYER;
  const combo = f.title ?? resolveCombinationTitle(f.traits);

  return (
    <section id="nfts" className="border-b-2 border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            The collection
          </span>
          <h2 className="mt-2 text-5xl sm:text-7xl">The Deployed</h2>
          <p className="mt-4 font-display text-xl uppercase leading-snug sm:text-2xl">
            10,000 little mistakes.
            <br />
            Every one was deployed differently.
          </p>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Somewhere between the button press and the transaction confirmation, something went wrong.
            Or right. Nobody really knows. 10,000 Deployers were born from the mistake.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="card-hard p-5">
              <div className="font-display text-3xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Featured collectible card */}
        <div className="card-hard mt-10 grid gap-0 overflow-hidden p-0 md:grid-cols-[minmax(0,420px)_1fr]">
          <div className="relative border-b-2 border-border md:border-b-0 md:border-r-2">
            <img
              src={f.image}
              alt={`Featured Deployer ${tokenLabel(f.tokenId)} — ${f.name}`}
              width={816}
              height={816}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full border-2 border-border bg-background px-3 py-1 font-mono text-xs font-bold">
              {tokenLabel(f.tokenId)}
            </span>
          </div>

          <div className="p-6 md:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Featured deployer
            </span>
            <h3 className="mt-2 text-3xl sm:text-4xl">{f.name}</h3>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <RarityBadge rarity={f.rarity} />
              {combo && (
                <span className="rounded-full border-2 border-border bg-deploy px-2.5 py-1 font-mono text-[11px] font-bold uppercase text-deploy-foreground">
                  {combo}
                </span>
              )}
            </div>
            {f.lore && (
              <p className="mt-5 border-l-2 border-deploy pl-3 text-xl italic text-muted-foreground">
                “{f.lore}”
              </p>
            )}
            <dl className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {TRAIT_CATEGORIES.map((cat) => (
                <div key={cat} className="rounded-xl border-2 border-border bg-secondary px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {TRAIT_CATEGORY_LABELS[cat]}
                  </dt>
                  <dd className="text-sm font-medium">{f.traits[cat]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
