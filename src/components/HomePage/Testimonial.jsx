import {
  defaultCarouselSettings,
  TESTIMONIAL_DATA,
} from "@/constants/sharedData";
import TestimonialCard from "@/patterns/TestimonialCard";
import SimpleCardCarousel from "@/patterns/SimpleCardCarousel";
import { Box, Heading } from "@chakra-ui/react";
import Carousel from "@/patterns/Carousel";

const Testimonial = ({ title }) => {
  const getSlides = () => {
    let slides = TESTIMONIAL_DATA.map((card, index) => {
      return <TestimonialCard index={index} children={card} />;
    });
    return slides;
  };
  return (
    <Box p="5" w="100%">
      <Heading my="2em">{title}</Heading>

      <Carousel slides={getSlides()} settings={defaultCarouselSettings} />
    </Box>
  );
};
export default Testimonial;
