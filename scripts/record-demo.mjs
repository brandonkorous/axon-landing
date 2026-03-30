// Record an automated demo walkthrough of the Axon app
// Usage: node scripts/record-demo.mjs
// Output: public/video/demo-recording.webm

import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = "public/video";

mkdirSync(OUTPUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  recordVideo: {
    dir: OUTPUT_DIR,
    size: { width: 1920, height: 1080 },
  },
});

const page = await context.newPage();

// Helper: smooth scroll
const smoothScroll = async (y, duration = 1000) => {
  await page.evaluate(
    ([scrollY, dur]) => {
      const start = window.scrollY;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / dur, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        window.scrollTo(0, start + (scrollY - start) * ease);
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    },
    [y, duration]
  );
  await page.waitForTimeout(duration + 200);
};

// Helper: slow type for natural feel
const slowType = async (selector, text) => {
  await page.click(selector);
  for (const char of text) {
    await page.keyboard.type(char, { delay: 80 + Math.random() * 60 });
  }
};

console.log("🎬 Starting demo recording...\n");

// ═══════════════════════════════════════════
// Scene 1: Home — Talk to Axon
// ═══════════════════════════════════════════
console.log("Scene 1: Home / Chat");
await page.goto(BASE_URL, { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

// Type a message
await slowType(
  'input[placeholder*="Message Axon"], textarea[placeholder*="Message Axon"]',
  "What's on our agenda today?"
);
await page.waitForTimeout(1500);

// Don't send — just show the typing
await page.waitForTimeout(2000);

// ═══════════════════════════════════════════
// Scene 2: Dashboard
// ═══════════════════════════════════════════
console.log("Scene 2: Dashboard");
await page.click('a[href="/dashboard"]');
await page.waitForTimeout(2000);

// Scroll down slowly to show tasks and audit log
await smoothScroll(400, 1500);
await page.waitForTimeout(2000);
await smoothScroll(800, 1500);
await page.waitForTimeout(2000);
await smoothScroll(0, 1000);
await page.waitForTimeout(1000);

// ═══════════════════════════════════════════
// Scene 3: Huddle
// ═══════════════════════════════════════════
console.log("Scene 3: Huddle");
await page.click('a[href="/huddle"]');
await page.waitForTimeout(2000);

// Scroll through the conversation
await smoothScroll(300, 1500);
await page.waitForTimeout(2000);
await smoothScroll(600, 1500);
await page.waitForTimeout(1500);
await smoothScroll(0, 1000);
await page.waitForTimeout(1000);

// ═══════════════════════════════════════════
// Scene 4: Tasks
// ═══════════════════════════════════════════
console.log("Scene 4: Tasks");
await page.click('a[href="/tasks"]');
await page.waitForTimeout(2000);

// Scroll through the task board
await smoothScroll(300, 1500);
await page.waitForTimeout(2000);
await smoothScroll(0, 1000);
await page.waitForTimeout(1000);

// ═══════════════════════════════════════════
// Scene 5: Mind / Knowledge Graph
// ═══════════════════════════════════════════
console.log("Scene 5: Mind");
await page.click('a[href="/mind"]');
await page.waitForTimeout(2000);

// Switch to an agent with data
try {
  const vaultSelect = page.locator("select").first();
  await vaultSelect.selectOption("chief_technology_officer", { timeout: 5000 });
} catch {
  // Try by visible text
  try {
    const vaultSelect = page.locator("select").first();
    await vaultSelect.selectOption({ index: 7 }, { timeout: 5000 });
  } catch {
    // Skip if we can't switch — the page still shows fine
    console.log("  (skipped vault switch)");
  }
}
await page.waitForTimeout(3000);

// ═══════════════════════════════════════════
// Scene 6: Org Chart
// ═══════════════════════════════════════════
console.log("Scene 6: Org Chart");
await page.click('a[href="/org-chart"]');
await page.waitForTimeout(3000);

// ═══════════════════════════════════════════
// Scene 7: Plugins
// ═══════════════════════════════════════════
console.log("Scene 7: Plugins");
await page.click('a[href="/plugins"]');
await page.waitForTimeout(3000);

// ═══════════════════════════════════════════
// Scene 8: Back to home for closing
// ═══════════════════════════════════════════
console.log("Scene 8: Return home");
await page.click('a[href="/"]');
await page.waitForTimeout(3000);

// Get the video path before closing
console.log("\n✅ Recording complete. Saving video...");
const videoPath = await page.video()?.path();
await page.close();
await context.close();
await browser.close();

if (videoPath) {
  // Wait a beat for file to flush
  await new Promise((r) => setTimeout(r, 1000));
  const { renameSync, existsSync } = await import("fs");
  const dest = OUTPUT_DIR + "/demo-recording.webm";
  if (existsSync(videoPath)) {
    try {
      renameSync(videoPath, dest);
      console.log(`📹 Saved to: ${dest}`);
    } catch {
      console.log(`📹 Video saved at: ${videoPath}`);
      console.log(`   Move it to ${dest} manually if needed.`);
    }
  } else {
    console.log(`📹 Video may still be processing at: ${videoPath}`);
  }
}
