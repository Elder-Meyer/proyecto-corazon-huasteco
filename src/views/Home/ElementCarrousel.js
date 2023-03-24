import React, { Component } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItemStyled,  CaptionText} from './Inicio.elements';

const items = [  
  {
    src: require('../../assets/img/inicio/Foto-centro.jpg'),
    altText: 'Huejutla',
    caption: 'Centro'
  },
  {
    src: require('../../assets/img/inicio/catedral.jpg'),
    altText: 'Huejutla',
    caption: 'Catedral'
  },
  // {
  //   src: require('../../assets/img/inicio/pintura.jpg'),
  //   altText: 'imagen6',
  //   caption: 'Barrio Arriba'
  // },
];

export class ElementCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItemStyled
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CaptionText captionText={item.altText} captionHeader={item.caption} />
        </CarouselItemStyled>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}



