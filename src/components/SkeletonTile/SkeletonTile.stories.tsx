import React, { useEffect, useState } from 'react'
import DocSubData from '../../utils/components/DocSubData';
import SkeletonTile from './SkeletonTile'
// @ts-ignore
import notes from './SkeletonTile.md'

const componentDescription = <div>
  <p>The SkeletonTile effect is a perceived loading state for components on a page and is a result of the combination of CSS and JavaScript.</p>
  <p>Skeleton screens are perceived as being shorter in duration when compared against a blank screen and/or a loader/spinner.</p>
</div>
const usageDescription = <ul>
  <li>It helps you drive the user’s attention to progress instead of waiting time.</li>
  <li>It’s useful for creating an illusion of short page load times in apps and on the web.</li>
</ul>

export default {
  title: 'Components / SkeletonTile',
  component: SkeletonTile,
  argTypes: {
    numberOfTiles: {
      control: { type: 'number' },
      description: `Lets you provide the number of tiles to be displayed for Skeleton`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: true
      }
    },
    tileHeight: {
      control: { type: 'number' },
      description: `Determines the height for each tile`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: true
      }
    },
    tileWidth: {
      control: { type: 'number' },
      description: `Determines the width for each tile`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: true
      }
    },
    tileBottomSpace: {
      control: { type: 'number' },
      description: `Adds the margin space to the bottom of each tiles`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: true
      }
    },
    tileTopSpace: {
      control: { type: 'number' },
      description: `Adds the margin space to the top of each tiles`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: true
      }
    },
    tileleftSpace: {
      control: { type: 'number' },
      description: `Add margin space to the left of each tiles.`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: true
      }
    },
    tileRadius: {
      control: { type: 'number' },
      description: `Defines the radius of the tile's corners`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: false
      }
    }
  },
  parameters: {
    componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=64%3A8&scaling=min-zoom',
    },
  },
}
const tableDisable = { table: { disable: true } }

export const Default = (arg) => {
  return (
    <SkeletonTile
      numberOfTiles={arg.numberOfTiles}
      tileHeight={arg.tileHeight}
      tileWidth={arg.tileWidth}
      tileBottomSpace={arg.tileBottomSpace}
      tileTopSpace={arg.tileTopSpace}
      tileleftSpace={arg.tileleftSpace}
      tileRadius={arg.tileRadius}
    />
  )
}
Default.args = { numberOfTiles: 1, tileHeight: 15, tileWidth: 200, tileBottomSpace: 7, tileTopSpace: 0, tileleftSpace: 0, tileRadius: 0 }
Default.argTypes = {
  testId: tableDisable
}

export const CustomSkeleton = (arg) => {
  return (
    <div>
      <div>
        <SkeletonTile
          numberOfTiles={1}
          tileHeight={15}
          tileWidth={305}
          tileBottomSpace={7}
          tileTopSpace={5}
          tileleftSpace={5}
        />
      </div>
      <div className="flex">
        <SkeletonTile
          numberOfTiles={1}
          tileHeight={90}
          tileWidth={100}
          tileBottomSpace={10}
          tileTopSpace={0}
          tileleftSpace={5}
        />
        <SkeletonTile
          numberOfTiles={4}
          tileHeight={15}
          tileWidth={200}
          tileBottomSpace={10}
          tileTopSpace={0}
          tileleftSpace={5}
        />
      </div>
    </div>
  )
}
CustomSkeleton.parameters = {
  docs: {
    storyDescription: "Lets you create your own custom skeleton loader using the SkeletonTile component."
  }
}
CustomSkeleton.argTypes = {
  numberOfTiles: tableDisable,
  tileHeight: tableDisable,
  tileWidth: tableDisable,
  tileBottomSpace: tableDisable,
  tileTopSpace: tableDisable,
  tileleftSpace: tableDisable,
  tileRadius: tableDisable,
  testId: tableDisable
}

export const ImageSkeleton = (arg) => {
  return (
    <SkeletonTile
      numberOfTiles={1}
      tileHeight={300}
      tileWidth={300}
      tileBottomSpace={0}
      tileTopSpace={10}
      tileleftSpace={10}
      tileRadius={10}
    />
  )
}
ImageSkeleton.parameters = {
  docs: {
    storyDescription: "Lets you add a Skeleton loader example for Image or video."
  }
}
ImageSkeleton.argTypes = {
  numberOfTiles: tableDisable,
  tileHeight: tableDisable,
  tileWidth: tableDisable,
  tileBottomSpace: tableDisable,
  tileTopSpace: tableDisable,
  tileleftSpace: tableDisable,
  tileRadius: tableDisable,
  testId: tableDisable
}