import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={"60vh"}
      backgroundImage={"/assets/img/bgimg.png"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={600}
            textAlign="center"
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "3xl",
              md: "4xl",
            })}
          >
            Play Fantasy Sports and Win upto <br></br>
            <Text as="span" fontWeight={900} fontSize={["35px", "50px"]}>
              ₹ 1,00,000 Daily
            </Text>
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};
export default HeroSection;
