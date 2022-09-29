import React from 'react'
import renderer from 'react-test-renderer'

import Icon from './Icon'

const iconName = {
  Assets: 'Assets',
  Content_Models: 'Content_Models',
  Dashboard: 'Dashboard',
  Entries: 'Entries',
  Releases: 'Releases',
  Tasks: 'Tasks',
}

describe('Icon', () => {
  it('render default icons', () => {
    const DefaultIcons = () => (
      <div
        style={{
          columns: '4',
          width: '800px',
        }}
      >
        {Object.keys(iconName).map((icon: any, idx: number) => {
          return (
            <div className="icon-spacing" key={idx}>
              <Icon icon={icon} size="large" />
            </div>
          )
        })}
      </div>
    )
    const tree = renderer.create(<DefaultIcons />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render Icons with different icon state', () => {
    const IconState = () => (
      <>
        <div>ICONS DEFAULT :</div>
        <div
          style={{
            columns: '4',
            width: '800px',
          }}
        >
          {Object.keys(iconName).map((icon: any, idx: number) => {
            return (
              <div className="icon-spacing" key={idx}>
                <Icon icon={icon} size="large" />
              </div>
            )
          })}
        </div>
        <div>ICONS HOVER :</div>
        <div
          style={{
            columns: '4',
            width: '800px',
          }}
        >
          {Object.keys(iconName).map((icon: any, idx: number) => {
            return (
              <div className="icon-spacing" key={idx}>
                <Icon icon={icon} hover={true} size="large" />
              </div>
            )
          })}
        </div>
        <div>ICONS PRESSED/SELECTED :</div>
        <div
          style={{
            columns: '4',
            width: '800px',
          }}
        >
          {Object.keys(iconName).map((icon: any, idx: number) => {
            return (
              <div className="icon-spacing" key={idx}>
                <Icon icon={icon} active={true} size="large" />
              </div>
            )
          })}
        </div>
      </>
    )
    const tree = renderer.create(<IconState />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render icons with different sizes', () => {
    const IconSizes = () => (
      <div>
        <div>
          <Icon icon="Releases" size="tiny" /> Tiny
        </div>
        <div>
          <Icon icon="Releases" size="small" /> Small
        </div>
        <div>
          <Icon icon="Releases" size="large" /> Large
        </div>
      </div>
    )
    const tree = renderer.create(<IconSizes />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render icon with fill property', () => {
    const IconWithFillProperty = () => (
      <div>
        <div>
          <Icon icon="Releases" size="large" />
          Default Icon
        </div>
        <div>
          <Icon icon="Releases" size="large" fill="red" />
          Icon with fill property
        </div>
      </div>
    )
    const tree = renderer.create(<IconWithFillProperty />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render icon with stroke property', () => {
    const IconWithStrokeProperty = () => (
      <div>
        <div>
          <Icon icon="Dropdown" size="large" />
          Default Icon
        </div>
        <div>
          <Icon icon="Dropdown" size="large" stroke="red" />
          Icon with stroke property
        </div>
      </div>
    )
    const tree = renderer.create(<IconWithStrokeProperty />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render icon with height and width property', () => {
    const IconWithHeightAndWidthProperty = () => (
      <div>
        <div>
          <Icon icon="Dropdown" size="large" />
          Default Icon
        </div>
        <div>
          <Icon icon="Dropdown" height="100" width="100" />
          Icon with height and width property
        </div>
      </div>
    )
    const tree = renderer.create(<IconWithHeightAndWidthProperty />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render Icons with data', () => {
    const dataAsText = 'data as string'
    const DataAsMarkup = <>data as markup</>
    const IconWithData = () => (
      <>
        <div className="flex IconStoriesWrapper">
          <Icon icon="Releases" data={dataAsText} />
        </div>
        <div className="flex IconStoriesWrapper">
          <Icon icon="Releases" data={DataAsMarkup} />
        </div>
      </>
    )
    const tree = renderer.create(<IconWithData />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render Icons with data and shadow', () => {
    const dataAsText = 'data as string'
    const DataAsMarkup = <>data as markup</>
    const IconWithShadowAndData = () => (
      <>
        <div className="">
          <Icon icon="SettingsOutline" hover={true} data={dataAsText} shadow='medium' />
        </div>
        <div className="">
          <Icon icon="SettingsOutline" hover={true} data={DataAsMarkup} shadow='medium' />
        </div>
      </>
    )
    const tree = renderer.create(<IconWithShadowAndData />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('render Icons with active state prop', () => {
  //   const IconWithActive = () => (
  //     <>
  //       <div className="">
  //         <Icon icon='Preferences' active={true} hover={true} size="large" />
  //       </div>
  //     </>
  //   )
  //   const tree = renderer.create(<IconWithActive />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})
