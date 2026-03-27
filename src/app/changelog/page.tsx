import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Changelog",
    description: "Release notes and updates as Axon evolves.",
    alternates: { canonical: "/changelog" },
    openGraph: {
        title: "Changelog — Axon",
        description: "Release notes and updates as Axon evolves.",
        url: "/changelog",
    },
};

interface Change {
    type: "added" | "changed" | "fixed";
    text: string;
}

interface Release {
    version: string;
    date: string;
    badge: "Major" | "Minor" | "Patch";
    badgeColor: string;
    changes: Change[];
}

const releases: Release[] = [
    {
        version: "v0.4.0",
        date: "March 20, 2026",
        badge: "Minor",
        badgeColor: "badge-primary",
        changes: [
            { type: "added", text: "SearXNG integration for web search via Docker Compose profile" },
            { type: "added", text: "Runner framework for autonomous task execution with Claude bridge" },
            { type: "added", text: "Discord bot integration for multi-channel advisor access" },
            { type: "changed", text: "Upgraded default model to claude-sonnet-4-20250514" },
            { type: "fixed", text: "Memory consolidation race condition during concurrent advisor sessions" },
        ],
    },
    {
        version: "v0.3.0",
        date: "February 12, 2026",
        badge: "Minor",
        badgeColor: "badge-primary",
        changes: [
            { type: "added", text: "Voice interface with Whisper STT and Piper TTS" },
            { type: "added", text: "Per-advisor voice configuration in persona YAML" },
            { type: "added", text: "New org templates: Creator, Family, Job Hunt, Student" },
            { type: "changed", text: "Vault structure now Obsidian-compatible markdown" },
            { type: "fixed", text: "Ollama model auto-pull failing on ARM architectures" },
        ],
    },
    {
        version: "v0.2.0",
        date: "January 15, 2026",
        badge: "Minor",
        badgeColor: "badge-primary",
        changes: [
            { type: "added", text: "Local LLM support via Ollama with Docker Compose profile" },
            { type: "added", text: "Neural memory trees with confidence decay and consolidation" },
            { type: "added", text: "Multi-org architecture with vault-per-advisor isolation" },
            { type: "changed", text: "Switched from SQLite to optional PostgreSQL support" },
            { type: "fixed", text: "Frontend WebSocket reconnection on network interruption" },
        ],
    },
    {
        version: "v0.1.0",
        date: "December 5, 2025",
        badge: "Major",
        badgeColor: "badge-secondary",
        changes: [
            { type: "added", text: "Initial release of Axon with FastAPI backend and React frontend" },
            { type: "added", text: "Startup org template with four specialist advisors" },
            { type: "added", text: "LiteLLM integration for multi-provider model support" },
            { type: "added", text: "Docker Compose deployment with single-command setup" },
        ],
    },
];

const typeLabel: Record<Change["type"], string> = {
    added: "Added",
    changed: "Changed",
    fixed: "Fixed",
};

const typeColor: Record<Change["type"], string> = {
    added: "text-primary",
    changed: "text-accent",
    fixed: "text-secondary",
};

export default function ChangelogPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
            {/* Header */}
            <div className="mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    Changelog
                </span>
                <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-5xl">
                    What&apos;s New
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-base-content/60">
                    Release notes and updates. Follow along as Axon evolves.
                </p>
            </div>

            {/* Releases */}
            <div className="space-y-10">
                {releases.map((release) => (
                    <div
                        key={release.version}
                        className="border-b border-base-300/50 pb-10 last:border-0"
                    >
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                                {release.version}
                            </h2>
                            <span className={`badge badge-sm ${release.badgeColor}`}>
                                {release.badge}
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                                {release.date}
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {release.changes.map((change, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                    <span
                                        className={`shrink-0 text-[10px] font-semibold uppercase tracking-widest ${typeColor[change.type]}`}
                                    >
                                        {typeLabel[change.type]}
                                    </span>
                                    <span className="text-base-content/70">{change.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                    href="https://github.com/brandonkorous/axon/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-base-content/60 hover:text-base-content"
                >
                    View all releases on GitHub →
                </a>
            </div>
        </div>
    );
}
