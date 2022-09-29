import React from 'react';
import { XAxisProps, YAxisProps } from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';
import { Margin } from 'recharts/types/util/types';
export interface ILine {
    type?: CurveType;
    dataKey?: string;
    stroke?: string;
    strokeWidth?: string | number;
    connectNulls?: boolean;
}
export declare type LineGraphProps = {
    margin?: Margin;
    data: Record<string, any>[];
    gridStrokeWidth?: string | number;
    xAxisProps?: Pick<XAxisProps, "dataKey" | "domain" | "scale" | "type" | "tickFormatter">;
    yAxisProps?: Pick<YAxisProps, "domain" | "tickFormatter">;
    CustomTooltip?: any;
    lines: ILine[];
    isTooltipEnabled?: boolean;
};
declare const _default: React.MemoExoticComponent<(props: LineGraphProps) => JSX.Element>;
export default _default;
