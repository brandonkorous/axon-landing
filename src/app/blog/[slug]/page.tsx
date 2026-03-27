import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { colorMap } from "@/lib/colors";
import JsonLd from "../../components/JsonLd";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    const url = `/blog/${slug}`;

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: url },
        openGraph: {
            title: `${post.title} — Axon Blog`,
            description: post.excerpt,
            url,
            type: "article",
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const blogPostingJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: new Date(post.date).toISOString(),
        author: { "@type": "Person", name: post.author },
        publisher: {
            "@type": "Organization",
            name: "Axon",
            url: "https://useaxon.dev",
        },
        mainEntityOfPage: `https://useaxon.dev/blog/${slug}`,
        keywords: post.tags.join(", "),
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://useaxon.dev" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://useaxon.dev/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://useaxon.dev/blog/${slug}` },
        ],
    };

    return (
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
            <JsonLd data={blogPostingJsonLd} />
            <JsonLd data={breadcrumbJsonLd} />
            {/* Breadcrumb */}
            <div className="breadcrumbs mb-8 text-sm">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li className="text-base-content/40">{post.title}</li>
                </ul>
            </div>

            {/* Hero banner */}
            <div
                className={`mb-10 flex h-48 items-center justify-center rounded-2xl ${colorMap[post.color] ?? "bg-neutral"}`}
            >
                <span className="font-[family-name:var(--font-display)] text-6xl font-extrabold text-white/20">
                    {post.title.charAt(0)}
                </span>
            </div>

            {/* Meta */}
            <div className="mb-2 flex items-center gap-3">
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

            <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight lg:text-4xl">
                {post.title}
            </h1>

            <div className="mt-3 flex gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="badge badge-ghost badge-sm text-[10px] uppercase"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* MDX content */}
            <article className="prose prose-lg mt-10 max-w-none prose-headings:font-[family-name:var(--font-display)] prose-headings:tracking-tight prose-h2:text-2xl prose-h3:text-xl prose-p:text-base-content/80 prose-a:text-primary prose-strong:text-base-content prose-code:bg-transparent prose-code:text-base-content prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:bg-neutral prose-pre:text-neutral-content prose-pre:p-6 [&_pre_code]:text-neutral-content">
                <MDXRemote source={post.content} />
            </article>

            {/* Bottom nav */}
            <div className="mt-16 flex items-center justify-between border-t border-base-300/50 pt-8">
                <Link
                    href="/blog"
                    className="text-sm font-medium text-base-content/60 hover:text-base-content"
                >
                    ← All Posts
                </Link>
                <Link href="/#docs" className="btn btn-primary btn-sm rounded-full">
                    Deploy Axon
                </Link>
            </div>
        </div>
    );
}
