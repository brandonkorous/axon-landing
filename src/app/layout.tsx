import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const dmSans = DM_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400", "700", "800", "900"],
});

const SITE_URL = "https://useaxon.dev";
const SITE_NAME = "Axon";
const TITLE = "Axon — Open Source AI Command Center";
const DESCRIPTION =
    "AI that remembers, listens, and thinks with you. Neural memory trees, voice-first interaction, specialist advisors — integrated with Slack, Teams, Zoom, and Discord. All self-hosted, all yours.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: TITLE,
        template: "%s — Axon",
    },
    description: DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: "Axon Team", url: SITE_URL }],
    creator: "Axon",
    publisher: "Axon",
    keywords: [
        "AI command center",
        "self-hosted AI",
        "open source AI",
        "AI advisors",
        "neural memory",
        "voice AI",
        "local LLM",
        "Ollama",
        "Slack AI integration",
        "Teams AI integration",
        "Zoom AI integration",
        "Discord AI bot",
        "AI orchestration",
        "private AI",
    ],
    icons: {
        icon: "/favicon.svg",
    },
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        site: "@axon_ai",
        creator: "@axon_ai",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const ORGANIZATION_JSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/axon-logo.svg`,
    sameAs: [
        "https://github.com/brandonkorous/axon",
        "https://twitter.com/axon_ai",
        "https://discord.gg/axon",
    ],
};

const WEBSITE_JSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: SITE_NAME },
};

const SOFTWARE_JSONLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows (via Docker)",
    description: DESCRIPTION,
    url: SITE_URL,
    downloadUrl: "https://github.com/brandonkorous/axon",
    license: "https://www.gnu.org/licenses/agpl-3.0.html",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-theme="axon"
            className={`${dmSans.variable} ${fraunces.variable} antialiased`}
        >
            <body className="min-h-screen bg-base-100 text-base-content">
                <JsonLd data={ORGANIZATION_JSONLD} />
                <JsonLd data={WEBSITE_JSONLD} />
                <JsonLd data={SOFTWARE_JSONLD} />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
