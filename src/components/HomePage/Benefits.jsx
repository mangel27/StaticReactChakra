import {
  defaultCarouselSettings,
  FANTASY_BENEFITS,
  cardColors,
} from "@/constants/sharedData";
import SimpleCardCarousel from "@/patterns/SimpleCardCarousel";
import { Box, Heading } from "@chakra-ui/react";

const Benefits = ({ title }) => {
  return (
    <Box overflow={"hidden"} px="5" w="100%">
      <Heading as="h3" textAlign={"center"} mb="0.5em">
        {title}
      </Heading>
      <SimpleCardCarousel
        cards={FANTASY_BENEFITS}
        bgColor={cardColors}
        settings={defaultCarouselSettings}
      />
    </Box>
  );
};
export default Benefits;
