import React, { Component } from 'react'
import Tooltip from '../Tooltip/Tooltip';
import Icon from '../Icon2/Icon';
import './Help.css'

export type HelpProps = {
    className?: string
    text: string | React.ReactNode
    type: 'primary' | 'secondary'
    alignment?: string
    tippyProps?: any
} & typeof defaultProps

const defaultProps = {
    type: 'primary'
}

export class Help extends Component<HelpProps> {
    static defaultProps = defaultProps

    render() {
        const { className, text, alignment, type, tippyProps = {}, ...otherProps } = this.props

        return (
            <>
                {
                    type === 'secondary' ? <Tooltip {...tippyProps} content={text} variantType="light" type="secondary" position={alignment || "right"}><Icon icon="Help" className="Help" {...otherProps}></Icon></Tooltip> :
                        <Tooltip {...tippyProps} content={text} position={alignment || "right"}><Icon icon="Help" className="Help" {...otherProps}></Icon></Tooltip>
                }
            </>
        )
    }
}

export default Help
