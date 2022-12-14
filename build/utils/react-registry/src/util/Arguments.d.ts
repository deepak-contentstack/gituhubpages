/**
 * Parses and validates the common arguments object passed to many react-registry classes
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs/#arguments}
 *
 * @author Joe Esposito <joe@devnet.io>
 */
export interface IArguments {
    id: string;
    conditions?: object;
    registry?: string;
}
export declare class Arguments implements IArguments {
    static isValid(args: any): boolean;
    static parseArgs(params: any, thow?: boolean): Arguments;
    static parseComponentArgs(component: any, params: string | object): IArguments;
    id: string;
    conditions?: object;
    registry?: string;
    constructor(id: string, conditions?: object, registry?: string);
    isValid(): boolean;
}
