import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import ButtonGroup from './ButtonGroup'
import Button from '../Button'

describe('ButtonGroup', () => {
it('renders ButtonGroup component', () => {
    const output = renderer.create(
    <ButtonGroup>
    <Button  buttonType="light">Cancel</Button>
    <Button  buttonType="secondary" icon="UnpublishAsset">Unpublish</Button>
    <Button  buttonType="primary" icon="PublishWhite">Publish</Button>
    </ButtonGroup>
    ).toJSON();

    expect(output).toMatchSnapshot();
});

it('ButtonGroup with classname', () => {
    const element = mount(
    <ButtonGroup testId="custom-test-id" className="test-classname">
    <Button  buttonType="light">Cancel</Button>
    <Button  buttonType="secondary" icon="UnpublishAsset">Unpublish</Button>
    <Button  buttonType="primary" icon="PublishWhite">Publish</Button>  
    </ButtonGroup>);
    expect(element.find('[data-test-id="custom-test-id"]').props().className.includes('test-classname')).toBe(true);
});

it('It should render a ButtonGroup with custom style', () => {
const CustomStyle = () => {
    return (
    <ButtonGroup style={{ color: 'red' }}>
    <Button  buttonType="light">Cancel</Button>
    <Button  buttonType="secondary" icon="UnpublishAsset">Unpublish</Button>
    <Button  buttonType="primary" icon="PublishWhite">Publish</Button>
    </ButtonGroup>
    )
};
const tree = renderer.create(<CustomStyle />).toJSON()
expect(tree).toMatchSnapshot();
});

})