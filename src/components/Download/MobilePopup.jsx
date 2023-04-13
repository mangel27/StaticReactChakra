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
        <Box
          pl={2}
          py={1}
          m="auto"
          color={useColorModeValue("white", "gray.200")}
        >
          <Link
            rel="nofollow"
            href="https://apps.apple.com/in/app/halaplay-fantasy-sports/id1426253591"
          >
            <Image src="assets/img/istore.png" w={160} p={1}></Image>
          </Link>
          <Link
            rel="nofollow"
            href="https://d3mebndoedfycp.cloudfront.net/HalaPlay_Pro.apk"
          >
            <Image src="assets/img/playstore.png" w={160} p={1}></Image>
          </Link>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
export default Mobile;
