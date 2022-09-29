/**
 * Wrapper to decouple data structure used in registry
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export default class ObjectMap {
    private map;
    has(key: string): boolean;
    get(key: string): any;
    put(key: string, object: any): void;
}
