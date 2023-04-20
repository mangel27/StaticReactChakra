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
import NextImage from "next/image";
import Gateway from "./Gateway";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Box py={3}>
          <Flex
            onClick={() => router.push("/")}
            cursor="pointer"
            justify="center"
          >
            <Box w={"150px"} pos="relative" overflow={"hidden"} h={"60px"}>
              <NextImage
                fill
                alt="halaplay_logo"
                style={{ objectFit: "contain" }}
                src="/assets/hp_logo.png"
              />
            </Box>
          </Flex>
          <Text fontSize={"2xl"} fontWeight="500" textAlign={"center"}>
            Halaplay Technologies Pvt. Ltd.
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
              <Link href={"/about-us"}>About us</Link>

              <Link rel="nofollow" href={"https://play.halaplay.com/"}>
                Blog
              </Link>
              <Link rel="nofollow" href={"https://mindia.halaplay.com/rules"}>
                Point System
              </Link>
              <Link href={"#"}>Offers</Link>
            </Stack>

            <Stack align={"flex-end"} textAlign="end">
              <Link href={"/faqs"}>FAQ</Link>
              <Link
                rel="nofollow"
                href={"https://mindia.halaplay.com/privacypolicy"}
              >
                Privacy Policy
              </Link>
              <Link
                rel="nofollow"
                href={"https://mindia.halaplay.com/terms-conditions"}
              >
                T&C
              </Link>

              <Link
                rel="nofollow"
                href={"https://mindia.halaplay.com/responsible-gaming"}
              >
                Responsible Gaming
              </Link>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
      <Gateway />
    </>
  );
};

export default Footer;
