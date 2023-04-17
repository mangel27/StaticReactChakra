import {
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import NextImage from "next/image";

const Desktop = () => {
  return (
    <SimpleGrid columns={1} spacing={0} bg="rgb(89,37,211)" w="100%">
      <Flex justifyContent={"space-around"}>
        <Box pl={4} p={6} color={useColorModeValue("white", "gray.200")}>
          <Link
            rel="nofollow"
            href="https://d3mebndoedfycp.cloudfront.net/HalaPlay_Pro.apk"
          >
            <Box
              w="140px"
              pos="relative"
              height="50px"
              p={1}
              overflow={"hidden"}
            >
              <NextImage
                style={{ objectFit: "contain" }}
                src="/assets/img/playstore.png"
                fill={true}
              />
            </Box>
          </Link>
        </Box>
        <Box pt={4} pl={4} color={useColorModeValue("white", "gray.200")}>
          <Text fontSize={"sm"} fontWeight={"medium"} align="center">
            Its always better with App
          </Text>
          <Text fontSize={"lg"} color={"yellow"} fontWeight={"medium"}>
            Download App & Get ₹250 off on League Join
          </Text>
        </Box>
        <Box pl={4} p={6} color={useColorModeValue("white", "gray.200")}>
          <Link
            rel="nofollow"
            href="https://apps.apple.com/in/app/halaplay-fantasy-sports/id1426253591"
          >
            <Box
              w="140px"
              pos="relative"
              height="50px"
              p={1}
              overflow={"hidden"}
            >
              <NextImage
                style={{ objectFit: "contain" }}
                src="/assets/img/istore.png"
                fill={true}
              />
            </Box>
          </Link>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
export default Desktop;
