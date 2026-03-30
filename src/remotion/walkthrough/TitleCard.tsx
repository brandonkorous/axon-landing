import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Title card with logo, used for intro and outro
export const TitleCard: React.FC<{
  title: string;
  subtitle: string;
  showCTA?: boolean;
}> = ({ title, subtitle, showCTA = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    delay: 5,
    config: { damping: 12, stiffness: 120 },
  });
  const logoOpacity = interpolate(frame, [3, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineWidth = interpolate(
    spring({ frame, fps, delay: 18, config: { damping: 200 } }),
    [0, 1],
    [0, 140]
  );

  const titleSpring = spring({ frame, fps, delay: 22, config: { damping: 200 } });
  const titleY = interpolate(titleSpring, [0, 1], [20, 0]);
  const titleOpacity = interpolate(frame, [22, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subSpring = spring({ frame, fps, delay: 32, config: { damping: 200 } });
  const subY = interpolate(subSpring, [0, 1], [15, 0]);
  const subOpacity = interpolate(frame, [32, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaSpring = spring({ frame, fps, delay: 45, config: { damping: 12 } });
  const ctaScale = interpolate(ctaSpring, [0, 1], [0.8, 1]);
  const ctaOpacity = interpolate(frame, [43, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Decorative neural dots
  const dotOpacity = interpolate(frame, [10, 30], [0, 0.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f3ede5",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Decorative dots */}
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: "absolute", opacity: dotOpacity }}
      >
        <circle cx="180" cy="200" r="4" fill="#6b9e9e" />
        <circle cx="120" cy="300" r="3" fill="#6b9e9e" />
        <circle cx="1740" cy="220" r="4" fill="#6b9e9e" />
        <circle cx="1800" cy="340" r="3" fill="#6b9e9e" />
        <circle cx="200" cy="800" r="3" fill="#c07050" />
        <circle cx="1720" cy="820" r="3" fill="#c07050" />
        <line x1="180" y1="200" x2="120" y2="300" stroke="#6b9e9e" strokeWidth="0.6" opacity="0.4" />
        <line x1="1740" y1="220" x2="1800" y2="340" stroke="#6b9e9e" strokeWidth="0.6" opacity="0.4" />
      </svg>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Img
          src={staticFile("axon-logo.svg")}
          style={{
            width: 100,
            height: 100,
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        />
        <div
          style={{
            width: lineWidth,
            height: 2,
            backgroundColor: "#6b9e9e",
          }}
        />
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 52,
            fontWeight: 700,
            color: "#37342f",
            letterSpacing: "-0.02em",
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 24,
            color: "#8a8070",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            transform: `translateY(${subY}px)`,
            opacity: subOpacity,
          }}
        >
          {subtitle}
        </div>
        {showCTA && (
          <div
            style={{
              marginTop: 16,
              backgroundColor: "#6b9e9e",
              color: "#f3ede5",
              fontFamily: "system-ui, sans-serif",
              fontSize: 22,
              fontWeight: 600,
              padding: "14px 44px",
              borderRadius: 999,
              transform: `scale(${ctaScale})`,
              opacity: ctaOpacity,
            }}
          >
            useaxon.dev
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
