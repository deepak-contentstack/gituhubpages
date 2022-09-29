import { mount } from 'enzyme/build'
import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button/Button'
import EmptyState from './EmptyState'

describe('Test cases for EmptyState Component', () => {
    it('renders the default component', () => {
        const output = mount(<EmptyState heading={'Heading'} description={'Error occured'} testId="custom-test-id" />)
        expect(output.find('[data-test-id="custom-test-id"]').length).toBe(1);
    });
    it('renders the Custom Image', () => {
        const output = mount(<EmptyState img={
            <img src='https://picsum.photos/536/354' alt='Error 404' height="250px" width="340px" />}
            heading={'Heading'}
            description={'Error occured'} />);
        expect(output.find('.EmptyState__image').length).toBe(1);
    });
    it('renders the No Image', () => {
        const output = renderer.create(<EmptyState displayImage={false} heading={'No Image'} description={'This error will have no image'} />).toJSON();
        expect(output).toMatchSnapshot();
    });
    it('renders the Component', () => {
        const MockHeading = () => {
            return <span>Mock Heading</span>
        }
        const MockDescription = () => {
            return <span>Mock Description</span>
        }
        const output = renderer.create(<EmptyState heading={<MockHeading />} description={<MockDescription />} />).toJSON();
        expect(output).toMatchSnapshot();
    });
    it('renders the component with width', () => {
        const output = mount(<EmptyState heading={'No Image'} description={'Error occurred'} width='400px' />);
        expect(output.find('.EmptyState').get(0).props.style).toHaveProperty(
            'maxWidth',
            '400px',
        );
    });
    it('renders the component with headingType props', () => {
        const output = mount(<EmptyState heading={'No Image'} description={'Error occurred'} headingType="small" />);
        expect(output.find('.EmptyState__title--small').length).toBe(1);
    });
    it('renders the component with moduleIcon', () => {
        const output = mount(<EmptyState heading={'No Image'} description={'Error occurred'} moduleIcon="WorkflowModuleLarge" />);
        expect(output.find('[moduleIcon="WorkflowModuleLarge"]').debug()).toContain('WorkflowModuleLarge')
    });
    it('renders the component with footer', () => {
        const Footer = () => {
            return <p>Dummy text</p>
        }
        const output = mount(<EmptyState heading={'No Image'} description={'Error occurred'} footer={<Footer />} />);
        expect(output.find('.EmptyState__footer').length).toBe(1);
    });
    it('renders the component with actions', () => {
        const Actions = () => {
            return <Button>Add</Button>
        }
        const output = mount(<EmptyState heading={'No Image'} description={'Error occurred'} actions={<Actions />} />);
        expect(output.find('.EmptyState__actions').length).toBe(1);
    });
    it('renders the component forPage props', () => {
        const output = mount(<EmptyState heading={'No Image'} description={'Error occurred'} forPage="empty" />);
        expect(output.find('[forPage="empty"]').debug()).toContain('empty')
    });
    it('renders the Component using src props', () => {
        const output = mount(<EmptyState imgSrc={{ src: 'https://picsum.photos/536/354' }} heading={'Heading'} description={'Error occured'} />);
        expect(output.find('[src="https://picsum.photos/536/354"]').debug()).toContain
            ('https://picsum.photos/536/354')
    });
    it('renders the Component using alt props', () => {
        const output = mount(<EmptyState imgSrc={{ src: 'https://picsum.photos/536/354', alt: 'alternative text' }} heading={'Heading'} description={'Error occured'} />);
        expect(output.find('[alt="alternative text"]').debug()).toContain('alternative text')
    });
})
