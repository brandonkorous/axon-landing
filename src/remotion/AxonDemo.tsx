import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleCard } from "./walkthrough/TitleCard";

// Scene labels that appear as overlays during the recording
type SceneLabel = {
  text: string;
  sub: string;
  startFrame: number;
  durationFrames: number;
};

// These timings roughly match the demo recording flow
// Recording is ~40s total. At 30fps = ~1200 frames
const SCENE_LABELS: SceneLabel[] = [
  { text: "Talk to Axon", sub: "Voice-first AI chat", startFrame: 30, durationFrames: 120 },
  { text: "Command Center", sub: "Agents, tasks, decisions", startFrame: 210, durationFrames: 150 },
  { text: "The Huddle", sub: "Multi-agent collaboration", startFrame: 420, durationFrames: 150 },
  { text: "Tasks", sub: "Kanban board for your AI team", startFrame: 630, durationFrames: 120 },
  { text: "Neural Memory", sub: "Knowledge graphs that grow", startFrame: 810, durationFrames: 120 },
  { text: "Org Chart", sub: "Agent hierarchy", startFrame: 960, durationFrames: 90 },
  { text: "Plugins", sub: "Extensible integrations", startFrame: 1080, durationFrames: 90 },
];

const FloatingLabel: React.FC<{ label: SceneLabel }> = ({ label }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Relative to the label's own sequence
  const entrance = spring({
    frame,
    fps,
    delay: 0,
    config: { damping: 200 },
  });
  const y = interpolate(entrance, [0, 1], [15, 0]);
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out at end
  const exitStart = label.durationFrames - 15;
  const exitOpacity = interpolate(
    frame,
    [exitStart, label.durationFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const barWidth = interpolate(entrance, [0, 1], [0, 40]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 60,
        left: 60,
        display: "flex",
        alignItems: "center",
        gap: 14,
        transform: `translateY(${y}px)`,
        opacity: opacity * exitOpacity,
        zIndex: 20,
      }}
    >
      {/* Teal pill background */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          backgroundColor: "rgba(55, 52, 47, 0.85)",
          backdropFilter: "blur(8px)",
          padding: "12px 24px",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            width: barWidth,
            height: 2,
            backgroundColor: "#6b9e9e",
          }}
        />
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#f3ede5",
          }}
        >
          {label.text}
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 16,
            color: "#b0a898",
          }}
        >
          {label.sub}
        </div>
      </div>
    </div>
  );
};

// Intro: 90 frames
// Recording: ~1200 frames
// Outro: 120 frames
// Transitions: 2 × 20 = 40 overlap
// Total: 90 + 1200 + 120 - 40 = 1370 frames (~45.7s)

export const AxonDemo = () => {
  const { fps } = useVideoConfig();
  const RECORDING_FRAMES = 1200;
  const TOTAL_FRAMES = 1370;

  return (
    <AbsoluteFill style={{ backgroundColor: "#f3ede5" }}>
      {/* Background music */}
      <Audio
        src={staticFile("video/music.wav")}
        volume={(f) => {
          const fadeIn = fps * 1.5;
          const fadeOutStart = TOTAL_FRAMES - fps * 3;
          if (f < fadeIn) return (f / fadeIn) * 0.4;
          if (f > fadeOutStart)
            return Math.max(0, ((TOTAL_FRAMES - f) / (fps * 3)) * 0.4);
          return 0.4;
        }}
        loop
      />

      <TransitionSeries>
        {/* Branded intro */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <TitleCard
            title="axon"
            subtitle="A quick tour of your AI command center"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* The actual screen recording */}
        <TransitionSeries.Sequence durationInFrames={RECORDING_FRAMES}>
          <AbsoluteFill>
            <Video
              src={staticFile("video/demo-recording.webm")}
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Scene labels overlay */}
            {SCENE_LABELS.map((label, i) => (
              <Sequence
                key={i}
                from={label.startFrame}
                durationInFrames={label.durationFrames}
                layout="none"
                premountFor={fps * 0.3}
              >
                <FloatingLabel label={label} />
              </Sequence>
            ))}
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Branded outro/CTA */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <TitleCard
            title="axon"
            subtitle="Self-hosted. Voice-first. Open source."
            showCTA
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
