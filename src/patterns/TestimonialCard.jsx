import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Avatar,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const TestimonialCard = ({ children }) => {
  return (
    <Box w={"auto"}>
      <TestimonialContent>
        <TestimonialHeading>{children.title}</TestimonialHeading>
        <TestimonialText>{children.text}</TestimonialText>
      </TestimonialContent>
      <TestimonialAvatar icon={children.icon} name={children.name} title={""} />
    </Box>
  );
};
export default TestimonialCard;
const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      minH={"300px"}
      maxH={"300px"}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      //justify={"space-around"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ icon, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={icon} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
