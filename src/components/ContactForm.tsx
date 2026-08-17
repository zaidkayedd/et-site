"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { contact } from "@/lib/data";
import { Select } from "./Select";

const field =
  "w-full rounded-xl border border-hair bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-faint transition-colors focus:border-indigo/60 focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: contact.topics[0],
    message: "",
  });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const valid =
    form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length > 4;

  if (sent) {
    return (
      <div className="card flex min-h-[420px] flex-col items-center justify-center p-10 text-center">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-indigo/40 bg-indigo/15 text-indigo-soft">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-lg font-semibold">Thanks, {form.name.split(" ")[0] || "there"}.</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Your message is ready to send. This is a front-end demo form — connect it to your email
          service and it will deliver to {contact.email}.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-hair px-4 py-2 text-sm text-muted transition-colors hover:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs text-muted">
            Name
          </label>
          <input id="name" className={field} placeholder="Your name" value={form.name} onChange={set("name")} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-muted">
            Work email
          </label>
          <input
            id="email"
            type="email"
            className={field}
            placeholder="you@company.com"
            value={form.email}
            onChange={set("email")}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs text-muted">
            Company <span className="text-faint">(optional)</span>
          </label>
          <input id="company" className={field} placeholder="Company" value={form.company} onChange={set("company")} />
        </div>
        <div>
          <label htmlFor="topic" className="mb-1.5 block text-xs text-muted">
            Topic
          </label>
          <Select
            id="topic"
            value={form.topic}
            onChange={(v) => setForm((f) => ({ ...f, topic: v }))}
            options={contact.topics}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-xs text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${field} resize-none`}
          placeholder="Tell us what you're looking to solve…"
          value={form.message}
          onChange={set("message")}
        />
      </div>

      <button
        onClick={() => valid && setSent(true)}
        disabled={!valid}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-base transition-all hover:bg-white/90 hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:w-auto"
      >
        Send message <Send className="h-4 w-4" />
      </button>
    </div>
  );
}
