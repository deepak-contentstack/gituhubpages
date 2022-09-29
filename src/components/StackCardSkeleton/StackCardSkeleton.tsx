import './StackCardSkeleton.css'

import React from 'react'

import SkeletonTile from '../SkeletonTile/SkeletonTile'

const StackCardSkeleton = () => {
  return (
    <div className="StackCardSkeleton">
      <div className="StackCard__heading">
        <SkeletonTile
          numberOfTiles={1}
          tileHeight={15}
          tileWidth={158}
          tileRadius={10}
          tileBottomSpace={8}
          tileTopSpace={0}
          tileleftSpace={0}
        />
      </div>
      <div className="StackCard__content">
        <div className="flex">
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={15}
            tileWidth={35}
            tileBottomSpace={0}
            tileleftSpace={0}
            tileTopSpace={0}
            tileRadius={10}
          />
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={15}
            tileWidth={44}
            tileBottomSpace={0}
            tileleftSpace={38}
            tileTopSpace={0}
            tileRadius={10}
          />
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={15}
            tileWidth={46}
            tileBottomSpace={0}
            tileleftSpace={25}
            tileTopSpace={0}
            tileRadius={10}
          />
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={15}
            tileWidth={28}
            tileBottomSpace={0}
            tileleftSpace={23}
            tileTopSpace={0}
            tileRadius={10}
          />
        </div>
      </div>
      <div className="StackCard__footer">
        <div className="flex-v-center">
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={32}
            tileWidth={32}
            tileBottomSpace={0}
            tileTopSpace={0}
            tileleftSpace={0}
            tileRadius={50}
          />
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={9}
            tileWidth={60}
            tileBottomSpace={0}
            tileleftSpace={10}
            tileTopSpace={0}
            tileRadius={10}
          />
          <SkeletonTile
            numberOfTiles={1}
            tileHeight={9}
            tileWidth={100}
            tileBottomSpace={0}
            tileleftSpace={50}
            tileTopSpace={0}
            tileRadius={10}
          />
        </div>
      </div>
    </div>
  );
};

export default StackCardSkeleton;