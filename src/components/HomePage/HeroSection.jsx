import {
  Stack,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={["40vh", "60vh"]}
      backgroundImage={["/assets/img/bgimg2.png", "/assets/img/bgimg.png"]}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center center"}
      pos="relative"
    >
      {/* <Image
        src={"/assets/img/bgimg2.png"}
        width="100%"
        height={"100%"}
        pos="relative"
        display={["block", "none"]}
      />
      <Image
        src={"/assets/img/bgimg.png"}
        width="100%"
        height={"100%"}
        pos="relative"
        display={["none", "block"]}
      /> */}
      <VStack
        w={"full"}
        justify={"center"}
        // pos="absolute"
        // top={"40%"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Box
            color={"white"}
            fontWeight={600}
            textAlign="center"
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "2xl",
              md: "4xl",
            })}
          >
            <Flex flexWrap="wrap" justifyContent={"center"}>
              <Heading as="h1">Play Fantasy Sports</Heading>{" "}
              <Text> &nbsp;and Win upto</Text>
            </Flex>
            <br></br>
            <Text as="span" fontWeight={900} fontSize={["30px", "50px"]}>
              ₹10,00,000 Daily
            </Text>
          </Box>
        </Stack>
      </VStack>
    </Flex>
  );
};
export default HeroSection;
