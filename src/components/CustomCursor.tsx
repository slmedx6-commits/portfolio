import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen to mouse position
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Apply cursor-active class to body
    document.body.classList.add('custom-cursor-active');

    // Hover effect listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('interactive-cursor')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  // Smooth trail effect
  useEffect(() => {
    let animFrameId: number;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust trailing speed (0.15 is smooth)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animFrameId = requestAnimationFrame(updateTrail);
    };

    if (isVisible) {
      animFrameId = requestAnimationFrame(updateTrail);
    }

    return () => cancelAnimationFrame(animFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring Cursor Trail */}
      <div
        className="custom-cursor hidden lg:block"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: isHovered ? '50px' : '28px',
          height: isHovered ? '50px' : '28px',
          borderColor: isHovered ? 'var(--color-secondary)' : 'var(--color-primary)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Inner Dot Cursor */}
      <div
        className="custom-cursor-dot hidden lg:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: isHovered ? 'var(--color-primary)' : 'var(--color-secondary)',
          transform: 'translate(-50%, -50%) scale(1.2)',
        }}
      />
    </>
  );
};

export default CustomCursor;
