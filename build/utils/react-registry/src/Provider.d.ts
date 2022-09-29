import { IArguments } from './util/Arguments';
import { IProviderArguments } from './util/ProviderArguments';
/**
 * Facilitates retrieving multiple components with the same options
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs/#/providers}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export default class Provider {
    /**
     * Combines arguments held by the provider and those passes into to {@link get()} and {@link render()}
     * methods to determine which arguments to send to the {@link Registry}.
     *
     * @param provider provider's options {@link ProviderArguments}
     * @param local options {@link Arguments}
     */
    static getArgs(provider: IProviderArguments, local: IArguments): IArguments;
    private arguments;
    constructor(params: IProviderArguments);
    /**
     * Retrieves an object or function from the registry using supplied {@link IArguments}
     * and {@link ProviderArguments} from the provider instance.
     *
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#provider}
     *
     * @param params options, parsed to {@link Arguments}
     */
    get(params: string | IArguments): object | undefined;
    /**
     * Retrieves an object or function from the registry using supplied {@link IArguments}
     * and {@link ProviderArguments} from the provider instance, then creates a
     * React element with it. The item retrieved must be a function.
     *
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#render}
     *
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
    render(params: string | IArguments, props?: object): object | undefined;
    /**
     * Alias for render()
     *
     * Retrieves an object or function from the registry using supplied {@link IArguments}
     * and {@link ProviderArguments} from the provider instance, then creates a
     * React element with it. The item retrieved must be a function.
     *
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#render}
     *
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
    createElement(params: string | IArguments, props?: object): object | undefined;
}
