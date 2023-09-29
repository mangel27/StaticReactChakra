import { Stack, Text, Box, useColorModeValue, Image } from "@chakra-ui/react";
import { cardColors } from "@/constants/sharedData";

const SimpleCard = ({
  title,
  text,
  index,
  bgColor,
  icon,
  onClick,
  ...rest
}) => {
  return (
    <Box pos="relative">
      {onClick && (
        <Box
          pos="absolute"
          top="0"
          right="0"
          zIndex={99}
          cursor={"pointer"}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <Image
            pos="relative"
            alt={title}
            src={"/assets/icons/click.svg"}
            mx="auto"
            width={"60px!important"}
            height="60px"
          />
        </Box>
      )}
      <Stack
        borderWidth="1px"
        textAlign={"center"}
        px={5}
        py={[8, 10]}
        bg={bgColor ? bgColor : cardColors[index]}
        color={useColorModeValue("white", "gray.200")}
        rounded="lg"
        pos="relative"
        justifyContent={"space-around"}
        shadow="lg"
        minW={["46%", "30%"]}
        height={["160px", "180px"]}
        {...rest}
      >
        <Image
          pos="relative"
          alt={title}
          src={icon}
          mx="auto"
          width={"50px!important"}
        />
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
    </Box>
  );
};
export default SimpleCard;
