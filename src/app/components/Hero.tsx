import Link from "next/link";
import AppFrame from "./AppFrame";

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
            Neural memory trees, voice-first interaction, specialist advisors —
            integrated with Slack, Teams, Zoom, and Discord.
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

          {/* Privacy badge */}
          <div className="inline-flex items-center gap-3 self-start rounded-full border border-secondary/30 bg-secondary/5 px-4 py-2 text-sm text-secondary">
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
            <span>100% local · AGPL licensed · OSS forever</span>
          </div>
        </div>

        {/* Right — dashboard screenshot */}
        <div className="lg:w-1/2">
          <AppFrame
            src="/axon-dashboard.png"
            alt="Axon Command Center dashboard showing agents, tasks, and audit log"
          />
        </div>
      </div>
    </section>
  );
}
