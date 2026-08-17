import mascot from "@/assets/mascot-hero.png";

export function Lore() {
  return (
    <section id="lore" className="border-b-2 border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:py-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The lore</span>
          <h2 className="mt-2 text-4xl sm:text-6xl">It was an accident.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              The duck was floating. Unicorn float, pool water, absolutely no plans. Somebody left a big
              red button on the edge of the pool, the way somebody always does.
            </p>
            <p>
              He leaned over to move it. His wing slipped.{" "}
              <span className="font-display text-foreground">Click.</span>
            </p>
            <p>
              Somewhere a contract went live. A chart appeared. Strangers started typing “wagmi” at him.
              He tried to explain that it was an accident, but the only word he knows is quack, and by
              then it had already 40x’d.
            </p>
            <p className="font-display text-foreground">
              So he shrugged, adjusted the cap, and pressed it again.
            </p>
          </div>
        </div>
        <img
          src={mascot}
          alt="The DEPLOY mascot pressing the button again"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-full max-w-xs rotate-3 md:max-w-sm"
        />
      </div>
    </section>
  );
}
