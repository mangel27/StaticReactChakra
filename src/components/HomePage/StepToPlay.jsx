import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";

const StepTile1 = () => {
  return (
    <Box>
      <Image src="/assets/img/step1.png" width="50" height="50"></Image>
    </Box>
  );
};
const StepTile2 = () => {
  return (
    <Box>
      <Image src="/assets/img/step2.png"  width="50" height="50"></Image>
    </Box>
  );
};
const StepTile3 = () => {
  return (
    <Box>
      <Image src="/assets/img/step3.png"  width="50" height="50"></Image>
    </Box>
  );
};

const StepsToPlay = (props) => {
  const { title } = props;
  return (
    <Box
      px="10"
      py={5}
      w="100%"
      ms="auto"
      textAlign={"center"}
      bg={useColorModeValue("white", "gray.200")}
    >
      <Heading as="h3">Easy Steps to Play Online Fantasy Games</Heading>
      <SimpleGrid columns={[1, 3]} pt={10} spacing={6}>
        <StepTile1 />
        <StepTile2 />
        <StepTile3 />
      </SimpleGrid>
    </Box>
  );
};
export default StepsToPlay;
