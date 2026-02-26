
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
        fixed inset-0 z-9999 flex items-center justify-center
        transition-all duration-500 ease-in-out
        hover:cursor-pointer
        ${animateOut ? 'opacity-0 blur-lg pointer-events-none' : 'bg-white'}
      `}
    >
      <div className="text-center">
        {/* YOUR LOGO / TEXT HERE */}
        <div className='w-64 h-auto'>
          <img className={`
        transition-all duration-500 transform w-full h-full
        ${
          isMounted
          ? 'translate-y-0 blur-0 opacity-100'
          : 'translate-y-10 opacity-0 blur-0'
        }
          `} src='/gif/415-logo-black.gif'>
          </img>
        </div>
        
        <h1
          className={`
            text-6xl font-bold text-black tracking-widest uppercase
            transition-all duration-500 transform
            ${
              isMounted 
              ? 'translate-y-0 opacity-100 blur-0' 
              : 'translate-y-10 opacity-0 blur-sm'
            }
          `}
        >
          415 Industries
        </h1>
        
        {/* Optional Loading Bar */}
        <div className={`mt-2 h-1 w-auto bg-gray-800 mx-auto rounded overflow-hidden
          ${
            isMounted 
            ? 'translate-y-0 opacity-100 blur-0' 
            : 'translate-y-10 opacity-0 blur-sm'
          }`}>
          <div className={`h-full bg-black animate-[loading_2s_ease-in-out_infinite]`} />
        </div>
      </div>
    </div>
  );
}