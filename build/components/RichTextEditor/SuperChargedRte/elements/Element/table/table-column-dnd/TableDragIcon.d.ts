import React from "react";
interface IconProps {
    "path": Array<number>;
    "element": object;
}
declare const SvgComponent: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export default SvgComponent;
