import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Animated neural network background used as a layer across scenes
type Node = {
  x: number;
  y: number;
  r: number;
  color: string;
  delay: number;
};

type Edge = {
  from: number;
  to: number;
  color: string;
  delay: number;
};

const NODES: Node[] = [
  { x: 120, y: 200, r: 5, color: "#6b9e9e", delay: 0 },
  { x: 80, y: 380, r: 3.5, color: "#6b9e9e", delay: 5 },
  { x: 960, y: 240, r: 5, color: "#6b9e9e", delay: 3 },
  { x: 1000, y: 420, r: 3.5, color: "#6b9e9e", delay: 8 },
  { x: 180, y: 1600, r: 4, color: "#c07050", delay: 10 },
  { x: 900, y: 1650, r: 4, color: "#c07050", delay: 12 },
  { x: 540, y: 100, r: 3, color: "#6b9e9e", delay: 6 },
  { x: 540, y: 1800, r: 3, color: "#c07050", delay: 15 },
  { x: 60, y: 960, r: 4, color: "#6b9e9e", delay: 7 },
  { x: 1020, y: 960, r: 4, color: "#6b9e9e", delay: 9 },
  { x: 200, y: 600, r: 3, color: "#6b9e9e", delay: 4 },
  { x: 880, y: 1400, r: 3, color: "#c07050", delay: 11 },
];

const EDGES: Edge[] = [
  { from: 0, to: 1, color: "#6b9e9e", delay: 2 },
  { from: 2, to: 3, color: "#6b9e9e", delay: 6 },
  { from: 0, to: 6, color: "#6b9e9e", delay: 8 },
  { from: 2, to: 6, color: "#6b9e9e", delay: 10 },
  { from: 4, to: 7, color: "#c07050", delay: 14 },
  { from: 5, to: 7, color: "#c07050", delay: 16 },
  { from: 8, to: 0, color: "#6b9e9e", delay: 9 },
  { from: 9, to: 2, color: "#6b9e9e", delay: 11 },
  { from: 1, to: 10, color: "#6b9e9e", delay: 6 },
  { from: 5, to: 11, color: "#c07050", delay: 13 },
];

export const NeuralBackground: React.FC<{ opacity?: number }> = ({
  opacity = 0.25,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <svg
      width="1080"
      height="1920"
      viewBox="0 0 1080 1920"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        opacity,
      }}
    >
      {EDGES.map((edge, i) => {
        const fromNode = NODES[edge.from];
        const toNode = NODES[edge.to];
        const progress = interpolate(
          frame,
          [edge.delay, edge.delay + fps * 0.8],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        return (
          <line
            key={`edge-${i}`}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={fromNode.x + (toNode.x - fromNode.x) * progress}
            y2={fromNode.y + (toNode.y - fromNode.y) * progress}
            stroke={edge.color}
            strokeWidth={0.8}
            opacity={progress * 0.5}
          />
        );
      })}
      {NODES.map((node, i) => {
        const nodeOpacity = interpolate(
          frame,
          [node.delay, node.delay + fps * 0.4],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        // Gentle pulse
        const pulse =
          1 +
          0.15 *
            Math.sin(((frame + node.delay * 10) / fps) * Math.PI * 2 * 0.3);
        return (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r * pulse}
            fill={node.color}
            opacity={nodeOpacity}
          />
        );
      })}
    </svg>
  );
};
