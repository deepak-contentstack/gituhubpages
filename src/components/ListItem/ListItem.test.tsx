import React from 'react'

import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import ListItem from './ListItem'

const defaultProps = {
    content: "list item content",
    description: "list item description",
    onClick: () => { alert("clicked!") },
    style: { color: "#000" },
    className: "custom-class",
    testId: "data-testId",
}

describe('List Item Component', () => {
    it('renders the component with content prop', () => {
        const output = mount(
            <ListItem
                testId={defaultProps.testId}
                content={defaultProps.content}
            />
        );
        expect(toJson(output)).toMatchSnapshot();
    });

    it('renders the component with description prop', () => {
        const output = mount(
            <ListItem
                testId={defaultProps.testId}
                content={defaultProps.content}
                description={defaultProps.description}
            />
        );
        expect(toJson(output)).toMatchSnapshot();
    });

    it('renders the component with onClick prop', () => {
        const output = mount(
            <ListItem
                testId={defaultProps.testId}
                content={defaultProps.content}
                description={defaultProps.description}
                onClick={defaultProps.onClick}
            />
        );
        expect(toJson(output)).toMatchSnapshot();
    });

    it('renders the component with style prop', () => {
        const output = mount(
            <ListItem
                testId={defaultProps.testId}
                content={defaultProps.content}
                description={defaultProps.description}
                onClick={defaultProps.onClick}
                style={defaultProps.style}
            />
        );
        expect(toJson(output)).toMatchSnapshot();
    });

    it('renders the component with className prop', () => {
        const output = mount(
            <ListItem
                testId={defaultProps.testId}
                content={defaultProps.content}
                description={defaultProps.description}
                onClick={defaultProps.onClick}
                style={defaultProps.style}
                className={defaultProps.className}
            />
        );
        expect(toJson(output)).toMatchSnapshot();
    });

    it('renders the component with icon prop', () => {
        const output = mount(
            <ListItem
                testId={defaultProps.testId}
                content={defaultProps.content}
                description={defaultProps.description}
                onClick={defaultProps.onClick}
                style={defaultProps.style}
                className={defaultProps.className}
            //icon={"NewTab"}
            />
        );
        expect(toJson(output)).toMatchSnapshot();
    });
})