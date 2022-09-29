import React, { Component, PureComponent } from 'react'
import './SkeletonTile.css'

const defaultProps = {
  testId: "cs-skeleton-tile"
}
export type SkeletonTileProps = {
  numberOfTiles: number
  tileHeight: number
  tileWidth: number | string
  tileBottomSpace: number
  tileTopSpace: number
  tileleftSpace: number
  tileRadius?: number
  testId?: string
} & typeof defaultProps

export class SkeletonTile extends PureComponent<SkeletonTileProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      numberOfTiles,
      tileleftSpace,
      tileTopSpace,
      tileHeight,
      tileBottomSpace,
      tileWidth,
      testId
    } = this.props
    const radius = this.props.tileRadius !== undefined ? this.props.tileRadius : 7

    return (
      <React.Fragment>
        <svg
          data-test-id={testId}
          height={
            numberOfTiles * tileHeight +
            numberOfTiles * tileBottomSpace +
            numberOfTiles * tileTopSpace
          }
          width={typeof tileWidth === 'string' ? tileWidth : (tileWidth + tileleftSpace)}
          className="SkeletonTile__svg"
          fill="#EDF1F7"
        >
          {Array.from(Array(numberOfTiles)).map((_, index) => (
            <g key={index}>
              <rect
                x={tileleftSpace}
                y={index * (tileHeight + tileBottomSpace) + tileTopSpace}
                rx={radius}
                // ry="6"
                width={tileWidth}
                height={tileHeight}
              />
            </g>
          ))}
        </svg>
      </React.Fragment>
    )
  }
}

export default SkeletonTile
