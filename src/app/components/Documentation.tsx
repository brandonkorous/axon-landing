import Link from "next/link";

export default function Documentation() {
  return (
    <section id="docs" className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
              Get Started
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
              Get Started with Axon
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#docs" className="btn btn-primary btn-sm rounded-full">
              View Documentation
            </Link>
            <Link href="#docs" className="text-sm font-medium text-base-content/60 hover:text-base-content">
              Watch Tutorials →
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Terminal card */}
          <div className="card bg-neutral text-neutral-content shadow-none">
            <div className="card-body gap-4 p-6">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                Terminal
              </span>
              <div className="rounded-lg bg-black/20 p-4 font-mono text-xs leading-loose">
                <p>
                  <span className="text-primary">$</span> curl -sS get.useaxon.dev | sh
                </p>
                <p>
                  <span className="text-primary">$</span> axon init my-workspace
                </p>
                <p>
                  <span className="text-primary">$</span> axon start
                </p>
              </div>
            </div>
            <div className="card-body gap-1 border-t border-neutral-content/10 p-6">
              <h3 className="text-sm font-bold">Quick Start</h3>
              <p className="text-xs leading-relaxed opacity-60">
                Up and running in three commands.
              </p>
            </div>
          </div>

          {/* Docs reference card */}
          <div className="card bg-base-200 shadow-none border border-base-300/50">
            <div className="card-body gap-4 p-6">
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  API Reference
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  Advisor SDK
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Memory Tree Guides
                </li>
              </ul>
            </div>
            <div className="card-body gap-1 border-t border-base-300/50 p-6">
              <h3 className="text-sm font-bold">Documentation</h3>
              <p className="text-xs leading-relaxed text-base-content/60">
                Guides, tutorials, and API references.
              </p>
            </div>
          </div>

          {/* Video tutorials card */}
          <div className="card bg-base-200 shadow-none border border-base-300/50">
            <div className="card-body items-center justify-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
            </div>
            <div className="card-body gap-1 border-t border-base-300/50 p-6">
              <h3 className="text-sm font-bold">Video Tutorials</h3>
              <p className="text-xs leading-relaxed text-base-content/60">
                Step-by-step walkthroughs for every level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
