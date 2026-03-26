import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { colorMap } from "@/lib/colors";

export default function Blog() {
    const posts = getAllPosts().slice(0, 3);

    return (
        <section id="blog" className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                            From the Blog
                        </span>
                        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight lg:text-4xl">
                            Insights and Updates
                        </h2>
                    </div>
                    <Link href="/blog" className="btn btn-primary btn-sm rounded-full">
                        Visit the Blog
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, i) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="card bg-base-200 shadow-none border border-base-300/50 overflow-hidden group"
                        >
                            <div
                                className={`flex h-40 items-center justify-center ${colorMap[post.color] ?? "bg-neutral"}`}
                            >
                                <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold text-white/30">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <div className="card-body gap-3 p-6">
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                    })}
                                </span>
                                <h3 className="text-sm font-bold leading-snug group-hover:text-primary">
                                    {post.title}
                                </h3>
                                <p className="text-xs leading-relaxed text-base-content/60">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
