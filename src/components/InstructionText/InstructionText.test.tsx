import React from 'react';
import { storiesOf } from '@storybook/react';
import renderer from 'react-test-renderer'
import InstructionText from './InstructionText';

describe('InstructionText', () => {
    it('render default InstructionText', () => {
        const DefaultInstructionText = () => {
            return (
                <InstructionText>InstructionText text here</InstructionText>
            )
        }
        const tree = renderer.create(<DefaultInstructionText />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('renders the component with an additional class name', () => {
        const DefaultInstructionText = () => {
            return (
                <InstructionText className="instruction-text">InstructionText text here</InstructionText>
            )
        }
        const tree = renderer.create(<DefaultInstructionText />).toJSON();
        expect(tree.props.className.includes("instruction-text")).toBe(true);
    })

    it('renders the component with an additional style', () => {
        const DefaultInstructionText = () => {
            return (
                <InstructionText style={{ color: 'red' }}>InstructionText text here</InstructionText>
            )
        }
        const tree = renderer.create(<DefaultInstructionText />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})