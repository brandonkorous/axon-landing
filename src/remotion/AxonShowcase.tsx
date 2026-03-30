import { AbsoluteFill, staticFile, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import {
  TransitionSeries,
  linearTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { SceneIntro } from "./scenes/SceneIntro";
import { SceneProblem } from "./scenes/SceneProblem";
import { SceneShowcase } from "./scenes/SceneShowcase";
import { SceneFeatures } from "./scenes/SceneFeatures";
import { SceneCTA } from "./scenes/SceneCTA";

// Full showcase: ~30 seconds at 30fps (900 frames)
// Scene durations (in frames at 30fps):
// Intro:     90  (3s)
// Problem:  120  (4s)
// Showcase: 240  (8s)
// Features: 120  (4s)
// CTA:      120  (4s)
// Total with transitions: ~660 frames (~22s)

export const AxonShowcase = () => {
  const { fps } = useVideoConfig();

  const transitionDuration = Math.round(fps * 0.5); // 15 frames = 0.5s

  return (
    <AbsoluteFill style={{ backgroundColor: "#f3ede5" }}>
      {/* Background music */}
      <Audio
        src={staticFile("video/music.wav")}
        volume={(f) => {
          const fadeInEnd = fps * 1;
          const totalFrames = 660;
          const fadeOutStart = totalFrames - fps * 2;
          if (f < fadeInEnd) return (f / fadeInEnd) * 0.6;
          if (f > fadeOutStart)
            return Math.max(0, ((totalFrames - f) / (fps * 2)) * 0.6);
          return 0.6;
        }}
      />

      <TransitionSeries>
        {/* Scene 1: Logo reveal */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <SceneIntro />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* Scene 2: Problem statement */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <SceneProblem />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* Scene 3: App screenshots */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <SceneShowcase />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* Scene 4: Feature pillars */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <SceneFeatures />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* Scene 5: CTA */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <SceneCTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
