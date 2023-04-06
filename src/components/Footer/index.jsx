import {
  Box,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Gateway from "./Gateway";

const Footer = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Box py={10}>
          <Flex justify="center">
            <Image
              w={"175px"}
              h={"80px"}
              src="/assets/img/logo.png"
            />
          </Flex>
          <Text pt={6} fontSize={"2xl"} fontWeight="500" textAlign={"center"}>
            Halaplay Technology Pvt. Ltd.
          </Text>
        </Box>
        <Box align="center">
          <SimpleGrid
            fontSize={"lg"}
            fontWeight="500"
            columns={2}
            px={["10%", "20%"]}
            py={5}
          >
            <Stack textAlign={"justify"}>
              <Link href={"#"}>How to Play</Link>
              <Link href={"#"}>Point System</Link>
              <Link href={"#"}>Offer</Link>
              <Link href={"#"}>Blog</Link>
            </Stack>

            <Stack align={"flex-end"}>
              <Link href={"#"}>About us</Link>
              <Link href={"#"}>Support</Link>
              <Link href={"#"}>T&C</Link>
              <Link href={"#"}>FAQ</Link>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
      <Gateway />
    </>
  );
};

export default Footer;
