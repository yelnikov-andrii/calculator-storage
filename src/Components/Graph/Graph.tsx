import React from 'react';
import { GraphItem } from './GraphItem';

export const Graph: React.FC = () => {
  return (
    <div className="container">
      <div className='graph'>
      <GraphItem
        title="backblaze"
        icon="https://www.lifewire.com/thmb/EMsZID19auVGkKZp_ss8iG2anYQ=/2100x1400/filters:fill(auto,1)/backblaze-stacked-horizontal-logo-56a6fa7e5f9b58b7d0e5d008.png"
        color='red'
        minPrice={7}
        storageCoef={0.005}
        transferCoef={0.01}
        radio={false}
      />
      <GraphItem
        title="bunny"
        icon="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1fff394b86d3cd58b2e72b3d467cf332/bunny-net.png"
        color='orange'
        minPrice={0}
        transferCoef={0.01}
        radio={true}
        radioValueOne="HDD"
        radioValueTwo="SSD"
        maxPrice={10}
        storageCoefArr={[0.01, 0.02]}
      />
      <GraphItem
        title="scaleway"
        icon="https://th.bing.com/th/id/OIP.i3EF14L8SGHuX5FOcbX9-AHaCf?pid=ImgDet&rs=1"
        color='#f804cf'
        minPrice={0}
        storageCoef={0.03}
        transferCoef={0.02}
        radio={true}
        radioValueOne="Multi"
        radioValueTwo="Single"
        forFree={75}
        storageCoefArr={[0.06, 0.03]}
      />
      <GraphItem
        title="vultr"
        icon="https://th.bing.com/th/id/R.14b4b0bac637569475933e3359ec1d40?rik=ylsIjm7VNoknsw&pid=ImgRaw&r=0"
        color='blue'
        minPrice={5}
        storageCoef={0.01}
        transferCoef={0.01}
        radio={false}
      />
    </div>
    </div>
  );
};

