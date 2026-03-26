"use client";

import { useState } from "react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email.trim()) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage(data.message);
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error);
            }
        } catch {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="flex flex-col gap-3 lg:w-1/4">
            <h4 className="text-xs font-semibold uppercase tracking-widest opacity-60">
                Newsletter
            </h4>
            <p className="text-xs opacity-70">
                Stay updated on releases and community news.
            </p>
            {status === "success" ? (
                <p className="text-xs font-medium">{message}</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="you@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input input-sm flex-1 rounded-full border-primary-content/20 bg-primary-content/10 text-xs text-primary-content placeholder:text-primary-content/40"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="btn btn-sm rounded-full bg-primary-content text-primary hover:bg-primary-content/90"
                        >
                            {status === "loading" ? "..." : "Subscribe"}
                        </button>
                    </div>
                    {status === "error" && (
                        <p className="text-xs opacity-80">{message}</p>
                    )}
                </form>
            )}
        </div>
    );
}
