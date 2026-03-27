import Link from "next/link";
import AppFrame from "./AppFrame";

export default function Hero() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Top — copy + privacy badge */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
            Open Source AI Platform
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl xl:text-6xl">
            AI that remembers, listens, and thinks with you.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-base-content/60">
            Neural memory trees, voice-first interaction, specialist advisors.
            All self-hosted, all yours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
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

          {/* Privacy badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-secondary/30 bg-secondary/5 px-5 py-2 text-sm text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0"
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
            <span>
              Your data never leaves your servers — 100% local, AGPL licensed,
              OSS forever
            </span>
          </div>
        </div>

        {/* Dashboard screenshot */}
        <AppFrame
          src="/axon-dashboard.png"
          alt="Axon Command Center dashboard showing agents, tasks, and audit log"
        />
      </div>
    </section>
  );
}
