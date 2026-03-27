"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface AppFrameProps {
  src: string;
  alt: string;
}

export default function AppFrame({ src, alt }: AppFrameProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      {/* Inline preview */}
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full cursor-zoom-in text-left"
          aria-label={`View full size: ${alt}`}
        >
          <div className="overflow-hidden rounded-lg border border-base-300/50 bg-neutral transition-[border-color] duration-200 group-hover:border-primary/40">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-neutral-content/15" />
              <span className="h-2 w-2 rounded-full bg-neutral-content/15" />
              <span className="h-2 w-2 rounded-full bg-neutral-content/15" />
            </div>

            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
        </button>
      </div>

      {/* Lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral/90 p-6 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-content/10 text-neutral-content/70 transition-colors hover:bg-neutral-content/20"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
