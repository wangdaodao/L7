import { ILayer, ISubLayerInitOptions } from '@antv/l7-core';
import Source from '@antv/l7-source';
import { SourceTile } from '@antv/l7-utils';
import { ITileFactoryOptions } from '../interface';
import TileFactory from './base';
export default class VectorTile extends TileFactory {
  public parentLayer: ILayer;

  constructor(option: ITileFactoryOptions) {
    super(option);
    this.parentLayer = option.parent;
  }

  public createTile(tile: SourceTile, initOptions: ISubLayerInitOptions) {
    const { features, vectorTileLayer, source } = this.getFeatureData(
      tile,
      initOptions,
    );
    if (features.length === 0) {
      return {
        layers: [],
      };
    }    

    const layer = this.createLayer({
      tile,
      initOptions,
      vectorTileLayer,
      source: source as Source,
    });
    return {
      layers: [layer],
    };
  }
}