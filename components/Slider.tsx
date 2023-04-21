import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  const imageWidth = 1200;
  const imageHeight = 600;

  return (
    <section className='relative shadow-2xl max-w-screen-2xl mx-auto'>
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src='/images/slider-1.jpeg'
            alt='Slider 1'
            width={imageWidth}
            height={imageHeight}
            loading='eager'
          />
        </div>
        <div>
          <img
            src='/images/slider-2.jpeg'
            alt='Slider 2'
            width={imageWidth}
            height={imageHeight}
            loading='eager'
          />
        </div>
        <div>
          <img
            src='/images/slider-3.jpeg'
            alt='Slider 3'
            width={imageWidth}
            height={imageHeight}
            loading='eager'
          />
        </div>
        <div>
          <img
            src='/images/slider-4.jpeg'
            alt='Slider 4'
            width={imageWidth}
            height={imageHeight}
            loading='eager'
          />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
