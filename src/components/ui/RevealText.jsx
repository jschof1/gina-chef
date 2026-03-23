import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

export function RevealText({ text, className = "", delay = 0 }) {
  const containerRef = useRef(null);

  // Split text into words
  const words = text.split(' ');

  useGSAP(() => {
    gsap.from('.reveal-word', {
      y: '120%',
      opacity: 0,
      rotateZ: 5,
      duration: 1.2,
      stagger: 0.04,
      ease: 'power4.out',
      delay: delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-2 -mb-2 mr-[0.25em]">
          <span className="reveal-word inline-block origin-bottom-left">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
