import ComponentEntry from './ComponentEntry';
/**
 * Holds a list of components and their associated conditions for retrieval
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export default class RegistryEntry {
    private components;
    constructor();
    /**
     * Returns the component with no associated conditions.
     * Only one default component will be present.
     */
    findDefault(): ComponentEntry | undefined;
    getDefault(): object | undefined;
    get(mustMatch: boolean, conditions?: object): object | undefined;
    add(component: object, conditions?: object): void;
}
