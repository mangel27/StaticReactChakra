import { Flex } from "@chakra-ui/react";
import Features from "./Features";
import HeroSection from "./HeroSection";
import StepsToPlay from "./StepToPlay";
import FAQ from "./FAQ";

const HomePage = () => {
  return (
    <>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      mb={8}
      w="full"
    >
      <HeroSection />
      <Features />
      <StepsToPlay />
      <FAQ />
    </Flex>
    
    </>
  );
};
export default HomePage;