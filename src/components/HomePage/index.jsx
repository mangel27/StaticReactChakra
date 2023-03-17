import { Flex } from "@chakra-ui/react";
import Benefits from "./Benefits";
import EarnMore from "./EarnMore";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";

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
      <EarnMore title={"Earn more with Halaplay"} />
      <Benefits title={"Halaplay Benefits"} />

      <Testimonial title={"What our users say"} />
    </Flex>
  );
};
export default HomePage;
