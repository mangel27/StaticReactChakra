import { testimonialSettings, TESTIMONIAL_DATA } from "@/constants/sharedData";
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
    <Box px="5" overflow={"hidden"} w="100%">
      <Heading as="h4" textAlign={"center"} mb="1em">
        {title}
      </Heading>
      <Box mx="auto" w="80%">
        <Carousel slides={getSlides()} settings={testimonialSettings} />
      </Box>
    </Box>
  );
};
export default Testimonial;
