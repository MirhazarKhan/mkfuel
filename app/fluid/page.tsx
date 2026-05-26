'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import FluidCanvas from '@/components/FluidCanvas';

function FluidSim() {
  const params = useSearchParams();
  const colorful = params.get('colorful') === 'true';
  const color = params.get('color') || 'ff8c00';
  
  const splatColor = {
    r: parseInt(color.slice(0, 2), 16) / 255 || 1.0,
    g: parseInt(color.slice(2, 4), 16) / 255 || 0.4,
    b: parseInt(color.slice(4, 6), 16) / 255 || 0.0,
  };

  return <FluidCanvas colorful={colorful} splatColor={splatColor} />;
}

export default function FluidPage() {
  return (
    <Suspense fallback={<div className="bg-black w-full h-full" />}>
      <FluidSim />
    </Suspense>
  );
}
