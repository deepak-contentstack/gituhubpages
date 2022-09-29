import React from 'react';
export default class ErrorBoundary extends React.Component {
    state: {
        error: any;
    };
    iframeRef: React.RefObject<unknown>;
    static getDerivedStateFromError(error: any): {
        error: any;
    };
    componentDidMount(): void;
    componentDidCatch(error: any, errorInfo: any): void;
    render(): {};
}
