import React from 'react';
import './InlineForms.css';
interface InlineFormsProps {
    /**
     * An optional function to be called when form is closed
     **/
    onCancel?: (arg?: any) => void;
    /**
     * An optional function to be called when form is saved
     **/
    onSave?: (arg?: any) => void;
    defaultTitle?: string;
    fieldArray?: Array<React.ReactNode>;
    disableSave?: boolean;
    defaultOpen?: boolean;
}
declare const InlineForms: {
    (props: InlineFormsProps): JSX.Element;
    defaultProps: Partial<InlineFormsProps>;
};
export default InlineForms;
