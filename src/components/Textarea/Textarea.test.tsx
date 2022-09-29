import React from 'react'
import renderer from 'react-test-renderer'
import Textarea from './Textarea'
import { mount, shallow } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
describe('Textarea', () => {
  it('Textarea with name', () => {
    const TextareaName = () => {
      return (
        <Textarea name="inputText" />
      )
    }
    const tree = renderer.create(<TextareaName />).toJSON()
    expect(tree).toMatchSnapshot()
  }),

    it('Textarea with id', () => {
      const TextareaId = () => {
        return (
          <Textarea id="inputText" />
        )
      }
      const tree = renderer.create(<TextareaId />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Textarea with placeholder', () => {
      const element = mount(<Textarea placeholder="Enter Something..." />);
      expect(element.find('textarea').props().placeholder).toBe('Enter Something...');
    }),

    it('Textarea with classname', () => {
      const element = mount(<Textarea testId="custom-test-id" className="test-classname" placeholder="Enter Something..." />);
      expect(element.find('[data-test-id="custom-test-id"]').props().className.includes('test-classname')).toBe(true);
    }),

    it('render Textarea with small width', () => {
      const element = mount(<Textarea width="small" />);
      expect(element.find('[data-test-id="cs-text-area"]').props().className.includes('small')).toBe(true);
    }),

    it('render Textarea with large width', () => {
      const element = mount(<Textarea width="large" />);
      expect(element.find('[data-test-id="cs-text-area"]').props().className.includes('large')).toBe(true);
    }),

    it('render Textarea with medium width', () => {
      const element = mount(<Textarea width="medium" />);
      expect(element.find('[data-test-id="cs-text-area"]').props().className.includes('medium')).toBe(true);
    }),

    it('render Textarea with x-large width', () => {
      const element = mount(<Textarea width="x-large" />);
      expect(element.find('[data-test-id="cs-text-area"]').props().className.includes('x-large')).toBe(true);
    }),

    it('render Textarea with full width', () => {
      const element = mount(<Textarea width="full" />);
      expect(element.find('[data-test-id="cs-text-area"]').props().className.includes('full')).toBe(true);
    }),

    it('Textarea with max-length', () => {
      const TextareaMaxLength = () => {
        return (
          <Textarea maxLength={50} />
        )
      }
      const tree = renderer.create(<TextareaMaxLength />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Textarea with required', () => {
      const TextareaRequired = () => {
        return (
          <Textarea required={true} />
        )
      }
      const tree = renderer.create(<TextareaRequired />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Textarea with disabled', () => {
      const TextareaDisabled = () => {
        return (
          <Textarea disabled={true} />
        )
      }
      const tree = renderer.create(<TextareaDisabled />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Textarea with value', () => {
      const TextareaValue = () => {
        return (
          <Textarea value="Some text" />
        )
      }
      const tree = renderer.create(<TextareaValue />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Textarea with rows', () => {
      const TextareaRows = () => {
        return (
          <Textarea rows={2} />
        )
      }
      const tree = renderer.create(<TextareaRows />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Textarea with error', () => {
      const TextareaError = () => {
        return (
          <Textarea error={true} />
        )
      }
      const tree = renderer.create(<TextareaError />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Textarea with showCharacterCount', () => {
      const TextareaShowCharacterCount = () => {
        return (
          <Textarea showCharacterCount={true} />
        )
      }
      const tree = renderer.create(<TextareaShowCharacterCount />).toJSON()
      expect(tree).toMatchSnapshot()
    }),

    it('Call onChange method of Textarea', () => {
      const mockOnChange = jest.fn();
      const TextareaOnChange = ({ onChangeAction }) => {
        return (
          <Textarea onChange={onChangeAction}></Textarea>
        )
      };
      const element = mount(<TextareaOnChange onChangeAction={mockOnChange} />);
      element.find('textarea').simulate('change');
      expect(mockOnChange).toBeCalledTimes(1);
    }),

    it('componentWillRecieveProps', () => {
      const element = shallow(<Textarea value="initial" />);
      expect(element.props().value).toEqual('initial');
      element.setProps({ value: 'next' });
      expect(element.props().value).toEqual('next');
    });

  it('Textarea with dir as auto', () => {
    const element = mount(<Textarea dir="auto" placeholder="Enter Something..." />);
    expect(element.find('textarea').props().dir).toBe('auto')
  })
  it('Textarea with dir as rtl', () => {
    const element = mount(<Textarea dir="rtl" placeholder="Enter Something..." />);
    expect(element.find('textarea').props().dir).toBe('rtl')
  })
  it('Textarea with dir as ltr', () => {
    const element = mount(<Textarea dir="ltr" placeholder="Enter Something..." />);
    expect(element.find('textarea').props().dir).toBe('ltr')
  })
})
