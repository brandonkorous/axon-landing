import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const LogoAnimation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background fade in
  const bgOpacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Logo scale with spring
  const logoScale = spring({
    frame,
    fps,
    delay: 10,
    config: { damping: 12, stiffness: 120 },
  });

  // Logo opacity
  const logoOpacity = interpolate(frame, [8, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Horizontal line draws in from center
  const lineProgress = spring({
    frame,
    fps,
    delay: 25,
    config: { damping: 200 },
  });

  // Text "axon" fades up
  const textY = interpolate(
    spring({ frame, fps, delay: 40, config: { damping: 200 } }),
    [0, 1],
    [30, 0]
  );
  const textOpacity = interpolate(frame, [40, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Tagline fades in
  const taglineOpacity = interpolate(frame, [65, 80], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const taglineY = interpolate(
    spring({ frame, fps, delay: 65, config: { damping: 200 } }),
    [0, 1],
    [20, 0]
  );

  // Neural nodes animate in
  const nodeDelay = 50;
  const nodeOpacity = interpolate(frame, [nodeDelay, nodeDelay + 15], [0, 0.3], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f3ede5",
        opacity: bgOpacity,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Decorative neural nodes */}
      <svg
        width="1080"
        height="1080"
        viewBox="0 0 1080 1080"
        style={{
          position: "absolute",
          opacity: nodeOpacity,
        }}
      >
        {/* Teal nodes */}
        <circle cx="200" cy="250" r="6" fill="#6b9e9e" />
        <circle cx="150" cy="350" r="4" fill="#6b9e9e" />
        <circle cx="880" cy="280" r="6" fill="#6b9e9e" />
        <circle cx="920" cy="380" r="4" fill="#6b9e9e" />
        <circle cx="300" cy="800" r="5" fill="#6b9e9e" />
        <circle cx="780" cy="820" r="5" fill="#6b9e9e" />
        {/* Terracotta nodes */}
        <circle cx="250" cy="750" r="4" fill="#c07050" />
        <circle cx="830" cy="770" r="4" fill="#c07050" />
        {/* Connecting lines */}
        <line x1="200" y1="250" x2="150" y2="350" stroke="#6b9e9e" strokeWidth="0.8" opacity="0.4" />
        <line x1="880" y1="280" x2="920" y2="380" stroke="#6b9e9e" strokeWidth="0.8" opacity="0.4" />
        <line x1="300" y1="800" x2="250" y2="750" stroke="#c07050" strokeWidth="0.6" opacity="0.3" />
        <line x1="780" y1="820" x2="830" y2="770" stroke="#c07050" strokeWidth="0.6" opacity="0.3" />
      </svg>

      {/* Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Img
          src={staticFile("axon-logo.svg")}
          style={{
            width: 180,
            height: 180,
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        />

        {/* Teal line */}
        <div
          style={{
            width: 200,
            height: 2,
            backgroundColor: "#6b9e9e",
            transform: `scaleX(${lineProgress})`,
            opacity: lineProgress,
          }}
        />

        {/* "axon" text */}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 72,
            fontWeight: 700,
            color: "#37342f",
            letterSpacing: "-0.02em",
            transform: `translateY(${textY}px)`,
            opacity: textOpacity,
          }}
        >
          axon
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 28,
            color: "#6b9e9e",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transform: `translateY(${taglineY}px)`,
            opacity: taglineOpacity,
          }}
        >
          your AI command center
        </div>
      </div>
    </AbsoluteFill>
  );
};
