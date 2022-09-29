import React from 'react';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            italic: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
