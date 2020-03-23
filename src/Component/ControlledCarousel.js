import React from 'react';
import Carousel from 'nuka-carousel';
 class ControlledCarousel extends React.Component {

  
  
  render() {
    return (
      <Carousel autoplay={true} >
      <img src={require('./img/image1.jpg')}  alt="img1" />
      <img src={require('./img/image1.jpg')}  alt="img1" />
      <img src={require('./img/image1.jpg')}  alt="img1" />
      <img src={require('./img/image1.jpg')}  alt="img1" />
    

      </Carousel>
    );
  }

}
export default ControlledCarousel;
