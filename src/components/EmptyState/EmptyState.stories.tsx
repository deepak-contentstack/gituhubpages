import React from 'react';
import EmptyState from './EmptyState';
import DocSubData from '../../utils/components/DocSubData';
import Button from '../Button/Button';
import Icon from '../Icon2/Icon';
import notes from './EmptyState.md';

const componentDescription = "The EmptyState component lets you display a message to the user if an element cannot be displayed and states the reason why."
const usageDescription = "Empty state can be used when there is no data to show. It helps the user to provide an explanation or guidance to progress."

const emptyStateTypeArray: any = ['primary', 'secondary']
const headingTypeArray: any = ['large', 'small']
const moduleIconArray: any = ['NotificationModuleLarge', 'DiscussionModuleLarge', 'FolderModuleLarge', 'CTModuleLarge', 'TasksModuleLarge', 'PublishQueueLarge', 'ReleaseModuleLarge', 'GFModuleLarge']

export default {
    title: 'Components /EmptyState',
    component: EmptyState,
    argTypes: {
        type: {
            control: { type: 'select', options: emptyStateTypeArray },
            description: 'Lets you specify what type of EmptyState component you want to use. By default, the type is set to “primary.”',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'primary'
                }
            }
        },
        className: {
            control: 'disabled',
            description: 'Provide the class names to be appended to this prop.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                },
            },
        },
        moduleIcon: {
            control: { type: 'select', options: moduleIconArray },
            description: 'Lets you pass the name of the icon you want to display.',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                },
            }
        },
        heading: {
            control: { type: 'text' },
            description: 'Lets you set the title of a page.',
            table: {
                type: {
                    summary: 'ReactReactNode | string'
                },
                defaultValue: {
                },
            }
        },
        headingType: {
            control: { type: 'select', options: headingTypeArray },
            description: 'Describes the style of the heading of the component.',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                },
            }
        },
        description: {
            control: { type: 'text' },
            description: 'Lets you set and display the description of the page as a string or as a component.',
            table: {
                type: {
                    summary: 'ReactReactNode | string'
                },
                defaultValue: {
                },
            }
        },
        actions: {
            control: 'disabled',
            description: 'Lets you pass actions that can be passed to the EmptyState and are displayed below the description.',
            table: {
                type: {
                    summary: 'ReactReactNode'
                },
                defaultValue: {
                },
            }
        },
        footer: {
            control: 'disabled',
            description: 'Lets you pass a footer that can be passed to the EmptyState and is displayed below the actions.',
            table: {
                type: {
                    summary: 'ReactReactNode'
                },
                defaultValue: {
                },
            }
        },
        displayImage: {
            control: 'disabled',
            description: 'Gives you the provision to display or not your image. To hide your display image, set the prop to “false”.',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: true
                },
            }
        },
        img: {
            control: 'disabled',
            description: 'Lets you use a custom image.',
            table: {
                type: {
                    summary: 'ReactReactNode | undefined'
                },
                defaultValue: {
                },
            }
        },
        imgSrc: {
            control: 'disabled',
            description: 'Lets you send the src and alt values for an image.',
            table: {
                type: {
                    summary: 'object | undefined'
                },
                defaultValue: {
                },
            }
        },
        children: {
            control: 'disabled',
            description: 'Lets you pass a custom component to render as a child component inside the empty state.',
            table: {
                type: {
                    summary: 'ReactReactNode'
                },
                defaultValue: {
                    summary: null
                }
            }
        },
        width: {
            control: { type: 'text' },
            description: 'Sets the width for the emptyState.',
            table: {
                type: {
                    summary: 'string | Number',
                },
                defaultValue: {
                },
            },
        },
        testId: {
            control: 'disabled',
            description: 'An ID used for testing purposes applied as a data attribute (data-test-id).',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'cs-empty-state'
                },
            }
        },

        "Following are the prop values that you can pass under imgSrc:": {
            control: 'disabled',
            description: '',
            table: {
                type: {
                },
                defaultValue: {
                },
            },
        },
        alt: {
            control: 'disabled',
            description: 'Lets you pass an `alt` attribute to your `<img>` tag.',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                },
            }
        },
        src: {
            control: 'disabled',
            description: 'Lets you pass the `src` of the image you want to display in the `<img>` tag.',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                },
            }
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/proto/drvF57vp3VTJyiCkBSdrbk/Empty-States-%26-CTA-Loader--CS---Venus?node-id=84%3A6810&scaling=min-zoom&page-id=84%3A0',
        },
        componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
    },
};

const tableDisable = { table: { disable: true } }

export const Default = (args) => {
    const Footer = () => {
        return <Button onClick={() => { alert('clicked') }} buttonType="tertiary" > Learn More</Button >
    }
    const ChildComponent = () => {
        return <p className='mt-10' > This is the child component</p >
    }
    return <EmptyState
        type={args.type}
        heading={args.heading}
        headingType={args.headingType}
        moduleIcon={args.moduleIcon}
        description={args.description}
        actions={<><div><Button onClick={() => { alert('clicked') }} buttonType="secondary" icon="UnpublishAsset" className="mr-20">Unpublish</Button><Button onClick={() => { alert('clicked') }} buttonType="primary" icon="CheckedWhite">Add</Button></div></>}
        footer={<Footer />}
        testId='custom-emptystate'
        width={args.width}
        children={<ChildComponent />}
    // imgSrc={{ src: 'https://picsum.photos/536/354', alt: 'Error code' }}
    // displayImage={false}
    // img={<Icon icon="LoginError" />}
    />
}

Default.args = {
    type: 'primary',
    heading: 'Structure your content with Content Types!',
    description: 'Think of content type as collection of fields or a template that can be used to create similar kinds of content. You can create different content types for different elements of your project (e.g., homepage, header, navigation)',
    moduleIcon: 'WorkflowModuleLarge',
}

Default.parameters = {
    docs: {
        storyDescription: notes
    }
}

export const CustomComponent = (args) => {
    const MockHeading = () => {
        return <>No matching results found!</>
    };
    const MockDescription = () => {
        return <><div>Try changing the search query or filter to find what you are looking for.</div><Button className="mt-10" buttonType="outline">Learn More</Button></>
    };
    return <EmptyState heading={<MockHeading />} description={<MockDescription />} />
};

CustomComponent.argTypes = {
    type: tableDisable,
    heading: tableDisable,
    headingType: tableDisable,
    description: tableDisable,
    moduleIcon: tableDisable,
    img: tableDisable,
    imgSrc: tableDisable,
    src: tableDisable,
    alt: tableDisable,
    actions: tableDisable,
    footer: tableDisable,
    children: tableDisable,
    width: tableDisable,
    testId: tableDisable,
    className: tableDisable,
    displayImage: tableDisable,
    "Following are the prop values that you can pass under ImgSrcProps:": tableDisable
}

CustomComponent.parameters = {
    docs: {
        storyDescription: `Lets you add a component with a custom-sized heading and description.`
    }
}
