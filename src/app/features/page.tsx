import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features",
    description:
        "Everything Axon can do: multi-agent orchestration, neural memory trees, voice-first interaction, structured reasoning, plugin-based execution, and more.",
    alternates: { canonical: "/features" },
    openGraph: {
        title: "Features — Axon",
        description:
            "Everything Axon can do: multi-agent orchestration, neural memory trees, voice-first interaction, structured reasoning, plugin-based execution, and more.",
        url: "/features",
    },
};

const featureGroups = [
    {
        label: "Intelligence",
        color: "primary",
        features: [
            {
                title: "Specialist Advisors",
                description:
                    "Not one generic chatbot — a team of domain experts. Each advisor has a distinct persona, expertise, vault, and voice. Axon routes your request to the right specialist automatically.",
                details: [
                    "Pre-built org templates: Startup board, Family, Job Hunt, Creator, Student",
                    "Custom advisor creation with configurable personas and delegation rules",
                    "Advisor discovery — find the right agent by capability or role",
                    "Per-advisor model selection (Claude, GPT, Ollama, or any OpenAI-compatible provider)",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                ),
            },
            {
                title: "The Huddle",
                description:
                    "Bring your entire advisor team into a single group thread. Multiple AI specialists discuss, debate, and align — giving you diverse perspectives in one conversation.",
                details: [
                    "Six huddle modes: standard, vote, devil's advocate, pressure test, quick take, decision",
                    "@mention specific advisors to target questions",
                    "Real-time streaming from multiple agents simultaneously",
                    "Table synthesis for summarizing group consensus",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                ),
            },
            {
                title: "Structured Reasoning",
                description:
                    "A graph-based reasoning engine that evaluates claims against evidence, detects contradictions, and traces every decision back to its source.",
                details: [
                    "Multi-strategy evaluation: debate, synthesis, expert consensus",
                    "Confidence scoring with automatic contradiction detection",
                    "Full decision trace — see exactly why an advisor reached a conclusion",
                    "Evidence gathering and structured claim evaluation",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                ),
            },
            {
                title: "Task Delegation",
                description:
                    "Advisors delegate work to each other autonomously. Send research to the researcher, audits to the auditor, and implementation to the engineer — sync or async.",
                details: [
                    "Async and sync delegation modes",
                    "Task types: research, audit, implement, investigate",
                    "Automatic result delivery to task owner",
                    "Agent recruitment — request new specialists on the fly",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                ),
            },
        ],
    },
    {
        label: "Memory",
        color: "secondary",
        features: [
            {
                title: "Neural Memory Trees",
                description:
                    "Obsidian-compatible markdown vaults store knowledge as interconnected files with YAML frontmatter, wikilinks, and full-text search. Your AI actually remembers.",
                details: [
                    "Per-agent isolated vaults with configurable read-only mounts to shared knowledge",
                    "Vault operations: read, write, search, list, and backlink navigation",
                    "Graph-based relationship tracking between memory entries",
                    "External editing support — edit vaults in Obsidian and changes sync automatically",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
                    </svg>
                ),
            },
            {
                title: "Memory Consolidation",
                description:
                    "LLM-driven vault maintenance that automatically merges duplicates, archives stale entries, detects contradictions, and reconnects orphaned knowledge.",
                details: [
                    "Deep consolidation with merge, archive, and contradiction detection",
                    "Confidence scoring — low-confidence entries auto-archived over time",
                    "Orphan adoption — reconnect detached files to the knowledge graph",
                    "Triggered manually via /sleep or automatically on schedule",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>
                ),
            },
            {
                title: "Intelligent Recall",
                description:
                    "Context-aware memory retrieval that surfaces the right vault entries based on the current conversation — so advisors always have relevant context.",
                details: [
                    "Semantic search across all vault content",
                    "Automatic context injection during conversations",
                    "Outcome linking — connect results to prior advice so advisors learn from experience",
                    "Slash commands: /remember, /recall, /forget for direct memory control",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                ),
            },
        ],
    },
    {
        label: "Interaction",
        color: "accent",
        features: [
            {
                title: "Voice-First Interface",
                description:
                    "Talk, don't type. Each advisor has their own distinct voice. Whisper handles speech-to-text, Piper or ElevenLabs handles text-to-speech.",
                details: [
                    "Multiple TTS engines: Piper (local), XTTS, ElevenLabs, Azure Speech Services",
                    "Per-advisor voice configuration with curated voice catalog",
                    "Adjustable speed control (0.5x to 2.0x)",
                    "Continuous voice mode for natural conversation flow",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>
                ),
            },
            {
                title: "Platform Integrations",
                description:
                    "Axon advisors plug into Slack, Microsoft Teams, Zoom, and Discord. No context switching — intelligence surfaces inside your existing conversations.",
                details: [
                    "Slack: real-time Socket Mode with thread management and file upload",
                    "Teams: Azure Bot Framework with adaptive cards",
                    "Zoom: meeting participation, recording transcription, follow-up actions",
                    "Discord: server deployment with channel-based advisor access",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                ),
            },
            {
                title: "Command Center Dashboard",
                description:
                    "A unified interface for managing your entire AI team. Active agents, pending decisions, tasks, vault health — all in one view.",
                details: [
                    "Kanban-style task board with drag-and-drop status management",
                    "Visual vault explorer with graph-based relationship browsing",
                    "Real-time agent status and streaming conversation view",
                    "Usage tracking with per-agent and per-model cost breakdowns",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                ),
            },
        ],
    },
    {
        label: "Autonomy",
        color: "neutral",
        features: [
            {
                title: "Shell Access & Sandboxes",
                description:
                    "Grant agents host filesystem access or containerized execution via configurable plugins. Allowlist specific directories and executables per agent.",
                details: [
                    "Shell Access plugin: scoped host filesystem + executable allowlist (high trust, prominent warnings)",
                    "Sandbox plugin: same interface inside Docker containers or Kubernetes pods (lower trust)",
                    "8 sandbox images: code, browser, data science, ML, documents, media, and full",
                    "Pre-built images from GitHub Container Registry, no manual setup",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                ),
            },
            {
                title: "Proactive Scheduling",
                description:
                    "A background heartbeat lets advisors pick up pending tasks and review completed work without being prompted.",
                details: [
                    "Two triggers: pick up pending tasks, review done tasks",
                    "Automatic task completion detection and creator notification",
                    "Configurable intervals: frequent, hourly, daily, weekly",
                    "Approval workflows route decisions to you via Slack, Teams, or Discord",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
            },
            {
                title: "Deep Research",
                description:
                    "Multi-step research workflows with a two-tier LLM strategy — local models for compression, reasoning models for analysis. High quality, low cost.",
                details: [
                    "Web research with headless browser: search, navigate, extract",
                    "YouTube transcript extraction and analysis",
                    "Pre-built research templates for common workflows",
                    "Multi-source synthesis into coherent findings",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                ),
            },
        ],
    },
    {
        label: "Infrastructure",
        color: "primary",
        features: [
            {
                title: "Fully Self-Hosted",
                description:
                    "Run everything on your own hardware. No telemetry, no cloud dependency. Ollama handles local inference — no API keys required.",
                details: [
                    "SQLite by default, PostgreSQL optional for production",
                    "AES encryption for all stored credentials at rest",
                    "Docker Compose for local dev, Kubernetes for production scale",
                    "Zero external dependencies when running fully local with Ollama",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                    </svg>
                ),
            },
            {
                title: "Full Audit Trail",
                description:
                    "Every agent action logged to an append-only audit branch. Timestamped records of who did what, when, and why — with full conversation context.",
                details: [
                    "Immutable, append-only audit log in the shared vault",
                    "Query and filter by date, agent, action, or tool",
                    "UI for browsing audit history with detailed entries",
                    "Arguments and results captured (with smart truncation for large payloads)",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                ),
            },
            {
                title: "Plugins & Skills",
                description:
                    "Extend your advisors with custom capabilities. A plugin system for new tools and a skills system for specialized workflows — no core code changes needed.",
                details: [
                    "Shell access and sandbox plugins for agent execution capabilities",
                    "Plugin architecture with registry, per-agent configuration, and discovery",
                    "10 built-in skills: brainstorming, code review, debugging, decision analysis, and more",
                    "Create custom plugins and skills directly from the UI",
                ],
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                    </svg>
                ),
            },
        ],
    },
];

