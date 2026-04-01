"use client";

import { useState } from "react";

type Platform = "unix" | "windows";

interface TerminalBlockProps {
  platform: Platform;
  lines: { prompt: string; command: string }[];
}

function TerminalBlock({ platform, lines }: TerminalBlockProps) {
  return (
    <div className="space-y-2 font-mono text-sm leading-loose">
      {lines.map((line, i) => (
        <p key={i}>
          <span className="text-primary">{line.prompt}</span> {line.command}
        </p>
      ))}
    </div>
  );
}

const platforms: {
  key: Platform;
  label: string;
  lines: { prompt: string; command: string }[];
}[] = [
  {
    key: "unix",
    label: "macOS / Linux",
    lines: [
      { prompt: "$", command: "curl -sS https://get.useaxon.dev | sh" },
      { prompt: "$", command: "axon init my-workspace" },
      { prompt: "$", command: "cd my-workspace && axon start" },
    ],
  },
  {
    key: "windows",
    label: "Windows",
    lines: [
      { prompt: "PS>", command: "irm https://get.useaxon.dev | iex" },
      { prompt: "PS>", command: "axon init my-workspace" },
      { prompt: "PS>", command: "cd my-workspace; axon start" },
    ],
  },
];

export default function InstallTabs() {
  const [active, setActive] = useState<Platform>("unix");
  const current = platforms.find((p) => p.key === active)!;

  return (
    <div className="rounded-2xl bg-neutral p-6 text-neutral-content">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
          Terminal
        </span>
        <div className="flex gap-1">
          {platforms.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest transition-opacity ${
                active === p.key
                  ? "bg-black/20 text-primary"
                  : "text-primary opacity-40 hover:opacity-60"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <TerminalBlock platform={current.key} lines={current.lines} />
    </div>
  );
}
