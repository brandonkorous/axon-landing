import AppFrame from "./AppFrame";

export default function Showcase() {
  return (
    <section className="bg-base-200 px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
            Built for Teams
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
            Your advisors, one conversation away
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-base-content/60">
            The Huddle brings your entire team of AI specialists into a single
            group thread. Ask questions, get aligned perspectives, and make
            faster decisions — together.
          </p>
        </div>

        <AppFrame
          src="/axon-huddle.png"
          alt="Axon Huddle group chat with multiple AI specialist advisors collaborating"
        />
      </div>
    </section>
  );
}
