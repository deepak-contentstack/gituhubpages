import React from 'react'

import ListItem from './ListItem'
import notes from './ListItem.md'

const iconArray: any = ['NewTab', 'InternalLink', 'Reset', 'ResetWhite'];

export default {
    title: 'Components / ListItem',
    component: ListItem,
    argTypes: {
        content: {
            control: { type: 'text' },
            description: 'Provide a content title for the list item',
            table: {
                type: {
                    summary: 'text'
                },
                defaultValue: {
                    summary: 'InternalLink'
                }
            }
        },
        description: {
            control: { type: 'text' },
            description: 'Provide a description for the list item',
            table: {
                type: {
                    summary: 'text'
                }
            }
        },
        icon: {
            control: { type: 'select', options: iconArray },
            description: 'Determine the type of button you want to use',
            table: {
                type: {
                    summary: 'select'
                },
                defaultValue: {
                    summary: 'InternalLink'
                }
            }
        },
        style: {
            control: { type: 'disabled' },
            description: 'Style to the list item',
            table: {
                type: {
                    summary: 'text'
                }
            }
        },
        className: {
            control: { type: 'disabled' },
            description: 'ClassName to the list item',
            table: {
                type: {
                    summary: 'text'
                }
            }
        },
        testId: {
            control: { type: 'disabled' },
            description: 'TestId to the list item',
            table: {
                type: {
                    summary: 'text'
                }
            }
        }
    },
    parameters: {
        componentSubtitle:
            'ListItem is a component that can be used to display a list item in the list of components.',
        notes: { notes },
    },
}

export const Default = (args) => {
    return (
        <>
            <ListItem
                content={args.content}
                description={args.description}
                onClick={() => {
                    alert("click on first list item component")
                }}
                icon={args.icon}
            />
        </>
    )
}

Default.args = {
    content: 'Title for list item',
    description: 'Description for the list item',
    icon: 'InternalLink',
};