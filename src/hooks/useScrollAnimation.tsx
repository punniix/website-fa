import { useInView } from "framer-motion";
import { useRef, RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.2, once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once 
  });

  return { ref, isInView };
};

export const useScrollRef = (): RefObject<HTMLDivElement> => {
  return useRef<HTMLDivElement>(null);
};