const orgTemplates = [
    {
        name: "Startup",
        description: "CEO, COO, CTO advisors plus a dedicated researcher for strategic leadership.",
        agents: ["Marcus (CEO)", "Diana (COO)", "Raj (CTO)", "Researcher"],
    },
    {
        name: "Student",
        description: "Academic mentor, subject tutor, and schedule coordinator for learning.",
        agents: ["Mentor", "Tutor", "Planner"],
    },
    {
        name: "Job Hunt",
        description: "Resume coach, networking strategist, and interview prep specialist.",
        agents: ["Archer", "Harper", "Sage"],
    },
    {
        name: "Family",
        description: "Life coach, wellness advisor, financial planner, and adventure coordinator.",
        agents: ["Coach", "Luna", "Penny", "Scout"],
    },
    {
        name: "Creator",
        description: "Content strategist, social media advisor, and creative director.",
        agents: ["Atlas", "Echo", "Muse"],
    },
];

function colorClasses(color: string) {
    const map: Record<string, { bg: string; text: string; badge: string; border: string }> = {
        primary: { bg: "bg-primary/10", text: "text-primary", badge: "badge-primary", border: "border-primary/20" },
        secondary: { bg: "bg-secondary/10", text: "text-secondary", badge: "badge-secondary", border: "border-secondary/20" },
        accent: { bg: "bg-accent/10", text: "text-accent", badge: "badge-accent", border: "border-accent/20" },
        neutral: { bg: "bg-neutral/10", text: "text-neutral", badge: "badge-neutral", border: "border-neutral/20" },
    };
    return map[color] ?? map.primary;
}

