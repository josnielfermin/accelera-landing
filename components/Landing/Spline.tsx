'use client';

import { useEffect } from 'react';

type SplineViewerProps = {
  url: string;
  className?: string;
};

export default function SplineViewer({ url, className }: SplineViewerProps) {
  useEffect(() => {
    const existingScript = document.querySelector('#spline-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src =
        'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
      script.id = 'spline-script';
      document.body.appendChild(script);
    }
  }, []);

  return <spline-viewer url={url} className={className}></spline-viewer>;
}
