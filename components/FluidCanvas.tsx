'use client';

import { useEffect, useRef } from 'react';
// @ts-expect-error - no types available
import WebGLFluid from 'webgl-fluid';

interface FluidCanvasProps {
  colorful: boolean;
  splatColor: { r: number; g: number; b: number };
}

export default function FluidCanvas({ colorful, splatColor }: FluidCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initializedRef = useRef(false);
  useEffect(() => {
    if (!canvasRef.current || initializedRef.current) return;
    initializedRef.current = true;

    try {
      // Initialize the WebGL fluid simulation
      const instance = WebGLFluid(canvasRef.current, {
        IMMEDIATE: true,
        AUTO: true,
        INTERVAL: 1500, // Splat every 1.5 seconds
        TRIGGER: 'hover',
        SPLAT_COUNT: 5,
        SIM_RESOLUTION: 256, 
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2.5,
        VELOCITY_DISSIPATION: 1.5,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30, 
        SPLAT_RADIUS: 0.35,
        SPLAT_FORCE: 8000,
        SPLAT_COLOR: colorful ? undefined : splatColor,
        SHADING: true,
        COLORFUL: colorful,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: false, // Opaque background
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.1,
        BLOOM_THRESHOLD: 0.8,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 0.4,
      });
      console.log('WebGLFluid initialized successfully.', instance);
    } catch (err) {
      console.error('WebGLFluid init error:', err);
    }
  }, [splatColor, colorful]); // Initialize when properties are available

  // Use fixed positioning so it acts as the page background
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-auto"
      style={{ width: '100vw', height: '100vh', zIndex: 0 }}
    />
  );
}
