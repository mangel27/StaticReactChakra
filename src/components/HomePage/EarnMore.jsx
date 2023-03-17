import { defaultCarouselSettings, EARN_MORE } from "@/constants/sharedData";
import Carousel from "@/patterns/Carousel";
import SimpleCard from "@/patterns/SimpleCard";
import SimpleCardCarousel from "@/patterns/SimpleCardCarousel";
import { Box, Heading } from "@chakra-ui/react";

const EarnMore = ({ title }) => {
  const getSlides = () => {
    let slides = EARN_MORE.map((card, index) => {
      return <SimpleCard index={index} {...card} />;
    });
    return slides;
  };
  return (
    <Box p="5" overflow={"hidden"} w="100%">
      <Heading my="2em">{title}</Heading>
      <SimpleCardCarousel
        cards={EARN_MORE}
        settings={defaultCarouselSettings}
      />
    </Box>
  );
};
export default EarnMore;
