import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Scene 4: Feature pillars — three quick beats (~4 seconds / 120 frames)
type Feature = {
  icon: string;
  title: string;
  subtitle: string;
  delay: number;
};

const FEATURES: Feature[] = [
  {
    icon: "🏠",
    title: "Self-Hosted",
    subtitle: "Your data stays yours",
    delay: 5,
  },
  {
    icon: "🎙",
    title: "Voice-First",
    subtitle: "Talk to your AI team",
    delay: 35,
  },
  {
    icon: "🔓",
    title: "Open Source",
    subtitle: "Transparent and extensible",
    delay: 65,
  },
];

export const SceneFeatures = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f3ede5",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 60,
        }}
      >
        {FEATURES.map((feature, i) => {
          const s = spring({
            frame,
            fps,
            delay: feature.delay,
            config: { damping: 15, stiffness: 120 },
          });
          const scale = interpolate(s, [0, 1], [0.7, 1]);
          const opacity = interpolate(
            frame,
            [feature.delay, feature.delay + 12],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          // Teal accent line under each
          const lineWidth = interpolate(
            spring({
              frame,
              fps,
              delay: feature.delay + 10,
              config: { damping: 200 },
            }),
            [0, 1],
            [0, 120]
          );

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                transform: `scale(${scale})`,
                opacity,
              }}
            >
              <div style={{ fontSize: 52 }}>{feature.icon}</div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 42,
                  fontWeight: 700,
                  color: "#37342f",
                }}
              >
                {feature.title}
              </div>
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 22,
                  color: "#8a8070",
                }}
              >
                {feature.subtitle}
              </div>
              <div
                style={{
                  width: lineWidth,
                  height: 2,
                  backgroundColor: "#6b9e9e",
                  marginTop: 4,
                }}
              />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
