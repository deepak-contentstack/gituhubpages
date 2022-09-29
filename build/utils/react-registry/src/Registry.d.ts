import * as React from 'react';
import { IArguments } from './util/Arguments';
/**
 * Main class for interacting with the react-registry package.
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export default class Registry {
    /**
     * Validates and registers an object or function using supplied {@link Arguments}
     *
     * For usage: {@link https://www.devnet.io/libs/react-registry/doc/#/registering}
     *
     * @param component the object or function to be registered
     * @param params options, parsed to {@link Arguments}
     */
    static register(component: any, params?: string | IArguments): void;
    /**
     * Retrieves an object or function from the registry using supplied {@link Arguments}
     *
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
     *
     * @param params options, parsed to {@link Arguments}
     */
    static get(params: string | IArguments): object | undefined;
    /**
     * Retrieves an object or function from the registry using supplied {@link Arguments}
     * and creates a React element with it. The item retrieved must be a function.
     *
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
     *
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
    static render(params: string | IArguments, props?: object): React.ReactElement<any> | undefined;
    /**
     * Alias for render()
     *
     * Retrieves an object or function from the registry using supplied {@link Arguments}
     * and creates a React element with it. The item retrieved must be a function.
     *
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
     *
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
    static createElement(params: string | IArguments, props?: object): React.ReactElement<any> | undefined;
}
