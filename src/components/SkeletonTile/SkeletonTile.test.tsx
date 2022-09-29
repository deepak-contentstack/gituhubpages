import React from 'react'
import renderer from 'react-test-renderer'

import SkeletonTile from './SkeletonTile'

describe('SkeletonTile', () => {
  it('render SkelttonTile Component', () => {
    const DefaultDropdown = () => {
      return (
        <SkeletonTile
          numberOfTiles={1}
          tileHeight={15}
          tileWidth={200}
          tileBottomSpace={7}
          tileTopSpace={0}
          tileleftSpace={0}
        />
      )
    }
    const tree = renderer.create(<DefaultDropdown />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
