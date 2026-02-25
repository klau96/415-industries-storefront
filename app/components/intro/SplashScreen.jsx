
import { useEffect, useState } from 'react';

export function SplashScreen({ finishLoading }) {
  const [isMounted, setIsMounted] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // 1. Lock the body scroll when this component mounts
    document.body.style.overflow = 'hidden';
    setIsMounted(true);

    // 2. Start the exit animation after 2.5 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setAnimateOut(true);
    }, 2500);

    // 3. Actually unmount the component after the animation finishes (e.g., 500ms later)
    const cleanupTimer = setTimeout(() => {
      document.body.style.overflow = ''; // Unlock scroll
      finishLoading(); // Tell parent we are done
    }, 3000); // 2500ms + 500ms animation duration

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
      document.body.style.overflow = '';
    };
  }, [finishLoading]);

  return (
    <div
      className={`
        fixed inset-0 z-9999 flex items-center justify-center bg-black
        transition-opacity duration-700 ease-in-out
        hover:cursor-pointer
        ${animateOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div className="text-center">
        {/* YOUR LOGO / TEXT HERE */}
        <h1 
          className={`
            text-6xl font-bold text-white tracking-widest uppercase
            transition-all duration-1000 transform
            ${isMounted ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'}
          `}
        >
          415 Industries
        </h1>
        
        {/* Optional Loading Bar */}
        <div className="mt-4 h-1 w-32 bg-gray-800 mx-auto rounded overflow-hidden">
          <div className="h-full bg-white animate-[loading_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}