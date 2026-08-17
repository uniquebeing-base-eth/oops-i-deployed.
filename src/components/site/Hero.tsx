import mascot from "@/assets/mascot-hero.png";
import { DEPLOY_CONFIG } from "@/lib/deploy-config";

export function Hero() {
  return (
    <section id="home" className="paper-grid relative overflow-hidden border-b-2 border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-hard-sm">
            <span className="size-2 rounded-full bg-goo" />
            {DEPLOY_CONFIG.ticker} · unofficial meme
          </span>

          <h1 className="mt-5 text-5xl leading-[0.85] sm:text-7xl lg:text-8xl">
            Oops,
            <br />I<span className="text-deploy"> deployed</span>.
          </h1>

          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            “I think I pressed deploy.” A duck-shaped accident that became a coin, born on Pools.fun and
            never apologised for.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={DEPLOY_CONFIG.poolsFunUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border-2 border-border bg-deploy px-6 py-3 font-display text-sm text-deploy-foreground shadow-hard transition-transform hover:-translate-y-0.5 active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
            >
              Get {DEPLOY_CONFIG.ticker}
            </a>
            <a
              href="#nfts"
              className="rounded-full border-2 border-border bg-card px-6 py-3 font-display text-sm shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Meet the Deployers
            </a>
          </div>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {[
              ["Supply", DEPLOY_CONFIG.totalSupply.toLocaleString()],
              ["Chain", DEPLOY_CONFIG.chain],
              ["Regrets", "0"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="font-display text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-6 -z-10 rotate-6 rounded-[3rem] border-2 border-border bg-goo/20" />
          <img
            src={mascot}
            alt="The DEPLOY mascot: a green duck in a black hoodie pressing a giant red deploy button from a unicorn pool float"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-md animate-bob drop-shadow-xl"
          />
        </div>
      </div>

      <div className="overflow-hidden border-t-2 border-border bg-ink py-2">
        <div className="flex w-max animate-marquee gap-6 whitespace-nowrap font-display text-sm text-cream">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-6">
              {["do not press", "too late", "oops", "deploy more", "10,000 little deployers", "quack"].map((t) => (
                <span key={t} className="flex items-center gap-6">
                  {t} <span className="text-deploy">●</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
