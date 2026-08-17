import { SPECIAL_DEPLOYERS } from "@/lib/nft/collection";

export function SpecialDeployers() {
  return (
    <section className="border-b-2 border-border bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Special lore deployers
        </span>
        <h2 className="mt-2 max-w-3xl text-3xl sm:text-5xl">The ones we shouldn’t have deployed</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Some were planned. Most were not. These got out anyway.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIAL_DEPLOYERS.map((s, i) => (
            <article key={s.name} className="card-hard p-5">
              <span className="font-mono text-[11px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-xl leading-tight">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
