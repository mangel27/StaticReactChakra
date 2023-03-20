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
      h={"50vh"}
      backgroundImage={"url(https://d15boxbdv4z6lv.cloudfront.net/main_bg.jpg)"}
      backgroundSize={"cover"}
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
            fontWeight={700}
            textAlign="center"
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "3xl",
              md: "4xl",
            })}
          >
            Play Fantasy Sports and Win upto 10 Lakh Daily
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};
export default HeroSection;
