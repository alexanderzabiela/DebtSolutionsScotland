import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import Wrapper from './Wrapper';
import Gallery from './Gallery';
import CarouselImage from './CarouselImage';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';

class ClientGallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      currentImage: 0,
    };
    this.document = {};
    this.generateGallery = this.generateGallery.bind(this);
    this.generateButtons = this.generateButtons.bind(this);
  }

  componentWillMount() {
    this.generateGallery();
    this.document = window.document;
  }

  componentDidMount() {
    this.countdown = setInterval(() => {
      this.carouselImage();
    }, 3000);
  }

  componentWillUnmount() {
    this.stopCarousel();
  }

  stopCarousel() {
    clearInterval(this.countdown);
  }

  imagePicker(index) {
    this.stopCarousel();
    this.changeSelectedButton(index);
    const galleryImages = this.document.getElementById('gallery').children;
    const galleryLength = this.state.gallery.length - 1;

    for (let i = 0; i <= galleryLength; i += 1) {
      if (i === index) {
        galleryImages[i].style.display = 'block';
        this.setState({ currentImage: index });
      } else galleryImages[i].style.display = 'none';
    }
  }

  carouselImage() {
    const galleryImages = this.document.getElementById('gallery').children;
    const galleryLength = this.state.gallery.length - 1;
    let currentImage = this.state.currentImage;

    if (galleryLength === currentImage) {
      galleryImages[currentImage].style.display = 'none';
      currentImage = 0;
      this.setState({ currentImage });
      this.changeSelectedButton();
      galleryImages[currentImage].style.display = 'block';
    } else {
      galleryImages[currentImage].style.display = 'none';
      currentImage += 1;
      this.setState({ currentImage });
      this.changeSelectedButton();
      galleryImages[currentImage].style.display = 'block';
    }
  }

  generateGallery() {
    const galleryImages = this.props.galleryImages;
    const galleryLength = galleryImages.length;
    const gallery = [];
    const key = 'carouselImage';

    if (this.props.galleryVideos) {
      for (let i = 0; i < this.props.galleryVideos.length; i += 1) {
        gallery.push(<CarouselImage key={this.props.galleryVideos[i].source}>
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            controls={true}
            url={this.props.galleryVideos[i].source}
            onBuffer={() => this.stopCarousel()}
          >
          </ReactPlayer>
        </CarouselImage>);
      }
    }

    for (let i = 0; i < galleryLength; i += 1) {
      gallery.push(<CarouselImage key={key + i} image={galleryImages[i]}></CarouselImage>);
    }

    this.setState({ gallery });
  }

  generateButtons() {
    const galleryLength = this.state.gallery.length;
    const buttons = [];
    const key = 'carouselButtons';
    for (let i = 0; i < galleryLength; i += 1) {
      const dynamic = {
        responsive: '',
        tablet: '',
        desktop: '',
      };
      buttons.push(<Button dynamic={dynamic} key={key + i} onClick={() => this.imagePicker(i)}></Button>);
    }
    return buttons;
  }

  changeSelectedButton(index = this.state.currentImage) {
    const buttonWrapper = this.document.getElementById('buttonWrapper').children;
    const wrapperLength = buttonWrapper.length;

    for (let i = 0; i < wrapperLength; i += 1) {
      if (i === index) buttonWrapper[i].style.backgroundColor = '#ff682c';
      else buttonWrapper[i].style.backgroundColor = '#a4a4a4';
    }
  }

  render() {
    return (
      <Wrapper>
        <Gallery id={'gallery'}>
          {this.state.gallery}
        </Gallery>
        <ButtonWrapper id={'buttonWrapper'}>
          {this.generateButtons()}
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

ClientGallery.propTypes = {
  galleryImages: PropTypes.array,
  galleryVideos: PropTypes.array,
};

export default ClientGallery;
