import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        poster?: string;
        alt?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        ar?: boolean;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        exposure?: string;
        'environment-image'?: string;
        style?: React.CSSProperties;
      };
    }
  }
}