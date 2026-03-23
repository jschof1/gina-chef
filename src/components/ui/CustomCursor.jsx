import { useRef, useEffect } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

export function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 });

  useEffect(() => {
    const h = (e) => { 
      pos.current.x = e.clientX; 
      pos.current.y = e.clientY; 
    };
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  useGSAP(() => {
    gsap.ticker.add(() => {
      const p = pos.current;
      p.cx += (p.x - p.cx) * 0.15; 
      p.cy += (p.y - p.cy) * 0.15;
      
      gsap.set(cursorRef.current, { x: p.cx, y: p.cy });
      gsap.set(cursorDotRef.current, { x: p.x, y: p.y });
    });
  });

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference" 
      />
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference" 
      />
    </>
  );
}
