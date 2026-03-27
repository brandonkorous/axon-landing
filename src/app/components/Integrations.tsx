const integrations = [
  {
    name: "Slack",
    description:
      "Summon advisors in any channel. Get proactive insights, task updates, and decision summaries without leaving your workspace.",
    color: "bg-[#4A154B]/10 text-[#4A154B]",
    darkColor: "dark:bg-[#E01E5A]/10 dark:text-[#E01E5A]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" />
      </svg>
    ),
  },
  {
    name: "Microsoft Teams",
    description:
      "Bring AI advisors into your Teams channels. Surface decisions, action items, and briefings where your organization already collaborates.",
    color: "bg-[#5B5FC7]/10 text-[#5B5FC7]",
    darkColor: "dark:bg-[#7B83EB]/10 dark:text-[#7B83EB]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.625 8.5h-3.124c.085.32.124.66.124 1v4.5a3.5 3.5 0 0 1-3.5 3.5h-4.25l-.626.82A1.5 1.5 0 0 0 10.5 20.5h3.75l3 2.25V20.5h1.875A1.875 1.875 0 0 0 21 18.625v-8.25A1.875 1.875 0 0 0 20.625 8.5zM22.5 6.25a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zM14.125 5.5H5.875A1.875 1.875 0 0 0 4 7.375v6.75c0 1.036.84 1.875 1.875 1.875H7.5v2.75l3.25-2.75h3.375A1.875 1.875 0 0 0 16 14.125v-6.75A1.875 1.875 0 0 0 14.125 5.5zM16.5 3.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0z" />
      </svg>
    ),
  },
  {
    name: "Zoom",
    description:
      "AI advisors join your meetings as silent participants. Get real-time analysis, meeting summaries, and follow-up action items automatically.",
    color: "bg-[#0B5CFF]/10 text-[#0B5CFF]",
    darkColor: "dark:bg-[#4A8CFF]/10 dark:text-[#4A8CFF]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.585 4.585C2.248 4.585.353 6.48.353 8.818v6.364c0 2.338 1.895 4.233 4.232 4.233h9.546c.524 0 .949-.425.949-.95V12.11l4.443 2.963a.636.636 0 0 0 .994-.524V9.452a.636.636 0 0 0-.994-.524l-4.443 2.963V8.818c0-2.338-1.895-4.233-4.232-4.233H4.585z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    description:
      "Deploy advisors to your Discord server. Community managers and dev teams get AI-powered insights right in their existing channels.",
    color: "bg-[#5865F2]/10 text-[#5865F2]",
    darkColor: "dark:bg-[#7983F5]/10 dark:text-[#7983F5]",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="bg-base-200 px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
            Integrations
          </span>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
            Meets your team where they work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-base-content/60">
            Axon advisors plug directly into the tools your team already uses.
            No context switching — AI intelligence surfaces right inside your
            existing conversations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="card bg-base-100 shadow-none border border-base-300/50"
            >
              <div className="card-body gap-4 p-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${i.color} ${i.darkColor}`}
                >
                  {i.icon}
                </div>
                <h3 className="text-sm font-bold">{i.name}</h3>
                <p className="text-sm leading-relaxed text-base-content/60">
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-base-content/40">
          All integrations run on your infrastructure. Your conversations never leave your network.
        </p>
      </div>
    </section>
  );
}
