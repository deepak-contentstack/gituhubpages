import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IArguments } from './util/Arguments';
/**
 * React component for retrieving other components form the registry
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export default class Registered extends React.Component<IArguments, any> {
    static contextTypes: {
        registryProviderArgs: PropTypes.Requireable<object>;
    };
    constructor(props: any);
    render(): JSX.Element;
}
