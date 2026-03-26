import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — Axon",
    description: "Terms governing use of the Axon website and open-source software.",
};

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
            <div className="mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    Legal
                </span>
                <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Terms of Service
                </h1>
                <p className="mt-3 text-sm text-base-content/50">
                    Last updated: March 25, 2026
                </p>
            </div>

            <article className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-display)] prose-headings:tracking-tight prose-h2:text-xl prose-p:text-base-content/80 prose-a:text-primary prose-strong:text-base-content prose-li:text-base-content/80">
                <h2>Use of this website</h2>
                <p>
                    The useaxon.dev website is provided for informational purposes. You may
                    browse, share, and link to any page. We reserve the right to modify or
                    remove content at any time.
                </p>

                <h2>Axon software license</h2>
                <p>
                    The Axon software is released under the{" "}
                    <strong>GNU Affero General Public License v3 (AGPL-3.0)</strong>. This
                    means you are free to use, modify, and distribute the software, provided
                    that any derivative works are also released under the AGPL and made
                    available to users who interact with them over a network.
                </p>
                <p>
                    The full license text is available in the{" "}
                    <a
                        href="https://github.com/brandonkorous/axon/blob/main/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LICENSE file on GitHub
                    </a>
                    .
                </p>

                <h2>No warranty</h2>
                <p>
                    The Axon software is provided <strong>&quot;as is&quot;</strong> without
                    warranty of any kind, express or implied. The authors are not liable for
                    any damages arising from its use. This is standard for open-source
                    software and is detailed in the AGPL license.
                </p>

                <h2>Contributions</h2>
                <p>
                    Contributions to Axon (pull requests, issues, documentation) are accepted
                    under the same AGPL-3.0 license. By submitting a contribution, you agree
                    that your work may be distributed under the project&apos;s license terms.
                </p>

                <h2>Third-party services</h2>
                <p>
                    Axon can be configured to integrate with third-party LLM providers
                    (Anthropic, OpenAI, and others via LiteLLM), communication platforms
                    (Discord), and search engines (SearXNG). Your use of these services is
                    governed by their respective terms. Axon does not require any of these —
                    fully local operation is supported.
                </p>

                <h2>Contact</h2>
                <p>
                    For questions about these terms, reach out at{" "}
                    <a href="mailto:legal@useaxon.dev">legal@useaxon.dev</a>.
                </p>
            </article>
        </div>
    );
}
