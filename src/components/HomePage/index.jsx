import { Flex } from "@chakra-ui/react";
import Features from "./Features";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      mb={8}
      w="full"
    >
      <HeroSection />
      <Features />
    </Flex>
  );
};
export default HomePage;
