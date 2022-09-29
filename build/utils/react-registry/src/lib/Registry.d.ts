import RegistryEntry from './RegistryEntry';
/**
 * A collection of components with conditions
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export default class Registry {
    private registry;
    constructor();
    register(component: object, key: string, conditions?: object): void;
    getEntry(key: string): RegistryEntry | undefined;
    get(key: string, conditions?: object): object | undefined;
}
