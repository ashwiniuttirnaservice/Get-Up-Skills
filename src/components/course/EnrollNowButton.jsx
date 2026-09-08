"use client";

import { useState } from "react";
import EnrollModal from "./EnrollModal";

/**
 * Opens the enrollment form modal on click. Renders its own trigger with
 * whatever classes/style/children are passed in, so it can drop straight
 * into the existing "Enroll Now" buttons/links across the course page.
 */
export default function EnrollNowButton({ course, className, style, children, as = "button" }) {
  const [open, setOpen] = useState(false);
  const Trigger = as;

  return (
    <>
      <Trigger
        type={as === "button" ? "button" : undefined}
        onClick={() => setOpen(true)}
        className={className}
        style={style}
      >
        {children}
      </Trigger>
      <EnrollModal open={open} onClose={() => setOpen(false)} course={course} />
    </>
  );
}
