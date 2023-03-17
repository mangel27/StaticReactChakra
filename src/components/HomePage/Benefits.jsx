import {
  defaultCarouselSettings,
  FANTASY_BENEFITS,
} from "@/constants/sharedData";
import Carousel from "@/patterns/Carousel";
import SimpleCard from "@/patterns/SimpleCard";
import SimpleCardCarousel from "@/patterns/SimpleCardCarousel";
import { Box, Heading } from "@chakra-ui/react";

const Benefits = ({ title }) => {
  const getSlides = () => {
    let slides = FANTASY_BENEFITS.map((card, index) => {
      return <SimpleCard index={index} {...card} />;
    });
    return slides;
  };
  return (
    <Box overflow={"hidden"} p="5" w="100%">
      <Heading my="2em">{title}</Heading>
      <SimpleCardCarousel
        cards={FANTASY_BENEFITS}
        settings={defaultCarouselSettings}
      />
    </Box>
  );
};
export default Benefits;
