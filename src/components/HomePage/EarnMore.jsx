import {
  defaultCarouselSettings,
  earnmoreColors,
  EARN_MORE,
} from "@/constants/sharedData";
import SimpleCardCarousel from "@/patterns/SimpleCardCarousel";
import { Box, Heading } from "@chakra-ui/react";

const EarnMore = ({ title }) => {
  return (
    <Box px="5" py="3" my="0.5em" overflow={"hidden"} w="100%">
      <Heading textAlign={"center"} mb="0.5em">
        {title}
      </Heading>
      <SimpleCardCarousel
        cards={EARN_MORE}
        bgColor={earnmoreColors}
        settings={defaultCarouselSettings}
      />
    </Box>
  );
};
export default EarnMore;
