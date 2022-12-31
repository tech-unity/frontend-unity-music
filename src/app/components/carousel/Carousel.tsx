import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import { Carousel } from 'antd';
import styled from 'styled-components';

interface CustomCarouselProps {
  src: string[];
}

export default function CustomCarousel(props: CustomCarouselProps) {
  if (!props.src || props.src.length === 0)
    throw new Error('Não foi possível carregar as imagens');

  return (
    <Carousel
      arrows
      nextArrow={<SlickArrowRight />}
      prevArrow={<SlickArrowLeft />}
    >
      {props.src.map((src, i) => (
        <Image src={src} key={i}></Image>
      ))}
    </Carousel>
  );
}

const Image = styled.img`
  height: 320px;
  overflow: hidden;
`;

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <Icon
    path={mdiChevronLeft}
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden='true'
    aria-disabled={currentSlide === 0 ? true : false}
    type='button'
    style={{ color: '#fff' }}
  >
    Previous
  </Icon>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <Icon
    path={mdiChevronRight}
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden='true'
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type='button'
    style={{ color: '#fff' }}
  >
    Next
  </Icon>
);
