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
    <Box px="5" my="1em" poverflow={"hidden"} w="100%">
      <Heading mb="1em">{title}</Heading>

      <Carousel slides={getSlides()} settings={defaultCarouselSettings} />
    </Box>
  );
};
export default Testimonial;
