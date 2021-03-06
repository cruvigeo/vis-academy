import React, {Component} from 'react';
import DeckGL from 'deck.gl';
import MyScatterplotLayer from './my-scatterplot-layer';

export default class DeckGLOverlay extends Component {

  render() {
    if (!this.props.data) {
      return null;
    }

    const layers = [
      new MyScatterplotLayer({
        id: 'pickup',
        data: this.props.data,
        getPosition: d => [d.pickup_longitude, d.pickup_latitude],
        getColor: d => [0, 128, 255],
        radiusScale: 40
      })
    ];

    return (
      <DeckGL {...this.props.viewport} layers={layers} />
    );
  }
}
