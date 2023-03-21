import { defaultCarouselSettings } from "@/constants/sharedData";
import Carousel from "@/patterns/Carousel";
import SimpleCard from "@/patterns/SimpleCard";
import { Box, Heading } from "@chakra-ui/react";

const SimpleCardCarousel = ({ cards, settings, ...rest }) => {
  const getSlides = () => {
    let slides = cards.map((card, index) => {
      return <SimpleCard index={index} {...card} />;
    });
    return slides;
  };
  return <Carousel slides={getSlides()} {...rest} />;
};
export default SimpleCardCarousel;
