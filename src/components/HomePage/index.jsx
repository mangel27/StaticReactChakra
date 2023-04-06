import { Flex } from "@chakra-ui/react";
import Benefits from "./Benefits";
import EarnMore from "./EarnMore";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import StepsToPlay from "./StepToPlay";
import FAQ from "./FAQ";
import Download from "../Download/Download";
import FollowUs from "./FollowUs";

const HomePage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      mb={4}
      w="full"
    >
      <HeroSection />
      <Download />
      <Features />
      <EarnMore title={"Earn more with HalaPlay"} />
      <Benefits title={"HalaPlay Benefits"} />
      <StepsToPlay />
      <FAQ />
      <Testimonial title={"What our users say"} />
      <FollowUs />
    </Flex>
  );
};
export default HomePage;
