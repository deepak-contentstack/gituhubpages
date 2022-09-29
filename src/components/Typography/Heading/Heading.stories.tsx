import React from 'react'
import DocSubData from '../../../utils/components/DocSubData'
import Heading from '../Heading/Heading'
import notes from './Heading.md'

const tagArray: any = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

const componentDescription = 'The Heading component allows users to apply appropriate heading styles in their page/content.'

const UsageDescription = () => {
    return (
        <>
            <p className="usage-description">Headings help users to read and understand text. They act as signposts for the readers and make it easier for them to figure out what a post or page is about. It also defines which parts of your content are important and shows how they're interconnected.</p>
            <p className="usage-description">H1-H6 are heading tags with varying range of height and font-weight that you can use as per your requirement.</p>
        </>)
}

export default {
    title: 'Components / Typography/Heading',
    component: Heading,
    argTypes: {
        tagName: {
            control: {
                type: "select",
                options: tagArray
            }
        },
        className: {
            control: 'disabled'
        },
    },
    parameters: {
        componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={<UsageDescription />} />,
        design: {
            type: 'figma',
            url: 'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=451%3A0&scaling=min-zoom',
        }
    },
}

export const Default = (args) => {
    return (
        <>
            <Heading tagName={args.tagName} text={args.text} />
            <br />
            <Heading tagName="h2" text='Heading 2' />
            <br />
            <Heading tagName="h3" text='Heading 3' />
            <br />
            <Heading tagName="h4" text='Heading 4' />
            <br />
            <Heading tagName="h5" text='Heading 5' />
            <br />
            <Heading tagName="h6" text='Heading 6' />
        </>
    )
}
Default.args = {
    text: 'Heading 1',
    tagName: 'H1'
}

