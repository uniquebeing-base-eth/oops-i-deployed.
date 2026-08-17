import { DEPLOY_CONFIG } from "@/lib/deploy-config";

export function MintPanel() {
  return (
    <section id="mint" className="border-b-2 border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="card-hard flex flex-col gap-8 p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-lg">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              The mint is coming
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl">The Deployed</h2>
            <p className="mt-3 font-display text-lg uppercase">10,000 little mistakes.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              No contract, no price, no date — nothing is live yet. When it is, it happens right here.
              Collect the mistake.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 md:min-w-[16rem]">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border-2 border-border bg-secondary px-4 py-3 text-center">
                <div className="font-display text-xl">{DEPLOY_CONFIG.totalSupply.toLocaleString()}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Total</div>
              </div>
              <div className="rounded-2xl border-2 border-border bg-secondary px-4 py-3 text-center">
                <div className="font-display text-xl">{DEPLOY_CONFIG.chain}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Chain</div>
              </div>
            </div>
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border-2 border-border bg-deploy px-8 py-4 font-display text-lg uppercase text-deploy-foreground opacity-70 shadow-hard-sm"
            >
              Mint soon
            </button>
            <p className="text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Wallet + minting not connected yet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
