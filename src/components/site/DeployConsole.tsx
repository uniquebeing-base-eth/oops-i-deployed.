import { useState } from "react";

const MESSAGES = [
  "too late.",
  "you deployed something. we don't know what.",
  "contract created. probably.",
  "oops. again.",
  "gas paid in vibes.",
  "that's 3 coins now.",
];

export function DeployConsole() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);

  const press = () => {
    const next = count + 1;
    setCount(next);
    setMessage(MESSAGES[(next - 1) % MESSAGES.length]);
    setPressed(true);
    window.setTimeout(() => setPressed(false), 180);
  };

  return (
    <section className="border-b-2 border-border bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="card-hard mx-auto max-w-3xl overflow-hidden p-0">
          <div className="flex items-center gap-2 border-b-2 border-border bg-ink px-4 py-2 font-mono text-xs text-cream">
            <span className="size-2.5 rounded-full bg-deploy" />
            <span className="size-2.5 rounded-full bg-goo" />
            <span className="ml-2 opacity-70">deploy-console — do not touch</span>
          </div>

          <div className="px-6 py-10 text-center sm:py-14">
            <h2 className="text-3xl sm:text-5xl">Do not press this.</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Seriously. Nothing good happens. No wallet, no transaction, no takebacks.
            </p>

            <button
              type="button"
              onClick={press}
              aria-label="Press the deploy button"
              className={`group mx-auto mt-9 block rounded-full border-4 border-border bg-deploy px-14 py-10 font-display text-2xl text-deploy-foreground transition-all sm:text-4xl ${
                pressed ? "translate-y-[8px] shadow-none" : "shadow-hard-lg hover:-translate-y-1"
              }`}
            >
              DEPLOY
            </button>

            <div className="mt-8 min-h-16">
              {message && (
                <div key={count} className="animate-pop">
                  <p className="font-display text-2xl text-deploy sm:text-3xl">{message}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    accidental deploys this session: {count}
                  </p>
                </div>
              )}
              {!message && (
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  awaiting a terrible decision…
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
