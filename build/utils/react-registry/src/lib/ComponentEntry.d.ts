/**
 * Represents a component in the registry
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export default class ComponentEntry {
    component: object;
    conditions: object | undefined;
    constructor(component: object, conditions?: object);
}
