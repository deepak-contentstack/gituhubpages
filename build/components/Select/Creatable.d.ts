import { Component } from 'react';
export default class CreatableInputOnly extends Component<any, any> {
    state: {
        inputValue: string;
        value: any;
    };
    handleChange: (value: any, actionMeta: any) => void;
    handleInputChange: (inputValue: string) => void;
    handleBlur: (evt: any) => void;
    handleKeyDown: (event: any) => void;
    render(): JSX.Element;
}
