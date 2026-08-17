import type { Deployer } from "@/lib/nft/types";
import { RARITY_STYLES } from "@/lib/nft/traits";

export function tokenLabel(tokenId: number) {
  return `#${String(tokenId).padStart(4, "0")}`;
}

export function RarityBadge({ rarity, className = "" }: { rarity: string; className?: string }) {
  return (
    <span
      className={`rounded-full border-2 border-border px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wide ${RARITY_STYLES[rarity] ?? "bg-secondary"} ${className}`}
    >
      {rarity}
    </span>
  );
}

export function DeployerCard({ item, onSelect }: { item: Deployer; onSelect: (d: Deployer) => void }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="card-hard overflow-hidden p-0 text-left"
      aria-label={`Open ${tokenLabel(item.tokenId)} ${item.name}`}
    >
      <div className="relative border-b-2 border-border">
        <img
          src={item.image}
          alt={`Deployer ${tokenLabel(item.tokenId)} — ${item.name}`}
          width={816}
          height={816}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full border-2 border-border bg-background px-2.5 py-1 font-mono text-[11px] font-bold">
          {tokenLabel(item.tokenId)}
        </span>
        <RarityBadge rarity={item.rarity} className="absolute right-3 top-3" />
      </div>
      <div className="p-4">
        <h3 className="text-lg leading-tight">{item.name}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {[item.traits.headwear, item.traits.eyes, item.traits.accessories].map((t) => (
            <li
              key={t}
              className="rounded-full border border-border/40 bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
