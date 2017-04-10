import React, { Component } from 'react'
import Slider from '../src/slider'

export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      customNavigableIndexes: [0, 1, 2],
      validationList: [() => true, () => 4 - 3, () => false]
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3x</h3></div>
          <div><h3>4x</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}
