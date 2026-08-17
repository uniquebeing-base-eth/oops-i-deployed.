const STEPS = [
  { n: "01", title: "Press deploy", body: "Already done. Could not be undone." },
  { n: "02", title: "Regret nothing", body: "Regret was considered and rejected by the community." },
  { n: "03", title: "Deploy more", body: "Buttons are cheap. Restraint is expensive." },
  { n: "04", title: "10,000 little deployers", body: "An entire species of small ducks with bad impulse control." },
];

export function Roadmap() {
  return (
    <section className="border-b-2 border-border bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-4xl sm:text-6xl">Roadmap</h2>
        <p className="mt-2 text-cream/70">Four steps. Three of them are the same step.</p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-3xl border-2 border-cream/25 bg-cream/5 p-6 transition-colors hover:border-deploy hover:bg-cream/10"
            >
              <span className="font-mono text-sm text-deploy">{s.n}</span>
              <h3 className="mt-3 text-2xl text-cream">{s.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
