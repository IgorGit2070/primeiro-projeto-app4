// rafce
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const MyCarousel = () => {
  return (
    // <div>
    //     <h3>MyCarousel</h3>
    // </div>
    <div>
        <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src='https://th.bing.com/th/id/OIP.NkntxOf5Voizzrxl11YqGgHaEK?rs=1&pid=ImgDetMain' width={1000} height={600}/>
        <Carousel.Caption>
          <h3>Neymar</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src='https://cdn.pixabay.com/photo/2023/06/30/20/23/ai-generated-8099000_1280.png' width={1000} height={600}/>
        <Carousel.Caption>
          <h3>Messi</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src='https://cdn.pixabay.com/photo/2023/05/18/13/40/cristiano-ronaldo-8002334_1280.png' width={1000} height={600}/>
        <Carousel.Caption>
          <h3>Cristiano Ronaldo</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarousel