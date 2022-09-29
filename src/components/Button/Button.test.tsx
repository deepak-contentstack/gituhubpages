import React from 'react'
import renderer from 'react-test-renderer'
import EnzymeToJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Button from './Button'

describe('Button Types', () => {
  it('render Primary Button', () => {
    const Primary = () => {
      return <Button buttonType="primary"></Button>
    }
    const tree = renderer.create(<Primary />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render Tertiary Button', () => {
    const element = mount(<Button buttonType="tertiary" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('tertiary')).toBe(true)
  })

  it('render Secondary Button', () => {
    const element = mount(<Button buttonType="secondary" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('secondary')).toBe(true)
  })

  it('render Warning Button', () => {
    const element = mount(<Button buttonType="warning" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('warning')).toBe(true)
  })

  it('render Danger Button', () => {
    const element = mount(<Button buttonType="danger" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('danger')).toBe(true)
  })

  it('render Success Button', () => {
    const element = mount(<Button buttonType="success" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('success')).toBe(true)
  })

  it('render Light Button', () => {
    const element = mount(<Button buttonType="light" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('light')).toBe(true)
  })

  it('render Control Button', () => {
    const element = mount(<Button buttonType="control" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('control')).toBe(true)
  })

  it('render Delete Button', () => {
    const element = mount(<Button buttonType="delete" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('delete')).toBe(true)
  })

  it('render White Button', () => {
    const element = mount(<Button buttonType="white" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('white')).toBe(true)
  })

  it('render Bulk delete Button', () => {
    const element = mount(<Button buttonType="bulk-delete" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('bulk-delete')).toBe(true)
  })

  it('render Tertiary Outline Button', () => {
    const element = mount(<Button buttonType="tertiary-outline" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('tertiary-outline')).toBe(true)
  })

  it('render Outline Delete Button', () => {
    const element = mount(<Button buttonType="outline-delete" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('outline-delete')).toBe(true)
  })

  it('render Outline Success Button', () => {
    const element = mount(<Button buttonType="outline-success" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('outline-success')).toBe(true)
  })

  it('render Outline Button', () => {
    const element = mount(<Button buttonType="outline" />);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('outline')).toBe(true)
  })
})

describe('With icons', () => {

  it('It should render a button with icon on left side', () => {
    const tree = renderer.create(<Button buttonType="secondary" iconAlignment={"left"} icon={"Save"}>With Icon</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('It should render a button with icon on right side', () => {
    const tree = renderer.create(<Button buttonType="secondary" iconAlignment={"right"} icon={"Save"}>With Icon</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
});

describe('Disabled button', () => {
  it('It should render a button which is disabled', () => {
    const element = mount(<Button buttonType="primary" disabled={true}>Disabled</Button>);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('Button--state-disabled')).toBe(true);
  })
})

describe('Only Icon', () => {
  it('It should render a button with only icon', () => {
    const tree = renderer.create(<Button buttonType="primary" icon={"Send"} onlyIcon={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('With Loader', () => {
  it('It should render a button which is in loading state', () => {
    const element = mount(<Button buttonType="primary" isLoading={true}>Loading</Button>);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('Button--state-loading')).toBe(true);
  })
  it('It should render a button which is in loading state with different loading color', () => {
    const tree = renderer.create(<Button buttonType="secondary" loadingColor={"#6C5CE7"} isLoading={true}>Loading</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('With Button Style Properties', () => {
  it('It should render a button with full width', () => {
    const element = mount(<Button buttonType="primary" isFullWidth={true}>Full Width</Button>);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('Button--style-fullwidth')).toBe(true);
  })
  it('It should render a button as rounded', () => {
    const element = mount(<Button buttonType="primary" isRounded={true}>Full Width</Button>);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('Button--style-circle')).toBe(true);
  })
  it('It should render a button with small size', () => {
    const element = mount(<Button buttonType="primary" size={'small'}>Full Width</Button>);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('Button--size-small')).toBe(true);
  })
  it('It should render a button with large size', () => {
    const element = mount(<Button buttonType="primary" size={'large'}>Full Width</Button>);
    expect(element.find('[data-test-id="cs-button"]').props().className.includes('Button--size-large')).toBe(true);
  })
  it('It should render a button with custom className', () => {
    const tree = renderer.create(<Button buttonType="secondary" className="className-test">Custom ClassName</Button>).toJSON()
    expect(tree.props.className.includes("className-test")).toBe(true);
  })
  it('It should render a button with custom style', () => {
    const CustomStyle = () => {
      return (
        <Button buttonType="secondary" style={{ color: 'red' }}>
          <span>Custom Style</span>
        </Button>
      )
    };
    const tree = renderer.create(<CustomStyle />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})

describe('Button as link', () => {
  it('It should render button as link', () => {
    const element = mount(<Button buttonType="primary" href="https://www.contentstack.com/">Click me</Button>);
    expect(element.find('a').length).toBe(1);
    expect(element.find('button').length).toBe(0);
  });
})

describe('Events and method testing of button', () => {
  it('It should trigger the onClick of the button', () => {
    const mockFunction = jest.fn();
    const ButtononClick = ({ onClickAction }) => {
      return (
        <Button buttonType="primary" onClick={onClickAction}>Publish</Button>
      )
    };
    const element = mount(<ButtononClick onClickAction={mockFunction} />);
    expect(mockFunction).toHaveBeenCalledTimes(0);
    element.find('[data-test-id="cs-button"]').simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it('It should not trigger the onClick of the button when in disabled state', () => {
    const mockFunction = jest.fn();
    const ButtononClick = ({ onClickAction }) => {
      return (
        <Button buttonType="primary" disabled={true} onClick={onClickAction}>Publish</Button>
      )
    };
    const element = mount(<ButtononClick onClickAction={mockFunction} />);
    expect(mockFunction).toHaveBeenCalledTimes(0);
    element.find('[data-test-id="cs-button"]').simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(0);
  })
})