import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    tags: string[];
    color: "primary" | "secondary" | "neutral" | "accent";
    content: string;
}

export function getAllPosts(): BlogPost[] {
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
        const { data, content } = matter(raw);

        return {
            slug,
            title: data.title ?? "",
            date: data.date ?? "",
            excerpt: data.excerpt ?? "",
            author: data.author ?? "Axon Team",
            tags: data.tags ?? [],
            color: data.color ?? "primary",
            content,
        } satisfies BlogPost;
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filepath)) return undefined;

    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content } = matter(raw);

    return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        author: data.author ?? "Axon Team",
        tags: data.tags ?? [],
        color: data.color ?? "primary",
        content,
    };
}
