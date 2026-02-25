import { useRef, useCallback, useEffect } from "react";

export function useHeroVideo(
  videoRef: React.MutableRefObject<HTMLVideoElement | null>
) {
  const hoverTimeout = useRef<number | undefined>(undefined);
  const leaveTimeout = useRef<number | undefined>(undefined);

  const handleMouseEnter = useCallback(() => {
    if (leaveTimeout.current !== undefined) {
      clearTimeout(leaveTimeout.current);
    }

    hoverTimeout.current = window.setTimeout(() => {
      videoRef.current?.play();
    }, 500);
  }, [videoRef]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeout.current !== undefined) {
      clearTimeout(hoverTimeout.current);
    }

    leaveTimeout.current = window.setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }, 1500);
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current !== undefined) {
        clearTimeout(hoverTimeout.current);
      }
      if (leaveTimeout.current !== undefined) {
        clearTimeout(leaveTimeout.current);
      }
    };
  }, []);

  return { handleMouseEnter, handleMouseLeave };
}