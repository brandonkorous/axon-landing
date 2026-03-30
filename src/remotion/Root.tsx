import { Composition, Folder } from "remotion";
import { LogoAnimation } from "./LogoAnimation";
import { AxonShowcase } from "./AxonShowcase";
import { AxonWalkthrough } from "./AxonWalkthrough";
import { AxonDemo } from "./AxonDemo";

export const RemotionRoot = () => {
  return (
    <>
      <Folder name="Showcase">
        {/* Portrait social video — 1080x1920, ~21s */}
        <Composition
          id="AxonShowcase"
          component={AxonShowcase}
          durationInFrames={630}
          fps={30}
          width={1080}
          height={1920}
        />
        {/* Landscape walkthrough — 1920x1080, ~35s */}
        <Composition
          id="AxonWalkthrough"
          component={AxonWalkthrough}
          durationInFrames={1040}
          fps={30}
          width={1920}
          height={1080}
        />
        {/* Live demo recording with branding — 1920x1080, ~46s */}
        <Composition
          id="AxonDemo"
          component={AxonDemo}
          durationInFrames={1370}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="Assets">
        <Composition
          id="LogoAnimation"
          component={LogoAnimation}
          durationInFrames={150}
          fps={30}
          width={1080}
          height={1080}
        />
      </Folder>
    </>
  );
};
