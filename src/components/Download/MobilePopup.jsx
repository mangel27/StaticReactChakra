import {
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

const Mobile = (props) => {
  return (
    <SimpleGrid
      zIndex={9999}
      columns={1}
      pacing={0}
      bg="rgb(89,37,211)"
      w="100%"
    >
      <Flex justifyContent={"center"} px={4}>
        <Box p={2} pl={2} color={useColorModeValue("white", "gray.200")}>
          <Text fontSize={"sm"} fontWeight={"medium"}>
            Its always better with App
          </Text>
          <Text
            fontSize={"md"}
            color={"rgb(254, 235, 75)"}
            fontWeight={"medium"}
            mt={1}
          >
            Download App & Get ₹250 off on League Join
          </Text>
        </Box>
        <Box pl={2} pt={1} color={useColorModeValue("white", "gray.200")}>
          <Link>
            <Image src="assets/img/istore.png" w={150} p={3}></Image>
          </Link>
          <Link>
            <Image src="assets/img/playstore.png" w={150} p={3}></Image>
          </Link>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
export default Mobile;
