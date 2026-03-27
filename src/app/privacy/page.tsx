import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How Axon handles your data on the marketing site and in the self-hosted software.",
    alternates: { canonical: "/privacy" },
    robots: { index: true, follow: true },
};

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
            <div className="mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    Legal
                </span>
                <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Privacy Policy
                </h1>
                <p className="mt-3 text-sm text-base-content/50">
                    Last updated: March 25, 2026
                </p>
            </div>

            <article className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-display)] prose-headings:tracking-tight prose-h2:text-xl prose-p:text-base-content/80 prose-a:text-primary prose-strong:text-base-content prose-li:text-base-content/80">
                <h2>What this policy covers</h2>
                <p>
                    This privacy policy applies to the <strong>useaxon.dev</strong> marketing
                    website. It does not govern the Axon software itself, which runs entirely
                    on your own infrastructure and never transmits data to us.
                </p>

                <h2>Information we collect</h2>
                <p>We collect minimal information through this website:</p>
                <ul>
                    <li>
                        <strong>Newsletter subscriptions</strong> — If you subscribe to our
                        newsletter, we store your email address for the sole purpose of
                        sending updates.
                    </li>
                    <li>
                        <strong>Analytics</strong> — We use privacy-respecting, cookieless
                        analytics to understand page views and referral sources. No personal
                        data is collected or stored.
                    </li>
                </ul>

                <h2>How we use your information</h2>
                <p>
                    Email addresses provided through the newsletter form are used only for
                    delivering product updates and community news. We do not sell, share, or
                    provide your information to third parties.
                </p>

                <h2>The Axon software</h2>
                <p>
                    Axon is self-hosted software that processes all data locally on your
                    hardware. The software contains <strong>no telemetry</strong>, no
                    phone-home functionality, and no usage tracking of any kind. Your
                    conversations, memory vaults, and advisor configurations never leave your
                    machine.
                </p>
                <p>
                    If you configure Axon to use cloud LLM providers (such as Anthropic or
                    OpenAI), your conversations with those providers are subject to their
                    respective privacy policies. You can avoid this entirely by using local
                    models via Ollama.
                </p>

                <h2>Open-source transparency</h2>
                <p>
                    Axon is open source under the AGPL license. You can inspect every line of
                    code to verify our privacy claims. The source is available at{" "}
                    <a
                        href="https://github.com/brandonkorous/axon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/brandonkorous/axon
                    </a>
                    .
                </p>

                <h2>Contact</h2>
                <p>
                    For privacy-related questions, reach out at{" "}
                    <a href="mailto:privacy@useaxon.dev">privacy@useaxon.dev</a>.
                </p>
            </article>
        </div>
    );
}
