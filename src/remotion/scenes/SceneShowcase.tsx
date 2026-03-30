import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Scene 3: App screenshots showcase — scrolls through key pages (~8 seconds / 240 frames)
type ScreenConfig = {
  src: string;
  label: string;
  sublabel: string;
  startFrame: number;
};

const SCREENS: ScreenConfig[] = [
  {
    src: "video/axon-dashboard.png",
    label: "Command Center",
    sublabel: "Your agents, tasks, and decisions — all in one place",
    startFrame: 0,
  },
  {
    src: "video/axon-huddle.png",
    label: "The Huddle",
    sublabel: "Your AI advisors, working together",
    startFrame: 80,
  },
  {
    src: "video/axon-mind.png",
    label: "Neural Memory",
    sublabel: "AI that remembers, reasons, and grows",
    startFrame: 160,
  },
];

const PhoneFrame: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      width: 820,
      height: 1200,
      borderRadius: 32,
      overflow: "hidden",
      border: "3px solid #d1c6ab",
      backgroundColor: "#f3ede5",
      boxShadow: "0 20px 60px rgba(55,52,47,0.15)",
      ...style,
    }}
  >
    {children}
  </div>
);

const ScreenSlide: React.FC<{ screen: ScreenConfig }> = ({ screen }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    delay: 5,
    config: { damping: 200 },
  });
  const slideY = interpolate(entrance, [0, 1], [120, 0]);
  const imgOpacity = interpolate(frame, [5, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Label
  const labelSpring = spring({
    frame,
    fps,
    delay: 15,
    config: { damping: 200 },
  });
  const labelY = interpolate(labelSpring, [0, 1], [20, 0]);
  const labelOpacity = interpolate(frame, [15, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Slow scroll effect on the image
  const scrollY = interpolate(frame, [20, 70], [0, -200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Exit fade
  const exitOpacity = interpolate(frame, [65, 78], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: exitOpacity,
      }}
    >
      {/* Label above */}
      <div
        style={{
          position: "absolute",
          top: 140,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          transform: `translateY(${labelY}px)`,
          opacity: labelOpacity,
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 44,
            fontWeight: 700,
            color: "#37342f",
          }}
        >
          {screen.label}
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 22,
            color: "#8a8070",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          {screen.sublabel}
        </div>
      </div>

      {/* Phone frame with screenshot */}
      <div
        style={{
          marginTop: 160,
          transform: `translateY(${slideY}px)`,
          opacity: imgOpacity,
        }}
      >
        <PhoneFrame>
          <Img
            src={staticFile(screen.src)}
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transform: `translateY(${scrollY}px)`,
            }}
          />
        </PhoneFrame>
      </div>
    </AbsoluteFill>
  );
};

export const SceneShowcase = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f3ede5" }}>
      {SCREENS.map((screen, i) => (
        <Sequence
          key={i}
          from={screen.startFrame}
          durationInFrames={80}
          premountFor={fps * 0.5}
        >
          <ScreenSlide screen={screen} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
