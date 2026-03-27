import { ImageResponse } from "next/og";

export const alt = "Axon — Open Source AI Command Center";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
                {/* Top — logo + tagline */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                backgroundColor: "#609894",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontSize: "24px",
                                fontWeight: 800,
                            }}
                        >
                            A
                        </div>
                        <span
                            style={{
                                fontSize: "32px",
                                fontWeight: 800,
                                color: "#352f28",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Axon
                        </span>
                    </div>
                    <div
                        style={{
                            fontSize: "56px",
                            fontWeight: 800,
                            color: "#352f28",
                            lineHeight: 1.15,
                            letterSpacing: "-0.03em",
                            maxWidth: "800px",
                        }}
                    >
                        AI that remembers, listens, and thinks with you.
                    </div>
                </div>

                {/* Bottom — feature pills + URL */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        {["Neural Memory", "Voice-First", "Specialist Advisors", "Slack", "Teams", "Zoom", "Discord"].map(
                            (label) => (
                                <div
                                    key={label}
                                    style={{
                                        padding: "8px 20px",
                                        borderRadius: "100px",
                                        backgroundColor: "rgba(96, 152, 148, 0.15)",
                                        color: "#609894",
                                        fontSize: "18px",
                                        fontWeight: 600,
                                    }}
                                >
                                    {label}
                                </div>
                            )
                        )}
                    </div>
                    <div
                        style={{
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "#8a7e70",
                            flexShrink: 0,
                        }}
                    >
                        useaxon.dev
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
