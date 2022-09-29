/**
 * Parses and validates the common arguments object passed to {@link Provider} and {@link ProviderComponent}
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs/#/providers}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export interface IProviderArguments {
    conditions?: object;
    registry?: string;
}
export declare class ProviderArguments implements IProviderArguments {
    static isValid(args: any): boolean;
    static parseArgs(arg1: any): ProviderArguments;
    conditions?: object;
    registry?: string;
    constructor(conditions?: object, name?: string);
    isValid(): boolean;
}
