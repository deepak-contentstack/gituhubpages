import React from 'react'
import renderer from 'react-test-renderer'
import Link from './Link'
import { mount } from 'enzyme'
describe('Link', () => {
  it('render default Link component', () => {
    const wrapper = renderer.create(<Link href="/">Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render External Link component', () => {
    const wrapper = renderer.create(<Link href="/" type="external">Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render Fontweight regular', () => {
    const element = mount(<Link href="/" fontWeight="regular">Learn More</Link>);
    expect(element.find('div').props().className.includes('regular')).toBe(true);
  });
  it('render Fontweight bold', () => {
    const element = mount(<Link href="/" fontWeight="bold">Learn More</Link>);
    expect(element.find('div').props().className.includes('bold')).toBe(true);
  });
  it('render Fontweight semi-bold', () => {
    const element = mount(<Link href="/" fontWeight="semi-bold">Learn More</Link>);
    expect(element.find('div').props().className.includes('semi-bold')).toBe(true);
  });

  it('render Fontsize medium', () => {
    const element = mount(<Link href="/" fontSize="medium">Learn More</Link>);
    expect(element.find('div').props().className.includes('medium')).toBe(true);
  });

  it('render Fontsize tiny', () => {
    const element = mount(<Link href="/" fontSize="tiny">Learn More</Link>);
    expect(element.find('div').props().className.includes('tiny')).toBe(true);
  });

  it('render Fontsize small', () => {
    const element = mount(<Link href="/" fontSize="small">Learn More</Link>);
    expect(element.find('div').props().className.includes('small')).toBe(true);
  });

  it('render Fontsize large', () => {
    const element = mount(<Link href="/" fontSize="large">Learn More</Link>);
    expect(element.find('div').props().className.includes('large')).toBe(true);
  });

  it('render Fontcolor link', () => {
    const element = mount(<Link href="/" fontColor="link">Learn More</Link>);
    expect(element.find('div').props().className.includes('link')).toBe(true);
  });

  it('render Fontcolor base', () => {
    const element = mount(<Link href="/" fontColor="base">Learn More</Link>);
    expect(element.find('div').props().className.includes('base')).toBe(true);
  });

  it('render Fontcolor white', () => {
    const element = mount(<Link href="/" fontColor="white">Learn More</Link>);
    expect(element.find('div').props().className.includes('white')).toBe(true);
  });

  it('render Fontcolor black', () => {
    const element = mount(<Link href="/" fontColor="black">Learn More</Link>);
    expect(element.find('div').props().className.includes('black')).toBe(true);
  });

  it('render target _blank', () => {
    const wrapper = renderer.create(<Link href="/" target="_blank">Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('render target _self', () => {
    const wrapper = renderer.create(<Link href="/" target="_self">Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('render target _parent', () => {
    const wrapper = renderer.create(<Link href="/" target="_parent">Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('render target _top', () => {
    const wrapper = renderer.create(<Link href="/" target="_top">Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render underline true', () => {
    const wrapper = renderer.create(<Link href="/" underline={true}>Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('render underline false', () => {
    const wrapper = renderer.create(<Link href="/" underline={false}>Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render underlinetype dashed', () => {
    const element = mount(<Link href="/" underline={true} underLineType="dashed">Learn More</Link>);
    expect(element.find('span').props().className.includes('dashed')).toBe(true);
  });
  it('render underlinetype solid', () => {
    const element = mount(<Link href="/" underline={true} underLineType="solid">Learn More</Link>);
    expect(element.find('span').props().className.includes('solid')).toBe(true);
  });

  it('render iconName', () => {
    const wrapper = renderer.create(<Link href="/" type="external" iconName="NewTab">Learn More</Link>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('It should trigger the cbOnClick of link', () => {
    const mockFunction = jest.fn();
    const LinkOnClick = ({ onClickAction }) => {
      return (
        <Link href="/" cbOnClick={onClickAction}>Learn More</Link>
      )
    };
    const element = mount(<LinkOnClick onClickAction={mockFunction} />);
    element.find('div').simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  })

  it('renders class name', () => {
    const DefaultLink = () => {
      return (
        <Link className="Link">Learn more</Link>
      )
    }
    const tree = renderer.create(<DefaultLink />).toJSON();
    expect(tree.props.className.includes("Link")).toBe(true);
  })

  it('render additional style', () => {
    const DefaultLink = () => {
      return (
        <Link style={{ color: 'red' }}>Learn more</Link>
      )
    }
    const tree = renderer.create(<DefaultLink />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});