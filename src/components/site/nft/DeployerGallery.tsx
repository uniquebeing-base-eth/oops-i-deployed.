import { useMemo, useState } from "react";
import { SAMPLE_DEPLOYERS } from "@/lib/nft/collection";
import { RARITIES, TRAIT_CATEGORIES, TRAIT_CATEGORY_LABELS, type Deployer, type TraitCategory } from "@/lib/nft/types";
import { DeployerCard } from "./DeployerCard";
import { DeployerDialog } from "./DeployerDialog";

type RarityFilter = "All" | (typeof RARITIES)[number];
const RARITY_FILTERS: RarityFilter[] = ["All", ...RARITIES];

export function DeployerGallery() {
  const [rarity, setRarity] = useState<RarityFilter>("All");
  const [traitCat, setTraitCat] = useState<TraitCategory | "">("");
  const [traitValue, setTraitValue] = useState<string>("");
  const [selected, setSelected] = useState<Deployer | null>(null);

  const traitValues = useMemo(() => {
    if (!traitCat) return [];
    return Array.from(new Set(SAMPLE_DEPLOYERS.map((d) => d.traits[traitCat]))).sort();
  }, [traitCat]);

  const items = useMemo(
    () =>
      SAMPLE_DEPLOYERS.filter((d) => rarity === "All" || d.rarity === rarity).filter(
        (d) => !traitCat || !traitValue || d.traits[traitCat] === traitValue,
      ),
    [rarity, traitCat, traitValue],
  );

  return (
    <section className="border-b-2 border-border bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl">The gallery</h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              A curated preview of the Deployers. Sample metadata only — not the final rarity
              distribution.
            </p>
          </div>
          <span className="rounded-full border-2 border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-widest">
            {items.length} shown
          </span>
        </div>

        {/* Rarity filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {RARITY_FILTERS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRarity(r)}
              aria-pressed={rarity === r}
              className={`rounded-full border-2 border-border px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
                rarity === r
                  ? "bg-primary text-primary-foreground shadow-hard-sm"
                  : "bg-background text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Trait filters */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Traits
          </span>
          <select
            value={traitCat}
            onChange={(e) => {
              setTraitCat(e.target.value as TraitCategory | "");
              setTraitValue("");
            }}
            aria-label="Filter by trait category"
            className="rounded-full border-2 border-border bg-background px-3 py-2 text-xs font-bold uppercase tracking-wide"
          >
            <option value="">Any category</option>
            {TRAIT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {TRAIT_CATEGORY_LABELS[c]}
              </option>
            ))}
          </select>
          {traitCat && (
            <select
              value={traitValue}
              onChange={(e) => setTraitValue(e.target.value)}
              aria-label="Filter by trait value"
              className="rounded-full border-2 border-border bg-background px-3 py-2 text-xs font-bold uppercase tracking-wide"
            >
              <option value="">Any {TRAIT_CATEGORY_LABELS[traitCat].toLowerCase()}</option>
              {traitValues.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          )}
        </div>

        {items.length === 0 ? (
          <p className="card-hard mt-8 p-6 text-center text-muted-foreground">
            No deployers here yet. They’re probably still deploying.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <DeployerCard key={item.tokenId} item={item} onSelect={setSelected} />
            ))}
          </div>
        )}
      </div>

      <DeployerDialog deployer={selected} onOpenChange={(o) => !o && setSelected(null)} />
    </section>
  );
}
