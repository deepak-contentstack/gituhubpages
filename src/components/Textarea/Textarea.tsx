import React, {
  Component,
  ChangeEventHandler
} from 'react';
import cn from 'classnames';
import './Textarea.css';
import withDeprecatedProp from '../../utils/hooks/depricatedPropsHoc';

export type TextareaProps = {
  /**
   *Specifies the name attribute of input element.
   */
  name?: string;
  /**
   *Specifies the id attribute of input element.
   */
  id?: string;
  /**
   *Used to give a hint before entering value.
   */
  placeholder?: string;
  /**
   *Pass the class names to be appended to this prop.
   */
  className?: string;
  /**
   *Sets the width of the text area .It can be `small`| `medium` |`large` |`x-large`| `full` .
   */
  width?: 'small' | 'medium' | 'large' | 'x-large' | 'full';
  /**
   *Used to limit the length of the input value characters.
   */
  maxLength?: number;
  /**
   *Sets that the corresponding input is required and cannot be blank/empty.
   */
  required?: boolean;
  /**
   *Used to disable the input field.
   */
  disabled?: boolean;
  /**
   *Lets you add value in the text area.
   */
  value?: string;
  /**
   *Specifies the row space taken by the text area.
   */
  rows?: number;
  /**
   *Used to visually indicate an error.
   */
  error?: boolean;
  /**
   *Shows the count of characters entered in the text area.
   */
  showCharacterCount?: boolean;
  /**
   *The event occurs when the value of an element has been changed.
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  /**
   *This will add a reference to the text area.
   */
  inputRef?: React.Ref<HTMLTextAreaElement>
  /**
   *Used for testing purposes.
   */
  testId?: string;
  /**
   * Provides the directionality of the text.
   */
  textDirection?: 'ltr' | 'rtl' | 'auto'
} & typeof defaultProps;

export interface TextareaState {
  value?: string;
}

const defaultProps = {
  disabled: false,
  required: false,
  width: 'full',
  placeholder: 'Type something...',
  testId: 'cs-text-area',
  dir: 'auto'
};
export class Textarea extends Component<TextareaProps, TextareaState> {
  static defaultProps = defaultProps;

  state = {
    value: this.props.value,
  };

  UNSAFE_componentWillReceiveProps(nextProps: TextareaProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }


  render() {
    const {
      className,
      placeholder,
      maxLength,
      onChange,
      disabled,
      required,
      error,
      width,
      value,
      name,
      rows,
      id,
      inputRef,
      showCharacterCount,
      testId,
      textDirection,
      ...otherProps
    } = this.props;

    const widthClass = `Textarea--${width}`;
    const classNames = cn('Textarea', className, [widthClass], {
      'Textarea--disabled': disabled,
      'Textarea--negative': error,
      'Textarea--with-count': showCharacterCount,
    });


    return (
      <div className={classNames} data-test-id={testId}>
        <textarea
          aria-label={name}
          dir={textDirection}
          className="Textarea__textarea"
          id={id}
          rows={rows}
          disabled={disabled}
          onChange={e => {
            if (onChange) {
              onChange(e);
            }
            this.setState({ value: e.target.value });
          }}
          placeholder={disabled && !this.state.value ? '-' : placeholder}
          name={name}
          maxLength={maxLength}
          value={disabled ? value : this.state && this.state.value}
          ref={inputRef}
          {...otherProps}
        />
        {showCharacterCount && <span className={`Textarea__char-length${this.state.value && (this.state.value.length === maxLength) ? ' Textarea__char-length--reached' : ''}`}>{`${(this.state.value && this.state.value.length ? this.state.value.length : 0)} / ${maxLength}`}</span>}
      </div>
    );
  }
}

export default withDeprecatedProp(Textarea, { 'showCharCount': 'showCharacterCount' });