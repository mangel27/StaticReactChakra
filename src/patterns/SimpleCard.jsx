import { Stack, Text, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { cardColors } from "@/constants/sharedData";

const SimpleCard = ({ title, text, index, ...rest }) => {
  return (
    <Stack
      borderWidth="1px"
      textAlign={"center"}
      p={5}
      bg={cardColors[index]}
      color={useColorModeValue("white", "gray.200")}
      rounded="lg"
      justifyContent={"space-around"}
      shadow="lg"
      minW={["46%", "30%"]}
      height={"150px"}
      {...rest}
    >
      <Text fontWeight={700} textShadow={"1px 1px 1px #000"} fontSize="lg">
        {title}
      </Text>
      <Text>{text}</Text>
    </Stack>
  );
};
export default SimpleCard;
