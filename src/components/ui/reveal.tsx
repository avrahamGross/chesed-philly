"use client";

import { useEffect, useState, useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  animation?: string;
  exitAnimation?: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
};

const defaultAnimation = "animate-in fade-in slide-in-from-bottom duration-700 ease-out";
const defaultExitAnimation = "animate-out fade-out duration-500 ease-in";

export function Reveal({
  animation = defaultAnimation,
  exitAnimation = defaultExitAnimation,
  className,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasBeenVisible(true);
          if (once) {
            observer?.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      },
    ) : null;

    if (observer) {
      observer.observe(node);
    }

    return () => observer?.disconnect();
  }, [once, rootMargin, threshold]);

  const animationClass = visible
    ? `opacity-100 ${animation}`
    : hasBeenVisible
    ? `opacity-0 ${exitAnimation}`
    : "";

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 will-change-transform",
        animationClass,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
