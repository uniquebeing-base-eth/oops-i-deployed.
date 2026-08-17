import { useState } from "react";
import { DEPLOY_CONFIG } from "@/lib/deploy-config";

export function NftCollection() {
  const [qty, setQty] = useState(1);
  const [notice, setNotice] = useState(false);

  const stats = [
    { label: "Total supply", value: DEPLOY_CONFIG.totalSupply.toLocaleString() },
    { label: "Trait variations", value: `${DEPLOY_CONFIG.traitCount}+` },
    { label: "Mascot versions", value: "12" },
    { label: "Planned chain", value: DEPLOY_CONFIG.chain },
  ];

  return (
    <section id="nfts" className="border-b-2 border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            The collection
          </span>
          <h2 className="mt-2 text-4xl sm:text-6xl">The Deployed</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {DEPLOY_CONFIG.totalSupply.toLocaleString()} little deployers, each one convinced the button
            was a mistake and each one pressing it anyway. Same duck, different bad decision.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-hard p-5">
              <div className="font-display text-3xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="card-hard mt-8 flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl">Mint a deployer</h3>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Minting isn’t live yet — there is no contract deployed (ironic, we know). This is the real
              UI, waiting to be wired to {DEPLOY_CONFIG.chain}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border-2 border-border bg-background px-3 py-2">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="size-7 rounded-full border-2 border-border font-bold leading-none transition-colors hover:bg-secondary"
              >
                –
              </button>
              <span className="w-8 text-center font-display text-lg">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                className="size-7 rounded-full border-2 border-border font-bold leading-none transition-colors hover:bg-secondary"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => setNotice(true)}
              className="rounded-full border-2 border-border bg-goo px-7 py-3 font-display text-sm text-goo-foreground shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Mint
            </button>
          </div>
        </div>

        {notice && (
          <p className="mt-4 animate-pop rounded-2xl border-2 border-border bg-secondary px-4 py-3 text-sm">
            <strong>Not live yet.</strong> No contract exists and nothing was charged. Follow the socials —
            when the deployer finally presses the button, this will mint {qty} deployer{qty > 1 ? "s" : ""}.
          </p>
        )}
      </div>
    </section>
  );
}
