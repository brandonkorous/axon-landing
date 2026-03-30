import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { NeuralBackground } from "./NeuralBackground";

// Scene 1: Logo reveal with neural background (~3 seconds / 90 frames)
export const SceneIntro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  const logoScale = spring({
    frame,
    fps,
    delay: 8,
    config: { damping: 12, stiffness: 120 },
  });

  const logoOpacity = interpolate(frame, [6, 18], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const lineProgress = spring({
    frame,
    fps,
    delay: 22,
    config: { damping: 200 },
  });

  const textSpring = spring({
    frame,
    fps,
    delay: 35,
    config: { damping: 200 },
  });
  const textY = interpolate(textSpring, [0, 1], [30, 0]);
  const textOpacity = interpolate(frame, [35, 48], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const tagSpring = spring({
    frame,
    fps,
    delay: 50,
    config: { damping: 200 },
  });
  const tagY = interpolate(tagSpring, [0, 1], [20, 0]);
  const tagOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ backgroundColor: "#f3ede5", opacity: bgOpacity }}
    >
      <NeuralBackground opacity={0.2} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            marginTop: -100,
          }}
        >
          <Img
            src={staticFile("axon-logo.svg")}
            style={{
              width: 160,
              height: 160,
              transform: `scale(${logoScale})`,
              opacity: logoOpacity,
            }}
          />
          <div
            style={{
              width: 180,
              height: 2,
              backgroundColor: "#6b9e9e",
              transform: `scaleX(${lineProgress})`,
              opacity: lineProgress,
            }}
          />
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 64,
              fontWeight: 700,
              color: "#37342f",
              letterSpacing: "-0.02em",
              transform: `translateY(${textY}px)`,
              opacity: textOpacity,
            }}
          >
            axon
          </div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 22,
              color: "#6b9e9e",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transform: `translateY(${tagY}px)`,
              opacity: tagOpacity,
            }}
          >
            AI Command Center
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
