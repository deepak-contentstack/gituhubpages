import React from 'react'
import DocSubData from '../../../utils/components/DocSubData'
import Paragraph from '../Paragraph/Paragraph'
import notes from './Paragraph.md'

const componentDescription = 'Paragraphs let you add regular text.'

const usageDescription = 'Paragraphs let you add descriptive text that relate content to topics. They should not be too long or too short.'

export default {
    title: 'Components / Typography/Paragraph',
    component: Paragraph,
    argTypes: {
        className: {
            control: 'disabled'
        },
        tagName: {
            control: 'disabled'
        },
    },
    parameters: {
        componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=22%3A2',
        }
    },

}

export const Default = (args) => (
    <Paragraph tagName='p' text={args.text} />
)
Default.args = {
    text: 'Paragraph text'
}
