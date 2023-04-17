import { Stack, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { cardColors } from "@/constants/sharedData";
// import Image from "next/image";

const SimpleCard = ({ title, text, index, bgColor, icon, ...rest }) => {
  return (
    <Stack
      borderWidth="1px"
      textAlign={"center"}
      px={5}
      py={[8, 10]}
      bg={bgColor ? bgColor : cardColors[index]}
      color={useColorModeValue("white", "gray.200")}
      rounded="lg"
      justifyContent={"space-around"}
      shadow="lg"
      minW={["46%", "30%"]}
      height={["160px", "180px"]}
      {...rest}
    >
     <Image alt="title" src={icon} mx="auto" width={"50px!important"} />
      <Text
        fontWeight={600}
        textShadow={"1px 1px 1px #000"}
        fontSize={["17px", "20px"]}
      >
        {title}
      </Text>
      <Text fontWeight={400} fontSize={["15px", "18px"]}>
        {text}
      </Text>
    </Stack>
  );
};
export default SimpleCard;
