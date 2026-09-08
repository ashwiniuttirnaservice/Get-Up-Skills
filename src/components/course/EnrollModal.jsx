"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { enrollStudent } from "@/lib/api";

const initialForm = { fullName: "", mobileNo: "", email: "", collegeName: "" };

export default function EnrollModal({ open, onClose, course }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  // Reset the form whenever the modal is (re)opened for a fresh enrollment.
  // Adjusted during render (not in an effect) to avoid an extra render pass.
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setForm(initialForm);
      setStatus("idle");
      setError("");
    }
  }

  // Lock page scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;

    if (!form.fullName.trim() || !form.mobileNo.trim() || !form.email.trim()) {
      setError("Please fill in your name, mobile number and email.");
      return;
    }
    if (!/^\d{10}$/.test(form.mobileNo.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      await enrollStudent({
        fullName: form.fullName.trim(),
        mobileNo: form.mobileNo.trim(),
        email: form.email.trim(),
        collegeName: form.collegeName.trim(),
        courseId: course?.id,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  const accent = course?.color || "#485DAC";

  // Rendered via a portal straight into <body> — an ancestor like TiltCard
  // sets an inline `transform`, which would otherwise turn it into the
  // containing block for this modal's `fixed` positioning and pin the
  // modal to that tilting card instead of centering it on the viewport.
  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enroll-modal-title"
    >
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={18} />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-4 text-center">
            <CheckCircle2 size={48} className="mb-3" style={{ color: accent }} />
            <h3 className="text-lg font-bold text-slate-900">You&apos;re in!</h3>
            <p className="mt-2 text-sm text-slate-500">
              Thanks, {form.fullName.split(" ")[0]}. Our team will reach out to you shortly on{" "}
              {form.mobileNo} to help you get started
              {course?.title ? ` with ${course.title}` : ""}.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-lg px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              style={{ backgroundColor: accent }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 id="enroll-modal-title" className="text-lg font-bold text-slate-900">
              Enroll {course?.title ? `in ${course.title}` : "Now"}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Share your details and our team will get you started.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label htmlFor="enroll-fullName" className="sr-only">
                  Full name
                </label>
                <input
                  id="enroll-fullName"
                  type="text"
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={update("fullName")}
                  required
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div>
                <label htmlFor="enroll-mobileNo" className="sr-only">
                  Mobile number
                </label>
                <input
                  id="enroll-mobileNo"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Mobile number"
                  value={form.mobileNo}
                  onChange={update("mobileNo")}
                  required
                  maxLength={10}
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div>
                <label htmlFor="enroll-email" className="sr-only">
                  Email
                </label>
                <input
                  id="enroll-email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={update("email")}
                  required
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div>
                <label htmlFor="enroll-collegeName" className="sr-only">
                  College / company (optional)
                </label>
                <input
                  id="enroll-collegeName"
                  type="text"
                  placeholder="College / company (optional)"
                  value={form.collegeName}
                  onChange={update("collegeName")}
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              {error && <p className="text-sm font-medium text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                style={{ backgroundColor: accent }}
              >
                {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
                {status === "submitting" ? "Submitting..." : "Confirm Enrollment"}
              </button>
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to be contacted about this course.
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
