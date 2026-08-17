import { SAMPLE_DEPLOYERS, type Deployer } from "@/lib/nft-data";
import { DEPLOY_CONFIG } from "@/lib/deploy-config";

function DeployerCard({ item }: { item: Deployer }) {
  return (
    <article className="card-hard overflow-hidden p-0">
      <div className="relative border-b-2 border-border">
        <img
          src={item.image}
          alt={`Deployer #${item.id} — ${item.name}`}
          width={816}
          height={816}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full border-2 border-border bg-background px-2.5 py-1 font-mono text-[11px] font-bold">
          #{String(item.id).padStart(4, "0")}
        </span>
        <span className="absolute right-3 top-3 rounded-full border-2 border-border bg-deploy px-2.5 py-1 font-mono text-[11px] font-bold text-deploy-foreground">
          {item.rarity}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl">{item.name}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {item.traits.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border/40 bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function NftGallery() {
  return (
    <section className="border-b-2 border-border bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl">Gallery</h2>
            <p className="mt-2 text-muted-foreground">A preview of the traits. Six of {DEPLOY_CONFIG.totalSupply.toLocaleString()}.</p>
          </div>
          <span className="rounded-full border-2 border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-widest">
            more soon
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_DEPLOYERS.map((item) => (
            <DeployerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
