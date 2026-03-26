import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

export const metadata: Metadata = {
    title: "Axon — Open Source AI Command Center",
    description:
        "AI that remembers, listens, and thinks with you. Neural memory trees, voice-first interaction, specialist advisors. All self-hosted, all yours.",
    metadataBase: new URL("https://useaxon.dev"),
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        title: "Axon — Open Source AI Command Center",
        description:
            "AI that remembers, listens, and thinks with you. Neural memory trees, voice-first interaction, specialist advisors. All self-hosted, all yours.",
        url: "https://useaxon.dev",
        siteName: "Axon",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Axon — Open Source AI Command Center",
        description:
            "AI that remembers, listens, and thinks with you. Neural memory trees, voice-first interaction, specialist advisors. All self-hosted, all yours.",
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
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