export default function FeaturesPage() {
    return (
        <div className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                        Features
                    </span>
                    <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight">
                        Everything you need to orchestrate AI that actually works.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-base-content/60">
                        Axon is not a chatbot. It&apos;s a command center — an orchestrator that
                        coordinates specialist advisors around your actual life and work. Here&apos;s
                        everything under the hood.
                    </p>
                </div>

                {/* Feature Groups */}
                {featureGroups.map((group) => {
                    const colors = colorClasses(group.color);
                    return (
                        <section key={group.label} className="mb-20">
                            <div className="mb-8 flex items-center gap-3">
                                <span className={`badge badge-sm badge-outline ${colors.badge}`}>
                                    {group.label}
                                </span>
                                <div className="h-px flex-1 bg-base-300/50" />
                            </div>

                            <div className="grid gap-8 lg:grid-cols-3">
                                {group.features.map((feature) => (
                                    <div
                                        key={feature.title}
                                        className={`card border bg-base-100 shadow-none ${colors.border}`}
                                    >
                                        <div className="card-body gap-5 p-6">
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}
                                                >
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-bold">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm leading-relaxed text-base-content/60">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 border-t border-base-300/30 pt-4">
                                                {feature.details.map((detail) => (
                                                    <li
                                                        key={detail}
                                                        className="flex items-start gap-2 text-xs leading-relaxed text-base-content/50"
                                                    >
                                                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${colors.bg.replace('/10', '')}`} />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}

                {/* Organization Templates */}
                <section className="mb-20">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="badge badge-sm badge-outline badge-secondary">
                            Templates
                        </span>
                        <div className="h-px flex-1 bg-base-300/50" />
                    </div>

                    <div className="mb-6 max-w-2xl">
                        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                            Start with a team, not a blank slate.
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-base-content/60">
                            Organization templates give you a curated advisor team from day one.
                            Each template comes with pre-configured personas, vaults, and delegation
                            rules — ready to go in minutes.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {orgTemplates.map((template) => (
                            <div
                                key={template.name}
                                className="card border border-base-300/50 bg-base-200 shadow-none"
                            >
                                <div className="card-body gap-3 p-5">
                                    <h3 className="text-sm font-bold">{template.name}</h3>
                                    <p className="text-xs leading-relaxed text-base-content/50">
                                        {template.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {template.agents.map((agent) => (
                                            <span
                                                key={agent}
                                                className="badge badge-xs bg-base-300/50 text-base-content/60"
                                            >
                                                {agent}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Work Management */}
                <section className="mb-20">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="badge badge-sm badge-outline badge-accent">
                            Work Management
                        </span>
                        <div className="h-px flex-1 bg-base-300/50" />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "Tasks",
                                description:
                                    "Create, assign, and track tasks with parent-child relationships, priority levels (P0-P3), and a clean lifecycle: pending, in progress, blocked, done, accepted.",
                            },
                            {
                                title: "Issues",
                                description:
                                    "Report bugs and improvement requests with threaded comments, status tracking, and resolution workflows.",
                            },
                            {
                                title: "Approvals",
                                description:
                                    "Route decisions to the right person. Approval requests surface in Slack, Teams, or Discord — approve or deny with a reaction.",
                            },
                            {
                                title: "Achievements",
                                description:
                                    "Auto-generated when parent tasks with children reach accepted. LLM-written celebratory summaries of what was accomplished and why it matters.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col gap-2"
                            >
                                <h3 className="text-sm font-bold">{item.title}</h3>
                                <p className="text-xs leading-relaxed text-base-content/50">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="rounded-2xl bg-base-200 p-8 lg:p-12">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                        Ready to deploy your team?
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-base-content/60">
                        Axon is open source and self-hosted. Three commands and you have a full
                        AI command center running on your hardware.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <Link href="/docs" className="btn btn-primary btn-sm rounded-full">
                            Get Started
                        </Link>
                        <a
                            href="https://github.com/brandonkorous/axon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-sm rounded-full"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
