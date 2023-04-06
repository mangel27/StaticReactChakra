import {
  Box,
  Icon,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FOLLOW_DATA } from "@/constants/sharedData";
import NextLink from "next/link";

const FollowUs = () => {
  return (
    <Box
      mx="auto"
      w="100%"
      p="2%"
      height={["30vh", "30vh", "30vh", "40vh"]}
      textAlign={"center"}
      bg={useColorModeValue("#3D3D3D", "white")}
      color={useColorModeValue("white", "black")}
    >
      <Text fontWeight={400} fontSize={["18px", "24px"]}>
        Follow Us
      </Text>
      <Flex
        mt="2em"
        w={["80%", "50%", "50%", "30%"]}
        mx="auto"
        justifyContent={"space-around"}
      >
        {FOLLOW_DATA &&
          FOLLOW_DATA.map((item, index) => {
            return (
              <Link
                as={NextLink}
                key={index + "follow"}
                href={item.link}
                target="blank"
              >
                <Icon as={item.icon} w={8} h={8} />
              </Link>
            );
          })}
      </Flex>
      <Box mt="2em">
        <Text fontWeight={400} fontSize={["18px", "24px"]}>
          Write to us for any complaint or feedback
        </Text>
        <Link
          mt="1em"
          fontWeight={600}
          fontSize={["22px", "26px"]}
          textDecor={"underline"}
          href="mailto:support@myteam11.com"
          as={NextLink}
        >
          support@myteam11.com
        </Link>
      </Box>
    </Box>
  );
};
export default FollowUs;
