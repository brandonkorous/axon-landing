import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation",
    description:
        "Get started with Axon in under five minutes. Installation, configuration, and architecture overview.",
    alternates: { canonical: "/docs" },
    openGraph: {
        title: "Documentation — Axon",
        description:
            "Get started with Axon in under five minutes. Installation, configuration, and architecture overview.",
        url: "/docs",
    },
};

const docSections = [
    {
        title: "API Reference",
        description: "REST and WebSocket endpoints for the Axon backend.",
        color: "bg-primary",
    },
    {
        title: "Advisor SDK",
        description: "Build custom specialist advisors with their own personas and vaults.",
        color: "bg-secondary",
    },
    {
        title: "Memory Trees",
        description: "How neural memory works: vaults, recall, learning, and consolidation.",
        color: "bg-accent",
    },
    {
        title: "Configuration",
        description: "Model providers, org templates, voice settings, and environment variables.",
        color: "bg-neutral",
    },
];

const envVars = [
    { name: "DEFAULT_MODEL", value: "anthropic/claude-sonnet-4-20250514", note: "LLM provider and model" },
    { name: "ANTHROPIC_API_KEY", value: "sk-ant-...", note: "Required for Claude models" },
    { name: "OLLAMA_BASE_URL", value: "http://ollama:11434", note: "Local LLM endpoint" },
    { name: "DB_ENCRYPTION_KEY", value: "(generate with Fernet)", note: "Encrypts OAuth tokens" },
];

const architectureItems = [
    {
        label: "Axon Agent",
        description:
            "The central orchestrator. Routes requests to specialist advisors based on organization type and query context.",
    },
    {
        label: "Memory Layer",
        description:
            "Local LLM (Ollama) handles recall, learning, and consolidation. Reasoning model (Claude, GPT, or local) handles conversations.",
    },
    {
        label: "Infrastructure",
        description:
            "Docker Compose orchestrates the backend (FastAPI), frontend (React), and optional services (Ollama, SearXNG).",
    },
];

export default function DocsPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
            {/* Header */}
            <div className="mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    Documentation
                </span>
                <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-5xl">
                    Get Started with Axon
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-base-content/60">
                    From zero to running in under five minutes. Everything you need to
                    deploy your self-hosted AI command center.
                </p>
            </div>

            {/* Quick Start */}
            <div className="mb-16">
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    Quick Start
                </h2>
                <div className="rounded-2xl bg-neutral p-6 text-neutral-content">
                    <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-primary">
                        Terminal
                    </span>
                    <div className="space-y-2 font-mono text-sm leading-loose">
                        <p>
                            <span className="text-primary">$</span> git clone https://github.com/brandonkorous/axon.git
                        </p>
                        <p>
                            <span className="text-primary">$</span> cd axon
                        </p>
                        <p>
                            <span className="text-primary">$</span> cp .env.example .env
                        </p>
                        <p>
                            <span className="text-primary">$</span> docker compose up
                        </p>
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-base-content/60">
                    <p>
                        <strong className="text-base-content">Clone</strong> the repository and copy the example environment file.
                        Add your API keys to <code className="font-mono text-xs">.env</code>, then start everything with Docker Compose.
                    </p>
                    <p>
                        The frontend will be available at{" "}
                        <code className="font-mono text-xs">localhost:3000</code> and the
                        backend API at{" "}
                        <code className="font-mono text-xs">localhost:8000</code>.
                    </p>
                </div>
            </div>

            {/* Prerequisites */}
            <div className="mb-16">
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    Prerequisites
                </h2>
                <ul className="space-y-2 text-sm text-base-content/70">
                    <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        Docker and Docker Compose installed
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        At least 8 GB RAM (16 GB+ recommended for local LLMs)
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        An API key for your preferred LLM provider (Anthropic, OpenAI) — or Ollama for fully local inference
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        CUDA-compatible GPU with 8 GB+ VRAM (optional, for local models)
                    </li>
                </ul>
            </div>

            {/* First Steps */}
            <div className="mb-16">
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    First Steps
                </h2>
                <ol className="space-y-4 text-sm">
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                            1
                        </span>
                        <div>
                            <p className="font-medium">Open the dashboard</p>
                            <p className="mt-0.5 text-base-content/60">
                                Navigate to{" "}
                                <code className="font-mono text-xs">localhost:3000</code> in
                                your browser.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                            2
                        </span>
                        <div>
                            <p className="font-medium">Create an organization</p>
                            <p className="mt-0.5 text-base-content/60">
                                Choose from built-in templates — Startup, Family, Job Hunt,
                                Creator, or Student — each with curated specialist advisors.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                            3
                        </span>
                        <div>
                            <p className="font-medium">Talk to Axon</p>
                            <p className="mt-0.5 text-base-content/60">
                                Start a conversation. Axon routes your request to the right
                                advisor and builds memory over time.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                            4
                        </span>
                        <div>
                            <p className="font-medium">Enable local LLMs (optional)</p>
                            <p className="mt-0.5 text-base-content/60">
                                Run{" "}
                                <code className="font-mono text-xs">
                                    docker compose --profile local-llm up
                                </code>{" "}
                                to start Ollama for fully local inference.
                            </p>
                        </div>
                    </li>
                </ol>
            </div>

            {/* Environment Variables */}
            <div className="mb-16">
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    Configuration
                </h2>
                <p className="mb-4 text-sm text-base-content/60">
                    Key environment variables in your <code className="font-mono text-xs">.env</code> file:
                </p>
                <div className="overflow-x-auto rounded-xl border border-base-300/50">
                    <table className="table table-sm">
                        <thead>
                            <tr className="border-base-300/50">
                                <th className="text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                                    Variable
                                </th>
                                <th className="text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                                    Default / Example
                                </th>
                                <th className="text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {envVars.map((v) => (
                                <tr key={v.name} className="border-base-300/50">
                                    <td className="font-mono text-xs font-medium">
                                        {v.name}
                                    </td>
                                    <td className="font-mono text-xs text-base-content/50">
                                        {v.value}
                                    </td>
                                    <td className="text-xs text-base-content/60">
                                        {v.note}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Documentation Index */}
            <div className="mb-16">
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    Explore the Docs
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {docSections.map((section) => (
                        <div
                            key={section.title}
                            className="flex items-start gap-3 rounded-xl border border-base-300/50 bg-base-200 p-5"
                        >
                            <span
                                className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${section.color}`}
                            />
                            <div>
                                <h3 className="text-sm font-bold">{section.title}</h3>
                                <p className="mt-1 text-xs leading-relaxed text-base-content/60">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Architecture */}
            <div className="mb-16">
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    Architecture
                </h2>
                <div className="space-y-4">
                    {architectureItems.map((item) => (
                        <div key={item.label}>
                            <h3 className="text-sm font-bold">{item.label}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-base-content/60">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 border-t border-base-300/50 pt-8">
                <a
                    href="https://github.com/brandonkorous/axon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm rounded-full"
                >
                    Deploy Axon
                </a>
                <Link href="/blog" className="btn btn-ghost btn-sm rounded-full">
                    Read the Blog
                </Link>
            </div>
        </div>
    );
}
