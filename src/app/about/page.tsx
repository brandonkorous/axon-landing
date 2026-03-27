import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Why Axon exists: a self-hosted, open-source AI command center that keeps your data on your hardware.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About — Axon",
        description:
            "Why Axon exists: a self-hosted, open-source AI command center that keeps your data on your hardware.",
        url: "/about",
    },
};

const differentiators = [
    {
        title: "Memory that persists",
        description:
            "Neural memory trees store knowledge as Obsidian-compatible markdown files in local vaults. Your AI actually remembers — across conversations, across sessions, across time.",
    },
    {
        title: "Specialists, not generalists",
        description:
            "Organization templates give you curated advisor teams — a startup board, a family organizer, career coaches — each with their own persona, vault, and expertise. Axon routes your request to the right specialist.",
    },
    {
        title: "Voice-first interface",
        description:
            "Talk, don't type. Whisper handles speech-to-text, Piper handles text-to-speech, and each advisor can have their own voice. Conversation feels natural.",
    },
    {
        title: "Zero cloud dependency",
        description:
            "Run entirely on your hardware. Ollama handles local inference for memory operations, and you can use any model provider — or none at all — for reasoning. No API keys required.",
    },
];

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
            {/* Header */}
            <div className="mb-16">
                <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    About Axon
                </span>
                <h1 className="mt-2 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight">
                    AI that works for you, not the other way around.
                </h1>
            </div>

            {/* Mission */}
            <div className="mb-16 max-w-2xl space-y-4 text-base leading-relaxed text-base-content/70">
                <p>
                    AI tools today are cloud-locked, memory-less, and vendor-dependent. Every
                    conversation starts from scratch. Your data lives on someone else&apos;s
                    servers. And when the API changes or the price goes up, you have no
                    recourse.
                </p>
                <p>
                    Axon is the alternative. Self-hosted means your data stays on your
                    machines. Open-source means you own the code. Local LLM support means you
                    can own the inference too.
                </p>
                <p>
                    Axon is not a chatbot. It&apos;s a command center — an orchestrator that
                    coordinates specialist advisors around your actual life and work. It
                    remembers what matters, delegates to the right expert, and gets smarter
                    over time.
                </p>
            </div>

            {/* Differentiators */}
            <div className="mb-16">
                <h2 className="mb-8 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    What makes Axon different
                </h2>
                <div className="grid gap-8 sm:grid-cols-2">
                    {differentiators.map((item) => (
                        <div key={item.title} className="flex flex-col gap-2">
                            <h3 className="text-sm font-bold">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-base-content/60">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Open Source */}
            <div className="mb-16 rounded-2xl bg-base-200 p-8 lg:p-10">
                <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    Open source, by design
                </h2>
                <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-base-content/70">
                    <p>
                        Axon is licensed under the <strong className="text-base-content">GNU Affero General Public License (AGPL)</strong>.
                        This isn&apos;t MIT — and that&apos;s intentional. AGPL ensures that
                        anyone who modifies Axon and offers it as a service must share their
                        changes. The community benefits from every improvement.
                    </p>
                    <p>
                        Contributions are welcome. Whether it&apos;s a bug fix, a new advisor
                        template, or a documentation improvement — every PR makes Axon better
                        for everyone.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
                <a
                    href="https://github.com/brandonkorous/axon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm rounded-full"
                >
                    Star on GitHub
                </a>
                <Link href="/docs" className="btn btn-ghost btn-sm rounded-full">
                    Read the Docs
                </Link>
            </div>
        </div>
    );
}
