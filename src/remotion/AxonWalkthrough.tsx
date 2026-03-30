import { AbsoluteFill, staticFile, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { TitleCard } from "./walkthrough/TitleCard";
import { WalkthroughScene } from "./walkthrough/WalkthroughScene";

// Landscape walkthrough: 1920x1080, 30fps
// Scene layout:
//   Intro title:       90 frames  (3s)
//   Home / Chat:      150 frames  (5s)
//   Dashboard:        150 frames  (5s)
//   Huddle:           150 frames  (5s)
//   Tasks:            150 frames  (5s)
//   Mind:             150 frames  (5s)
//   Org Chart:        120 frames  (4s)
//   Plugins:          120 frames  (4s)
//   CTA:              120 frames  (4s)
//
// 9 scenes = 1200 frames
// 8 transitions × 20 frames = 160 overlap
// Total: 1200 - 160 = 1040 frames (~34.7 seconds)

const TRANSITION_FRAMES = 20;

const SCENES = [
  {
    src: "video/wide-home.png",
    label: "Talk to Axon",
    sublabel: "Voice-first AI interaction with your personal command center",
    scrollAmount: 0,
  },
  {
    src: "video/wide-dashboard.png",
    label: "Command Center",
    sublabel: "Your agents, tasks, decisions, and audit trail in one view",
    scrollAmount: 120,
  },
  {
    src: "video/wide-huddle.png",
    label: "The Huddle",
    sublabel: "Multi-agent collaboration — your AI advisors working together",
    scrollAmount: 80,
  },
  {
    src: "video/wide-tasks.png",
    label: "Task Management",
    sublabel: "64 active tasks across your AI team, with priorities and status",
    scrollAmount: 100,
  },
  {
    src: "video/wide-mind.png",
    label: "Neural Memory",
    sublabel: "Each agent builds a knowledge graph — memories, reasoning, decisions",
    scrollAmount: 0,
  },
  {
    src: "video/wide-org-chart.png",
    label: "Agent Hierarchy",
    sublabel: "Structured delegation from Axon to specialist advisors",
    scrollAmount: 0,
  },
  {
    src: "video/wide-plugins.png",
    label: "Extensible Plugins",
    sublabel: "Google Calendar, Linear, web research — and build your own",
    scrollAmount: 0,
  },
];

export const AxonWalkthrough = () => {
  const { fps } = useVideoConfig();

  const TOTAL_FRAMES = 1040;

  return (
    <AbsoluteFill style={{ backgroundColor: "#f3ede5" }}>
      {/* Background music */}
      <Audio
        src={staticFile("video/music.wav")}
        volume={(f) => {
          const fadeIn = fps * 1.5;
          const fadeOutStart = TOTAL_FRAMES - fps * 3;
          if (f < fadeIn) return (f / fadeIn) * 0.5;
          if (f > fadeOutStart)
            return Math.max(0, ((TOTAL_FRAMES - f) / (fps * 3)) * 0.5);
          return 0.5;
        }}
        loop
      />

      <TransitionSeries>
        {/* Intro title */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <TitleCard
            title="axon"
            subtitle="The open-source, self-hosted AI command center"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        {/* Feature walkthrough scenes */}
        {SCENES.map((scene, i) => (
          <>
            <TransitionSeries.Sequence
              key={`scene-${i}`}
              durationInFrames={i < 4 ? 150 : 120}
            >
              <WalkthroughScene
                src={scene.src}
                label={scene.label}
                sublabel={scene.sublabel}
                scrollAmount={scene.scrollAmount}
              />
            </TransitionSeries.Sequence>

            {i < SCENES.length - 1 && (
              <TransitionSeries.Transition
                key={`trans-${i}`}
                presentation={
                  i % 2 === 0
                    ? slide({ direction: "from-right" })
                    : fade()
                }
                timing={linearTiming({
                  durationInFrames: TRANSITION_FRAMES,
                })}
              />
            )}
          </>
        ))}

        {/* Final transition to CTA */}
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        {/* CTA */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <TitleCard
            title="axon"
            subtitle="Self-hosted. Voice-first. Open source.
Your AI team, under your control."
            showCTA
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
