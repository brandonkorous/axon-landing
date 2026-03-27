import Image from "next/image";

export default function Showcase() {
  return (
    <section className="bg-base-200 px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-lg">
          <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
            Built for Teams
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
            Your advisors, one conversation away
          </h2>
          <p className="mt-4 text-base leading-relaxed text-base-content/60">
            The Huddle brings your entire team of AI specialists into a single
            group thread. Ask questions, get aligned perspectives, and make
            faster decisions — together.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-base-300/50">
          <Image
            src="/axon-huddle.png"
            alt="Axon Huddle group chat with multiple AI specialist advisors collaborating"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
