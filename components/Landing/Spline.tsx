'use client';

import { useEffect, useRef, useState } from 'react';

type SplineViewerProps = {
  url: string;
  className?: string;
};

export default function SplineViewer({ url, className }: SplineViewerProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const existingScript = document.querySelector('#spline-script');

    if (!existingScript) {
      script = document.createElement('script');
      script.type = 'module';
      script.src =
        'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
      script.id = 'spline-script';
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    return () => {
      const splineEl = viewerRef.current?.querySelector('spline-viewer');
      if (splineEl) {
        splineEl.remove();
      }
    };
  }, []);

  if (!scriptLoaded) return null;

  return (
    <div
      ref={viewerRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    >
      <spline-viewer
        url={url}
        style={{ width: '100%', height: '100%' }}
      ></spline-viewer>
    </div>
  );
}
