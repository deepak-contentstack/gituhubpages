import React from 'react';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
