'use client';

import { useEffect, useState } from 'react';

type SplineViewerProps = {
  url: string;
  className?: string;
};

export default function SplineViewer({ url, className }: SplineViewerProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('#spline-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src =
        'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
      script.id = 'spline-script';
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  if (!scriptLoaded) return null;

  return (
    <spline-viewer
      url={url}
      class={className}
      style={{ width: '100%', height: '100%' }}
    ></spline-viewer>
  );
}
