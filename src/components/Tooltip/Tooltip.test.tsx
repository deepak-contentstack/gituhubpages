import React from 'react'
import { mount } from 'enzyme';
import { render, cleanup } from '@testing-library/react'
import 'regenerator-runtime/runtime'

import Tooltip from './Tooltip'
// import Icon from '../Icon/Icon'
import Button from '../Button/Button';

afterEach(cleanup)

//The Unit testing for all cases has been covered using @testing-library/react
//The snapshot testing is not covered as there was some issue due to use of third party package.

describe('Tooltip', () => {
  let instance: any = null

  afterEach(() => {
    instance = null
  })

  it('renders only the child element', () => {
    const stringContent = render(
      <Tooltip content="tooltip" position="right">
        <button />
      </Tooltip>
    )
    expect(stringContent.container.innerHTML).toBe(
      '<div class=\"tippy-wrapper\" data-test-id=\"cs-tooltip\"><button></button></div>'
    )
    expect(stringContent.container.innerHTML).toMatchSnapshot()
  })

  it('adds a tippy instance to the child node', () => {
    render(
      <Tooltip content={<strong>tooltip</strong>} position="right" onCreate={i => (instance = i)}>
        <button>Click me!</button>
      </Tooltip>
    )
    expect(instance).not.toBeNull()
  })

  it('renders react element content inside the content prop', () => {
    render(
      <Tooltip content={<strong>tooltip</strong>} position="right" onCreate={i => (instance = i)}>
        <button>Click me!</button>
      </Tooltip>
    )

    expect(instance.popper.querySelector('strong')).not.toBeNull()
  })

  it('unmount destroys the tippy instance', () => {
    const { container, unmount } = render(
      <Tooltip content="tooltip" position="right" onCreate={i => (instance = i)}>
        <button />
      </Tooltip>
    )
    const button: any = container.querySelector('button')

    unmount()

    expect(button._tippy).toBeUndefined()
    expect(instance.state.isDestroyed).toBe(true)
  })

  it('component as a child', () => {
    const Child = () => {
      return <div></div>
    }

    render(
      <Tooltip content="tooltip" position="right" onCreate={i => (instance = i)}>
        <Child />
      </Tooltip>
    )
    expect(instance).not.toBeNull()
  })

  it('Render Tooltip with arrow', () => {
    const TooltipComponent = () => {
      return <div>
        <Tooltip
          content="Plain text to show additional information."
          position="bottom"
          showArrow={true}
          variantType="light"
          type="primary"
          visible={true}
        ></Tooltip>
      </div>
    }
    const tree = render(<TooltipComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('Render Tooltip with Close', () => {
    const TooltipComponent = () => {
      return <div>
        <Tooltip
          content="Plain text to show additional information."
          position="bottom"
          showArrow={true}
          variantType="light"
          type="primary"
          visible={true}
          showClose={true}
        ></Tooltip>
      </div>
    }
    const tree = render(<TooltipComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('onClick of Tooltip with Close', () => {
    const mockAction = jest.fn();
    const TooltipComponent = () => {
      return <div>
        <Tooltip
          content="Plain text to show additional information."
          position="bottom"
          showArrow={true}
          variantType="light"
          type="primary"
          visible={true}
          showClose={true}
          onClose={() => { mockAction() }}
        >
          <Button buttonType="primary">Open tooltip</Button>
        </Tooltip>
      </div>
    }
    const tree = mount(<TooltipComponent />)
    tree.find('.closeContainer').simulate('click')
    expect(mockAction).toHaveBeenCalledTimes(1);
  })

  it('Render MenuIcon type Tooltip', () => {
    const TooltipComponent = () => {
      return <div>
        <div className="TooltipWrapper">
          <Tooltip content={{ text: 'abc', icon: 'A' }} position="right" variantType="menuIcon"></Tooltip>
        </div >
      </div>
    }
    const tree = render(<TooltipComponent />)
    expect(tree).toMatchSnapshot()
  })
})

// describe('Tooltip', () => {

//     it('render Tooltip with string as Content', () => {
//         const DefaultTooltip = () => {
//             return (
//                 <Tooltip content="String as Content" position="right">
//                     <Icon icon="Logo" size="small" />
//                 </Tooltip>
//             )
//         }
//         const Dummy = () => {
//             return (
//                 <h1>hello</h1>
//             )
//         }
//         const tree = renderer.create(<Dummy />);
//         console.log('tree....', tree.toJSON());

//         expect(tree).toMatchSnapshot();
//     })

//     it('render Tooltip with Component as Content', () => {
//         const CustomComponentAsContent = () => {
//             const CustomComponent = () => {
//                 return (
//                     <div>
//                         <span>Custom Component Data</span>
//                     </div>
//                 )
//             }
//             return (
//                 <Tooltip content={<CustomComponent />} position="right">
//                     <Button buttonType='primary'>Hover on me!</Button>
//                 </Tooltip>
//             )
//         }
//         const tree = renderer.create(<CustomComponentAsContent />).toJSON();
//         expect(tree).toMatchSnapshot();
//     })

//     it('render Tooltip with Component as Children', () => {
//         const CustomComponentAsChildren = () => {
//             const CustomComponent = () => {
//                 return (
//                     <div>
//                         <span>Custom Component Children</span>
//                     </div>
//                 )
//             }
//             return (
//                 <Tooltip content='Children is Custom component' position="right">
//                     <CustomComponent />
//                 </Tooltip>
//             )
//         }
//         const tree = renderer.create(<CustomComponentAsChildren />).toJSON();
//         expect(tree).toMatchSnapshot();
//     })
// })
