import React from 'react';
import cn from 'classnames';
// import Icon from '../Icon2/Icon';
import './EmptyState.css';
import withDeprecatedProp from '../../utils/hooks/depricatedPropsHoc';


type imgSrcProps = {
  /**
  * Lets you pass an “alt” attribute to your <img> tag.
  */
  alt?: string
  /**
  * Lets you pass the src of the image you want to display in the <img> tag.
  */
  src: string
};

export type emptyStateProps = {
  /**
  * Lets you specify what type of EmptyState component you want to use. By default, the type is set to “primary.”
  */
  type?: 'primary' | 'secondary' | 'tertiary'
  /**
  * Provide the class names to be appended to this prop.
  */
  className?: string
  /**
  * Lets you pass the name of the icon you want to display.
  */
  moduleIcon?: string
  /**
  * Lets you set the title of a page.
  */
  heading?: string | React.ReactNode
  /**
  * Describes the style of the heading of the component.
  */
  headingType?: 'large' | 'small',
  /**
  * Lets you set and display the description of the page as a string or as a component.
  */
  description?: string | React.ReactNode
  /**
  * Lets you pass actions that can be passed to the EmptyState and are displayed below the description.
  */
  actions?: React.ReactNode
  /**
  * Lets you pass a footer that can be passed to the EmptyState and is displayed below the actions.
  */
  footer?: React.ReactNode
  /**
  * Gives you the provision to display or not your image. To hide your display image, set the prop to “false”.
  */
  displayImage?: boolean
  /**
  * Lets you use a custom image.
  */
  img?: React.ReactNode
  /**
  * Lets you send the src and alt values for an image.
  */
  imgSrc?: imgSrcProps
  /**
  * Lets you pass a custom component to render as a child component inside the empty state.
  */
  children?: React.ReactNode
  /**
  * Lets you determine for which page you need to use the emptyState.
  */
  forPage?: 'card' | 'list' | 'fullPage' | 'empty'
  /**
  * Sets the width for the emptyState.
  */
  width?: number | string
  /**
  * An ID used for testing purposes applied as a data attribute (data-test-id).
  */
  testId?: string
};

type customImageProps = {
  /**
  * Lets you use a custom image.
  */
  img: React.ReactNode | undefined
  /**
  * Lets you send the src and alt values for an image.
  */
  imgSrc: imgSrcProps | undefined
};

const CustomImage: React.FunctionComponent<customImageProps> = props => {
  const { img, imgSrc } = props;
  const src = imgSrc !== undefined ? imgSrc.src : undefined;
  const alt = imgSrc !== undefined ? imgSrc.alt : undefined;

  return (
    img !== undefined ? <>{img}</> : <img src={src} alt={alt} className="Error-image" />
  );
};

const EmptyState = (props: emptyStateProps) => {
  const {
    heading,
    description,
    img,
    imgSrc,
    className,
    type,
    moduleIcon,
    forPage,
    actions,
    headingType,
    footer,
    width,
    testId
  } = props;

  const displayImage = props.displayImage;
  const children = props.children;
  const classNames = cn('EmptyState', className, [`EmptyState--${type}`]);
  const wrapperClassNames = cn('EmptyStateWrapper flex-center', forPage ? `EmptyStateWrapper--${forPage}` : '')
  const customStyles: any = {};

  if (width) {
    customStyles.maxWidth = width;
  }

  return (
    <div className={wrapperClassNames} data-test-id={testId}>
      <div className={classNames} style={customStyles}>
        {displayImage === true ?
          img !== undefined || imgSrc !== undefined ? <div className="EmptyState__image"><CustomImage img={img} imgSrc={imgSrc} /> </div> : null
          : null
        }
        {/* {moduleIcon !== undefined ? <Icon icon={moduleIcon} /> : null} */}
        {heading !== undefined ? <div className={`EmptyState__title ${headingType ? 'EmptyState__title--' + headingType : ''}`}>{props.heading}</div> : null}
        {description !== undefined ? <div className="EmptyState__description">{props.description}</div> : null}
        {actions !== undefined ? <div className="EmptyState__actions">{props.actions}</div> : null}
        {footer !== undefined ? <div className="EmptyState__footer">{props.footer}</div> : null}
        {children}
      </div >
    </div>
  );
};

EmptyState.defaultProps = {
  displayImage: true,
  children: null,
  type: 'primary',
  testId: 'cs-empty-state'
} as Partial<emptyStateProps>;

export default withDeprecatedProp(EmptyState, { 'subType': 'headingType' })