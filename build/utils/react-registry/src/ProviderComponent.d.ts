import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ProviderArguments } from './util/ProviderArguments';
/**
 * React component for passing arguments of a {@link Provider} with context to {@link Registered} components
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs#provider}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export interface IProviderProps {
    conditions?: object;
    registry?: string;
}
export default class ProviderComponent extends React.Component<IProviderProps, any> {
    static propTypes: {
        conditions: PropTypes.Requireable<object>;
        registry: PropTypes.Requireable<string>;
    };
    static contextTypes: {
        registryProviderArgs: PropTypes.Requireable<object>;
    };
    static childContextTypes: {
        registryProviderArgs: PropTypes.Requireable<object>;
    };
    constructor(props: IProviderProps);
    getChildContext(): {
        registryProviderArgs: ProviderArguments;
    };
    render(): string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)> | React.ReactPortal;
}
