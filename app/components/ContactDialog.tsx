"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdCheckCircle, MdError } from "react-icons/md";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ContactDialog({
  open,
  onOpenChange,
}: ContactDialogProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"form" | "success" | "error">("form");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      form.reset();

      setStatus("success");

      setTimeout(() => {
        setStatus("form");
        onOpenChange(false);
      }, 2500);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  function handleClose(open: boolean) {
    onOpenChange(open);

    if (!open) {
      setStatus("form");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg rounded-3xl">

        {/* ================= FORM ================= */}

        {status === "form" && (
          <>
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>

              <DialogDescription className="font-light">
                Feel free to send me a message. I'll get back to you as soon as
                possible.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-5"
            >
              <div>
                <label className="mb-2 block text-sm">Name</label>

                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-500 bg-transparent px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Email</label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-zinc-500 bg-transparent px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Subject</label>

                <input
                  name="subject"
                  placeholder="Project inquiry"
                  className="w-full rounded-lg border border-zinc-500 bg-transparent px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Message</label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-zinc-500 bg-transparent px-4 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-red-600 py-3 transition hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}

        {/* ================= SUCCESS ================= */}

        {status === "success" && (
          <div className="flex flex-col items-center py-10 text-center">
            <MdCheckCircle className="text-7xl text-green-500" />

            <h2 className="mt-6 text-3xl font-semibold">
              Message Sent!
            </h2>

            <p className="mt-3 text-zinc-400">
              Thank you for reaching out.
              <br />
              I'll get back to you as soon as possible.
            </p>
          </div>
        )}

        {/* ================= ERROR ================= */}

        {status === "error" && (
          <div className="flex flex-col items-center py-10 text-center">
            <MdError className="text-7xl text-red-500" />

            <h2 className="mt-6 text-3xl font-semibold">
              Something went wrong
            </h2>

            <p className="mt-3 text-zinc-400">
              Your message couldn't be sent.
              <br />
              Please try again.
            </p>

            <button
              onClick={() => setStatus("form")}
              className="mt-8 rounded-lg bg-red-600 px-6 py-3 transition hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}