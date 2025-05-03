
import React, { useEffect, useRef } from "react";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Globe parameters
    const dotSize = 1.5;
    const dotDensity = 20; // Lower = more dots
    const globeRadius = Math.min(canvas.width, canvas.height) * 0.3;
    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.6;
    const rotationSpeed = 0.0005;
    
    // Generate dots on the globe
    const dots = [];
    for (let i = 0; i < 180; i += 180 / dotDensity) {
      const lat = (i - 90) * (Math.PI / 180);
      for (let j = 0; j < 360; j += 360 / (dotDensity * 2)) {
        const long = j * (Math.PI / 180);
        
        // Calculate 3D coordinates
        const x = Math.cos(lat) * Math.cos(long);
        const y = Math.sin(lat);
        const z = Math.cos(lat) * Math.sin(long);
        
        dots.push({ x, y, z, alpha: 1 });
      }
    }
    
    // Animation
    let rotation = 0;
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += rotationSpeed;
      
      // Draw and rotate dots
      dots.forEach(dot => {
        // Rotate around y axis
        const x = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const z = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);
        
        // Only draw dots on the front half of the globe
        if (z > 0) {
          // Calculate screen position
          const screenX = centerX + x * globeRadius;
          const screenY = centerY + dot.y * globeRadius;
          
          // Calculate opacity based on z position
          const opacity = z * 0.8;
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(screenX, screenY, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-5 opacity-25"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Globe;
