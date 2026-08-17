import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TRAIT_CATEGORIES, TRAIT_CATEGORY_LABELS, type Deployer } from "@/lib/nft/types";
import { resolveCombinationTitle } from "@/lib/nft/collection";
import { RarityBadge, tokenLabel } from "./DeployerCard";

export function DeployerDialog({
  deployer,
  onOpenChange,
}: {
  deployer: Deployer | null;
  onOpenChange: (open: boolean) => void;
}) {
  const combo = deployer ? (deployer.title ?? resolveCombinationTitle(deployer.traits)) : undefined;

  return (
    <Dialog open={!!deployer} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-border bg-card sm:max-w-3xl">
        {deployer && (
          <>
            <DialogHeader className="text-left">
              <DialogTitle className="font-display text-2xl uppercase">
                {tokenLabel(deployer.tokenId)} · {deployer.name}
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-6 md:grid-cols-2">
              <img
                src={deployer.image}
                alt={`Deployer ${tokenLabel(deployer.tokenId)} — ${deployer.name}`}
                width={816}
                height={816}
                loading="lazy"
                className="aspect-square w-full rounded-2xl border-2 border-border object-cover"
              />

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <RarityBadge rarity={deployer.rarity} />
                  {combo && (
                    <span className="rounded-full border-2 border-border bg-deploy px-2.5 py-1 font-mono text-[11px] font-bold uppercase text-deploy-foreground">
                      {combo}
                    </span>
                  )}
                </div>

                {deployer.lore && (
                  <p className="mt-4 border-l-2 border-deploy pl-3 text-lg italic text-muted-foreground">
                    “{deployer.lore}”
                  </p>
                )}

                <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Traits
                </h4>
                <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {TRAIT_CATEGORIES.map((cat) => (
                    <div key={cat} className="rounded-xl border-2 border-border bg-secondary px-3 py-2">
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {TRAIT_CATEGORY_LABELS[cat]}
                      </dt>
                      <dd className="text-sm font-medium">{deployer.traits[cat]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
