import React, { Component } from 'react';
declare class ErrorBoundary extends Component {
    state: {
        error: boolean;
    };
    static getDerivedStateFromError(error: any): {
        error: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): React.ReactNode;
}
export default ErrorBoundary;
