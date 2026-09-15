import React, { useEffect, useRef } from 'react';
import cadWireframeBg from '../assets/contact_cad_wireframe_bg.jpg';
import './AnimatedEngineeringBg.css';

const AnimatedEngineeringBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 1000);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 1000;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes configuration
    const particleCount = Math.min(42, Math.floor(width / 32));
    const particles = [];
    const colors = ['rgba(56, 189, 248, 0.85)', 'rgba(37, 99, 235, 0.75)', 'rgba(45, 212, 191, 0.85)', 'rgba(96, 165, 250, 0.8)'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      });
    }

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.6;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="animated-engineering-bg-wrapper" aria-hidden="true">
      {/* 1. Industrial CAD Graphic Blueprint Base */}
      <div 
        className="cad-graphic-layer" 
        style={{ backgroundImage: `url(${cadWireframeBg})` }} 
      />

      {/* 2. Precision Blueprint Grid & Crosshairs */}
      <div className="blueprint-grid-overlay" />

      {/* 3. Animated Laser Scan Beam */}
      <div className="animated-laser-scanner" />

      {/* 4. Ambient Glowing Energy Orbs */}
      <div className="glowing-energy-orb orb-1" />
      <div className="glowing-energy-orb orb-2" />
      <div className="glowing-energy-orb orb-3" />

      {/* 5. Connected Physics Particle Canvas */}
      <canvas ref={canvasRef} className="engineering-nodes-canvas" />
    </div>
  );
};

export default AnimatedEngineeringBg;
