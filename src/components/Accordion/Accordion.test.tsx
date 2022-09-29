import React from 'react'
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Accordion, { AccordionData } from './Accordion'

// import { Icon } from '../Icon2/Icon'
import Tooltip from '../Tooltip/Tooltip'

describe('Accordion Component', () => {
  describe('Default Component', () => {
    it('renders the div component', () => {
      const output = renderer
        .create(<Accordion title="Default View" accordionData="This the the default accordion" />)
        .toJSON()
      expect(output).toMatchSnapshot()
    });

    it('renders the data of the Accordion on clicking on the title', () => {
      const wrapper = mount(<Accordion title="Default View" accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__data').length).toBe(0);
      wrapper.find('.Accordion__heading').simulate('click');
      expect(wrapper.find('.Accordion__data').length).toBe(1);
    });

    it('It should render the title as a component', () => {
      const DummyTitle = () => {
        return <span className="DummyTitle">Render Title As Component</span>
      }
      const wrapper = mount(<Accordion title={<DummyTitle />} accordionData="This the the default accordion" />);
      expect(wrapper.find('.DummyTitle').length).toBe(1);
    });

    it('Render the accordion as children', () => {
      const wrapper = mount(<Accordion title="Default View" >Render Accordion as Children </Accordion>);
      expect(wrapper.find('.Accordion__data').length).toBe(0);
      wrapper.find('.Accordion__heading').simulate('click');
      expect(wrapper.find('.Accordion__data').length).toBe(1);
      expect(wrapper.find('.Accordion__data').html()).toContain('Render Accordion as Children');
    });

    it('Render the accordion as open', () => {
      const wrapper = mount(<Accordion title="Default View" isAccordionOpen={true} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__data').length).toBe(1);
    });

    it('Render the accordion as open an disabled', () => {
      const wrapper = mount(<Accordion title="Default View" accordionLock={true} renderExpanded={true} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__data').length).toBe(1);
      wrapper.find('.Accordion__heading').simulate('click');
      expect(wrapper.find('.Accordion__data').length).toBe(1);
    });

    it('When the accordion is closed and locked, it should not allow the user to see the data', () => {
      const wrapper = mount(<Accordion title="Default View" accordionLock={true} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__data').length).toBe(0);
      wrapper.find('.Accordion__heading').simulate('click');
      expect(wrapper.find('.Accordion__data').length).toBe(0);
    });

    it('It should preRender the data of the accordion', () => {
      const wrapper = mount(<Accordion title="Default View" preRender={true} accordionLock={true} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__data').length).toBe(1);
    });

    it('It should render the right component', () => {
      const DummyComponent = () => {
        return (
          <span
            className="DummyComponent"
            onClick={(event: any) => {
              event.stopPropagation()
              alert('Right Component Clicked')
            }}
          >
          </span>
        )
      }
      const wrapper = mount(<Accordion title="Default View" addRightComponent={<DummyComponent />} accordionData="This the the default accordion" />);
      expect(wrapper.find('.DummyComponent').length).toBe(1);
    });

    it('It should render the left component', () => {
      const DummyComponent = () => {
        return (
          <span
            className="DummyComponent"
            onClick={(event: any) => {
              event.stopPropagation()
              alert('Right Component Clicked')
            }}
          >
          </span>
        )
      }
      const wrapper = mount(<Accordion title="Default View" addLeftComponent={<DummyComponent />} accordionData="This the the default accordion" />);
      expect(wrapper.find('.DummyComponent').length).toBe(1);
    });

    it('It should render the error text for the component', () => {
      const wrapper = mount(<Accordion title="Default View" errorMessage="This is the error message" accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__heading__errorMsg').html()).toContain('This is the error message');
    });

    it('It should render the data count of the accordion when the accordion is closed', () => {
      const wrapper = mount(<Accordion title="Default View" accordionDataCount={2} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__heading__field-count').html()).toContain('2');
      wrapper.find('.Accordion__heading').simulate('click');
      expect(wrapper.find('.Accordion__heading__field-count').debug()).toContain('');
    });

    it('It should render custom actions', () => {
      const actions: any = [
        {
          component: (
            <Tooltip content="Delete" position="top" showArrow={false}></Tooltip>
          ),
          onClick: () => {
            alert('Delete triggered')
          },
          actionClassName: "ActionListItem--warning",
        },
        {
          component: (
            <Tooltip content="Edit" position="top" showArrow={false}></Tooltip>
          ),
          onClick: () => {
            alert('Edit triggered')
          },
          actionClassName: "ActionListItem--warning",
        },
      ]
      const wrapper = mount(<Accordion title="Default View" actions={actions} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__actions').length).toBe(1);
      expect(wrapper.find('.ActionListItem--warning').length).toBe(2);
    });

    it('It should render custom actions', () => {

      const mockFunction = jest.fn();

      const actions: any = [
        {
          component: (
            <Tooltip content="Delete" position="top" showArrow={false}></Tooltip>
          ),
          onClick: mockFunction,
          actionClassName: "ActionListItem--warning",
        },
        {
          component: (
            <Tooltip content="Edit" position="top" showArrow={false}></Tooltip>
          ),
          onClick: () => {
            alert('Edit triggered')
          }
        },
      ]
      const wrapper = mount(<Accordion title="Default View" actions={actions} accordionData="This the the default accordion" />);
      wrapper.find('.ActionListItem--warning').simulate('click');
      expect(mockFunction).toBeCalledTimes(1);
    });

    it('It should set the title on hide', () => {
      const wrapper = mount(<Accordion title="Default View" setTitleOnHide="On Hide Title" accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__heading__title').html()).toContain('On Hide Title');
      wrapper.find('.Accordion__heading').simulate('click');
      expect(wrapper.find('.Accordion__heading__title').html()).toContain('Default View');
      wrapper.find('.Accordion__heading').simulate('click');
      expect(wrapper.find('.Accordion__heading__title').html()).toContain('On Hide Title');
    });

    it('It should not propagate the click on the title', () => {
      const wrapper = mount(<Accordion title="Default View" accordionTitlePropagation={false} setTitleOnHide="On Hide Title" accordionDataCount={2} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__heading__title').html()).toContain('On Hide Title');
      wrapper.find('.Accordion__heading__title').simulate('click');
      expect(wrapper.find('.Accordion__heading__title').html()).toContain('On Hide Title');
    });

    it('It should trigger the function on clicking the title', () => {
      const MockFunction = jest.fn();
      const wrapper = mount(<Accordion title="Default View" onTitleClick={MockFunction} accordionData="This the the default accordion" />);
      wrapper.find('.Accordion__heading').simulate('click');
      expect(MockFunction).toBeCalledTimes(1);
    });

    it('Should not render the chevron when noChevron is true', () => {
      const wrapper = mount(<Accordion title="Default View" noChevron={true} accordionData="This the the default accordion" />);
      expect(wrapper.find('.Accordion__heading__toggle').length).toBe(0);
    });
  })
})
