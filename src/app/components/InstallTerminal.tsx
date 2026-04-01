"use client";

import { useState } from "react";

type Platform = "unix" | "windows";

export default function InstallTerminal() {
  const [platform, setPlatform] = useState<Platform>("unix");

  return (
    <div className="card bg-neutral text-neutral-content shadow-none">
      <div className="card-body gap-4 p-6">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
            Terminal
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setPlatform("unix")}
              className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest transition-opacity ${
                platform === "unix"
                  ? "bg-black/20 text-primary"
                  : "text-primary opacity-40 hover:opacity-60"
              }`}
            >
              macOS / Linux
            </button>
            <button
              onClick={() => setPlatform("windows")}
              className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest transition-opacity ${
                platform === "windows"
                  ? "bg-black/20 text-primary"
                  : "text-primary opacity-40 hover:opacity-60"
              }`}
            >
              Windows
            </button>
          </div>
        </div>

        {platform === "unix" ? (
          <div className="rounded-lg bg-black/20 p-4 font-mono text-xs leading-loose">
            <p>
              <span className="text-primary">$</span> curl -sS get.useaxon.dev
              | sh
            </p>
            <p>
              <span className="text-primary">$</span> axon init my-workspace
            </p>
            <p>
              <span className="text-primary">$</span> axon start
            </p>
          </div>
        ) : (
          <div className="rounded-lg bg-black/20 p-4 font-mono text-xs leading-loose">
            <p>
              <span className="text-primary">PS&gt;</span> irm
              get.useaxon.dev | iex
            </p>
            <p>
              <span className="text-primary">PS&gt;</span> axon init
              my-workspace
            </p>
            <p>
              <span className="text-primary">PS&gt;</span> axon start
            </p>
          </div>
        )}
      </div>
      <div className="card-body gap-1 border-t border-neutral-content/10 p-6">
        <h3 className="text-sm font-bold">Quick Start</h3>
        <p className="text-xs leading-relaxed opacity-60">
          Up and running in three commands. Works on macOS, Linux, and Windows.
        </p>
      </div>
    </div>
  );
}
