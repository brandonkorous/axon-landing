import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export const alt = "Axon Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLOR_MAP: Record<string, string> = {
    primary: "#609894",
    secondary: "#c17a5a",
    accent: "#7a8a5c",
    neutral: "#352f28",
};

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const allPosts = getAllPosts();
    return allPosts.map((post) => ({
        id: post.slug,
        alt: `${post.title} — Axon Blog`,
        size,
        contentType,
    }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function BlogOGImage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const color = COLOR_MAP[post?.color ?? "primary"] ?? COLOR_MAP.primary;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    backgroundColor: "#ede4d4",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Top */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: color,
                            }}
                        />
                        <span
                            style={{
                                fontSize: "18px",
                                fontWeight: 600,
                                color: "#8a7e70",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Axon Blog
                        </span>
                    </div>
                    <div
                        style={{
                            fontSize: "52px",
                            fontWeight: 800,
                            color: "#352f28",
                            lineHeight: 1.15,
                            letterSpacing: "-0.03em",
                            maxWidth: "900px",
                        }}
                    >
                        {post?.title ?? "Axon Blog"}
                    </div>
                    {post?.excerpt && (
                        <div
                            style={{
                                fontSize: "22px",
                                color: "#8a7e70",
                                lineHeight: 1.5,
                                maxWidth: "750px",
                            }}
                        >
                            {post.excerpt}
                        </div>
                    )}
                </div>

                {/* Bottom */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        {post?.tags.map((tag) => (
                            <div
                                key={tag}
                                style={{
                                    padding: "6px 16px",
                                    borderRadius: "100px",
                                    backgroundColor: `${color}22`,
                                    color: color,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: 600, color: "#8a7e70" }}>
                        useaxon.dev
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
