import AppFrame from "./AppFrame";

export default function Showcase() {
  return (
    <section className="bg-base-200 px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
        {/* Right — copy */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
            Built for Teams
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
            Your advisors, one conversation away
          </h2>
          <p className="max-w-md text-base leading-relaxed text-base-content/60">
            The Huddle brings your entire team of AI specialists into a single
            group thread. Ask questions, get aligned perspectives, and make
            faster decisions — together.
          </p>
        </div>

        {/* Left — huddle screenshot */}
        <div className="lg:w-1/2">
          <AppFrame
            src="/axon-huddle.png"
            alt="Axon Huddle group chat with multiple AI specialist advisors collaborating"
          />
        </div>
      </div>
    </section>
  );
}
