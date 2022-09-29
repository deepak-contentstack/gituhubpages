/// <reference types="react" />
import './EntryReferenceDetails.css';
declare const defaultProps: {
    title: string;
    contentType: string;
    onDelete: () => void;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type EntryReferenceDetailsProps = {
    title?: string;
    contentType?: string;
    onEdit?: () => void;
    onDelete?: () => void;
    onViewNestedEntries?: () => void;
} & Partial<DefaultProps>;
declare const EntryReferenceDetails: {
    (props: EntryReferenceDetailsProps): JSX.Element;
    defaultProps: {
        title: string;
        contentType: string;
        onDelete: () => void;
    };
};
export default EntryReferenceDetails;
