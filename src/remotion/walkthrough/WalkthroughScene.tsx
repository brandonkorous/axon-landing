import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Reusable scene component: shows a labeled screenshot with optional scroll
export type WalkthroughSceneProps = {
  src: string;
  label: string;
  sublabel: string;
  scrollAmount?: number;
};

export const WalkthroughScene: React.FC<WalkthroughSceneProps> = ({
  src,
  label,
  sublabel,
  scrollAmount = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Screenshot entrance
  const imgEntrance = spring({
    frame,
    fps,
    delay: 5,
    config: { damping: 200 },
  });
  const imgScale = interpolate(imgEntrance, [0, 1], [1.02, 1]);
  const imgOpacity = interpolate(frame, [3, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Label entrance
  const labelSpring = spring({
    frame,
    fps,
    delay: 8,
    config: { damping: 200 },
  });
  const labelY = interpolate(labelSpring, [0, 1], [15, 0]);
  const labelOpacity = interpolate(frame, [8, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Teal accent bar
  const barWidth = interpolate(
    spring({ frame, fps, delay: 12, config: { damping: 200 } }),
    [0, 1],
    [0, 60]
  );

  // Gentle scroll on the screenshot
  const scrollY = interpolate(frame, [30, 120], [0, -scrollAmount], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#f3ede5" }}>
      {/* Label bar at top */}
      <div
        style={{
          position: "absolute",
          top: 36,
          left: 60,
          display: "flex",
          alignItems: "center",
          gap: 16,
          transform: `translateY(${labelY}px)`,
          opacity: labelOpacity,
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: barWidth,
            height: 3,
            backgroundColor: "#6b9e9e",
          }}
        />
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 28,
            fontWeight: 700,
            color: "#37342f",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 18,
            color: "#8a8070",
          }}
        >
          {sublabel}
        </div>
      </div>

      {/* Screenshot in a browser-like frame */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 40,
          right: 40,
          bottom: 30,
          borderRadius: 16,
          overflow: "hidden",
          border: "2px solid #d1c6ab",
          boxShadow: "0 12px 40px rgba(55,52,47,0.1)",
          transform: `scale(${imgScale})`,
          opacity: imgOpacity,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            objectFit: "cover",
            objectPosition: "top left",
            transform: `translateY(${scrollY}px)`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
