import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import NextImage from "next/image";

const StepTile1 = () => {
  return (
    <Box
      pos="relative"
      w={["100%", "250px", "250px", "470px"]}
      h={["150px", "150px", "250px", "230px"]}
      overflow={"hidden"}
    >
      <NextImage
        style={{ objectFit: "contain" }}
        alt="step1"
        fill
        src="/assets/img/step1.png"
      />
    </Box>
  );
};
const StepTile2 = () => {
  return (
    <Box
      pos="relative"
      w={["100%", "250px", "250px", "470px"]}
      h={["150px", "150px", "250px", "230px"]}
      overflow={"hidden"}
    >
      <NextImage
        alt="step2"
        style={{ objectFit: "contain" }}
        fill
        src="/assets/img/step2.png"
      />
    </Box>
  );
};
const StepTile3 = () => {
  return (
    <Box
      pos="relative"
      w={["100%", "250px", "250px", "470px"]}
      h={["150px", "150px", "250px", "230px"]}
      overflow={"hidden"}
    >
      <NextImage
        alt="step3"
        style={{ objectFit: "contain" }}
        fill
        src="/assets/img/step3.png"
      />
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
