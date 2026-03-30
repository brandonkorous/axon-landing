import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Scene 2: Problem statement — typographic beats (~4 seconds / 120 frames)
const LINES = [
  { text: "AI tools are everywhere.", delay: 10 },
  { text: "Managing them shouldn't be.", delay: 50 },
];

export const SceneProblem = () => {
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
          gap: 40,
          padding: "0 80px",
        }}
      >
        {LINES.map((line, i) => {
          const s = spring({
            frame,
            fps,
            delay: line.delay,
            config: { damping: 200 },
          });
          const y = interpolate(s, [0, 1], [40, 0]);
          const opacity = interpolate(
            frame,
            [line.delay, line.delay + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          return (
            <div
              key={i}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: i === 0 ? 48 : 52,
                fontWeight: i === 0 ? 400 : 700,
                color: i === 0 ? "#37342f" : "#6b9e9e",
                textAlign: "center",
                lineHeight: 1.3,
                transform: `translateY(${y}px)`,
                opacity,
              }}
            >
              {line.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
