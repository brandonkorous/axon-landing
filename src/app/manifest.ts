import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Axon — Open Source AI Command Center",
        short_name: "Axon",
        description:
            "AI that remembers, listens, and thinks with you. Self-hosted AI command center with neural memory, voice interaction, and specialist advisors.",
        start_url: "/",
        display: "browser",
        background_color: "#ede4d4",
        theme_color: "#609894",
        icons: [
            {
                src: "/favicon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
