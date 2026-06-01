import React, { useEffect, useState } from 'react';
import './CursorSpotlight.css';

const canUseSpotlight = () => (
  window.matchMedia('(pointer: fine)').matches
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const CursorSpotlight = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEnabledState = () => setIsEnabled(canUseSpotlight());

    updateEnabledState();
    pointerQuery.addEventListener('change', updateEnabledState);
    motionQuery.addEventListener('change', updateEnabledState);

    return () => {
      pointerQuery.removeEventListener('change', updateEnabledState);
      motionQuery.removeEventListener('change', updateEnabledState);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.documentElement.style.setProperty('--cursor-active', '0');
      return undefined;
    }

    let animationFrameId = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let isActive = false;

    const stopAnimationIfSettled = () => {
      const distanceX = Math.abs(targetX - currentX);
      const distanceY = Math.abs(targetY - currentY);

      if (!isActive && distanceX < 0.2 && distanceY < 0.2) {
        animationFrameId = null;
        return true;
      }

      return false;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      document.documentElement.style.setProperty('--cursor-x', `${currentX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${currentY}px`);

      if (stopAnimationIfSettled()) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updatePosition);
    };

    const startAnimation = () => {
      if (!animationFrameId) {
        animationFrameId = window.requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      isActive = true;

      document.documentElement.style.setProperty('--cursor-active', '1');
      startAnimation();
    };

    const handlePointerLeave = () => {
      isActive = false;
      document.documentElement.style.setProperty('--cursor-active', '0');
      startAnimation();
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        handlePointerLeave();
      }
    };

    document.documentElement.style.setProperty('--cursor-x', `${currentX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${currentY}px`);
    document.documentElement.style.setProperty('--cursor-active', '0');

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerOut, { passive: true });
    window.addEventListener('blur', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerOut);
      window.removeEventListener('blur', handlePointerLeave);
      document.documentElement.style.setProperty('--cursor-active', '0');

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isEnabled]);

  return <div className="cursor-spotlight" aria-hidden="true" />;
};

export default CursorSpotlight;
