import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left — copy */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
            Open Source AI Platform
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl xl:text-6xl">
            AI that remembers, listens, and thinks with you.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-base-content/60">
            Neural memory trees, voice-first interaction, specialist advisors.
            All self-hosted, all yours.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#get-started" className="btn btn-primary rounded-full">
              Deploy Axon
            </Link>
            <Link
              href="#docs"
              className="btn btn-outline btn-neutral rounded-full"
            >
              View Docs
            </Link>
          </div>
        </div>

        {/* Right — terracotta privacy card */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="rounded-2xl bg-secondary p-8 text-secondary-content lg:p-10">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-secondary-content/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug lg:text-3xl">
              Your data never leaves your servers. Ever.
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Run Axon on your own infrastructure with local LLM support. No
              cloud dependency, no data sharing, no compromise.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold">
                  100%
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-widest opacity-60">
                  Local
                </p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold">
                  AGPL
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-widest opacity-60">
                  Licensed
                </p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold">
                  OSS
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-widest opacity-60">
                  Forever
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
