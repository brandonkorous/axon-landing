import Link from "next/link";

const REPO = "brandonkorous/axon";

async function getGitHubStats() {
    try {
        const [repoRes, contributorsRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${REPO}`, {
                next: { revalidate: 3600 },
            }),
            fetch(`https://api.github.com/repos/${REPO}/contributors?per_page=1`, {
                next: { revalidate: 3600 },
            }),
        ]);

        const repo = await repoRes.json();

        // GitHub returns contributor count via Link header pagination
        const linkHeader = contributorsRes.headers.get("link");
        let contributorCount = 1;
        if (linkHeader) {
            const match = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (match) contributorCount = parseInt(match[1], 10);
        } else {
            const contributors = await contributorsRes.json();
            contributorCount = Array.isArray(contributors) ? contributors.length : 1;
        }

        return {
            stars: repo.stargazers_count ?? 0,
            forks: repo.forks_count ?? 0,
            contributors: contributorCount,
        };
    } catch {
        return { stars: 0, forks: 0, contributors: 0 };
    }
}

function formatStat(n: number): string {
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    return n.toString();
}

export default async function Community() {
    const { stars, forks, contributors } = await getGitHubStats();

    const stats = [
        {
            value: formatStat(stars),
            label: "GitHub Stars",
            sub: "Star us on GitHub",
            color: "text-primary",
        },
        {
            value: formatStat(contributors),
            label: contributors === 1 ? "Contributor" : "Contributors",
            sub: "Building together",
            color: "text-secondary",
        },
        {
            value: formatStat(forks),
            label: forks === 1 ? "Fork" : "Forks",
            sub: "Fork and make it yours",
            color: "text-accent",
        },
    ];

    return (
        <section id="community" className="bg-accent px-6 py-16 text-accent-content lg:px-12 lg:py-24">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
                {/* Left copy */}
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="text-xs font-semibold uppercase tracking-widest opacity-60">
                        Community
                    </span>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
                        Join the Axon Community
                    </h2>
                    <p className="max-w-md text-sm leading-relaxed opacity-80">
                        Axon is built by developers, for developers. Contribute to the
                        project, share your advisors, and shape the future of self-hosted AI
                        together.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href={`https://github.com/${REPO}`}
                            className="btn btn-sm rounded-full border-accent-content/30 bg-accent-content/10 text-accent-content hover:bg-accent-content/20"
                        >
                            Join the Community
                        </Link>
                        <Link
                            href={`https://github.com/${REPO}`}
                            className="text-sm font-medium opacity-80 hover:opacity-100"
                        >
                            View on GitHub →
                        </Link>
                    </div>
                </div>

                {/* Right stats */}
                <div className="flex flex-col gap-4 lg:w-1/2">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="flex items-center gap-6 rounded-xl bg-base-300/60 px-6 py-4"
                        >
                            <span className={`font-[family-name:var(--font-display)] text-3xl font-extrabold ${s.color}`}>
                                {s.value}
                            </span>
                            <div>
                                <p className="text-sm font-bold">{s.label}</p>
                                <p className="text-xs opacity-60">{s.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
