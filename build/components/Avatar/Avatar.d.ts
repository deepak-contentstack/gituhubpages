/// <reference types="react" />
import './Avatar.css';
import '../DropDown/Dropdown';
declare const defaultProps: {
    avatars: any[];
    showPlusSignAfter: number;
    type: string;
    showExtraType: string;
    showExtraColor: string;
    size: string;
    showStatus: boolean;
    testId: string;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type AvatarProps = {
    avatars?: Array<AvatarData>;
    showPlusSignAfter?: number;
    type?: 'text' | 'image';
    showExtraType?: string;
    showExtraColor?: string;
    size?: 'small' | 'large';
    showStatus?: boolean;
    testId?: string;
} & Partial<DefaultProps>;
export declare type AvatarData = {
    id: number;
    name: string;
    image: string;
    email: string;
    avatarColor: string;
};
declare function Avatar({ avatars, showPlusSignAfter, type, showExtraType, showExtraColor, size, showStatus, testId }: AvatarProps): JSX.Element;
declare namespace Avatar {
    var defaultProps: {
        avatars: any[];
        showPlusSignAfter: number;
        type: string;
        showExtraType: string;
        showExtraColor: string;
        size: string;
        showStatus: boolean;
        testId: string;
    };
}
declare const AvatarInfo: ({ name, email }: {
    name: any;
    email: any;
}) => JSX.Element;
export default Avatar;
export { AvatarInfo };
