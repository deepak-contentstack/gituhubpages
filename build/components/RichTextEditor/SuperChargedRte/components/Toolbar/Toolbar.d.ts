import React from 'react';
export declare interface ToolbarProps extends React.AllHTMLAttributes<HTMLDivElement> {
}
export declare const Toolbar: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<HTMLDivElement>>;
export declare interface MenuProps extends React.AllHTMLAttributes<HTMLDivElement> {
}
export declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
export declare const Portal: ({ children }: {
    children: any;
}) => React.ReactPortal;
