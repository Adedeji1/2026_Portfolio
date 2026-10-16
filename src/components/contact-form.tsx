"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Message could not be sent.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Message could not be sent.");
      setStatus("error");
    }
  }

  const field =
    "mt-1.5 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-sm placeholder:text-muted/70 focus-visible:border-accent";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-line bg-surface p-5 sm:p-6">
      <label className="block text-sm font-medium">
        Your name
        <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Enter your name" />
      </label>
      <label className="mt-4 block text-sm font-medium">
        Your email
        <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} placeholder="Enter your email" />
      </label>
      <label className="mt-4 block text-sm font-medium">
        Message
        <textarea name="message" required minLength={10} maxLength={4000} rows={5} className={field} placeholder="Tell me about your project or opportunity" />
      </label>
      {/* Honeypot: hidden from people, filled by bots */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"} className="btn-primary mt-5 w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight className="size-4" aria-hidden="true" />
      </button>
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm">
        {status === "sent" && <span className="text-accent">Message sent. I&rsquo;ll reply by email.</span>}
        {status === "error" && <span className="text-red-600 dark:text-red-400">{error}</span>}
      </p>
    </form>
  );
}
