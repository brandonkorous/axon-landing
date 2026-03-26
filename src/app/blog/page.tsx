import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { colorMap } from "@/lib/colors";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — Axon",
    description: "Insights and updates from the Axon team.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
            <div className="mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-base-content/50">
                    From the Blog
                </span>
                <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Insights and Updates
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-base-content/60">
                    Engineering deep-dives, product updates, and the thinking
                    behind Axon.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {posts.map((post, i) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col gap-6 border-b border-base-300/50 pb-8 last:border-0 sm:flex-row sm:items-start"
                    >
                        {/* Color block */}
                        <div
                            className={`flex h-32 w-full shrink-0 items-center justify-center rounded-xl ${colorMap[post.color] ?? "bg-neutral"} sm:h-28 sm:w-40`}
                        >
                            <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-white/30">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <span className="text-base-content/20">·</span>
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-base-content/40">
                                    {post.author}
                                </span>
                            </div>
                            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug group-hover:text-primary">
                                {post.title}
                            </h2>
                            <p className="text-sm leading-relaxed text-base-content/60">
                                {post.excerpt}
                            </p>
                            <div className="flex gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="badge badge-ghost badge-sm text-[10px] uppercase"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
