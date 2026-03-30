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

// Scene 5: CTA close — logo + URL + tagline (~3 seconds / 90 frames)
export const SceneCTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    delay: 5,
    config: { damping: 15, stiffness: 100 },
  });
  const logoOpacity = interpolate(frame, [3, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const urlSpring = spring({
    frame,
    fps,
    delay: 20,
    config: { damping: 200 },
  });
  const urlY = interpolate(urlSpring, [0, 1], [25, 0]);
  const urlOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const tagSpring = spring({
    frame,
    fps,
    delay: 35,
    config: { damping: 200 },
  });
  const tagY = interpolate(tagSpring, [0, 1], [20, 0]);
  const tagOpacity = interpolate(frame, [35, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pill button
  const btnSpring = spring({
    frame,
    fps,
    delay: 45,
    config: { damping: 12, stiffness: 100 },
  });
  const btnScale = interpolate(btnSpring, [0, 1], [0.8, 1]);
  const btnOpacity = interpolate(frame, [43, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#f3ede5" }}>
      <NeuralBackground opacity={0.15} />
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
            gap: 24,
            marginTop: -60,
          }}
        >
          <Img
            src={staticFile("axon-logo.svg")}
            style={{
              width: 120,
              height: 120,
              transform: `scale(${logoScale})`,
              opacity: logoOpacity,
            }}
          />

          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 56,
              fontWeight: 700,
              color: "#37342f",
              letterSpacing: "-0.02em",
              transform: `translateY(${urlY}px)`,
              opacity: urlOpacity,
            }}
          >
            axon
          </div>

          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 24,
              color: "#8a8070",
              transform: `translateY(${tagY}px)`,
              opacity: tagOpacity,
              lineHeight: 1.4,
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            The open-source AI command center
            <br />
            you host yourself.
          </div>

          {/* CTA pill */}
          <div
            style={{
              marginTop: 20,
              backgroundColor: "#6b9e9e",
              color: "#f3ede5",
              fontFamily: "system-ui, sans-serif",
              fontSize: 24,
              fontWeight: 600,
              padding: "16px 48px",
              borderRadius: 999,
              transform: `scale(${btnScale})`,
              opacity: btnOpacity,
              letterSpacing: "0.02em",
            }}
          >
            useaxon.dev
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
