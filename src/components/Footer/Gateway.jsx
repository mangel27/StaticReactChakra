import {
  Box,
  Image,
  Flex,
  Stack,
  List,
  ListItem,
  Link,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import NextImage from "next/image";

const Gateway = () => {
  return (
    <Box borderTop="1px solid" borderColor="gray.100" py="5">
      <Stack display="flex" alignItems="center">
        <Text color="gray.800" fontSize="md">
          Our Supporting Payment Gateway
        </Text>
        <SimpleGrid columns={5} spacing={5} py={2}>
          <Box pos="relative" p={1} w={["30px", "50px"]} h={["30px", "50px"]}>
            <NextImage
              style={{ objectFit: "contain" }}
              alt="gpay"
              src="/assets/img/google-pay.png"
              fill={true}
            />
          </Box>
          <Box pos="relative" p={1} w={["30px", "50px"]} h={["30px", "50px"]}>
            <NextImage
              style={{ objectFit: "contain" }}
              alt="phonpay"
              src="/assets/img/phonpay.png"
              fill={true}
            />
          </Box>
          <Box pos="relative" p={1} w={["30px", "50px"]} h={["30px", "50px"]}>
            <NextImage
              alt="amazonpay"
              style={{ objectFit: "contain" }}
              src="/assets/img/amazonpay.png"
              fill={true}
            />
          </Box>
          <Box pos="relative" p={1} w={["30px", "50px"]} h={["30px", "50px"]}>
            <NextImage
              alt="paytm"
              style={{ objectFit: "contain" }}
              src="/assets/img/paytm.png"
              fill={true}
            />
          </Box>
          <Box pos="relative" p={1} w={["30px", "50px"]} h={["30px", "50px"]}>
            <NextImage
              alt="payu"
              style={{ objectFit: "contain" }}
              src="/assets/img/payu.png"
              fill={true}
            />
          </Box>
        </SimpleGrid>
        <Text
          color="gray.600"
          fontSize={["sm", "md"]}
          pt={5}
          align={["center", "center"]}
          p={3}
        >
          This game involves an element of financial risk and may be addictive
          Please play responssibly at your own risk<br></br>
          The game is applicable for people above 18 only
        </Text>
      </Stack>
    </Box>
  );
};

export default Gateway;
