import React from 'react';
/**
    * Factory function to create a shallowWrapper
    * @function setup
    * @param {React.Component} Component - Component to be render
    * @param {object} props - Component props specific to this setup
    * @param {any} state - Initial state for setup
    * @returns {ShallowWrapper}
*/
export declare const setup: (Component: any, props?: {}, state?: any) => import("enzyme").ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
