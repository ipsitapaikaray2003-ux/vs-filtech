import { useState, useEffect, useRef } from 'react';

const CountUpStat = ({ end, decimals = 0, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCount(0); // Reset every time it enters the viewport
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress / duration, 4);
        setCount(end * easeProgress);
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default CountUpStat;
