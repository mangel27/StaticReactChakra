import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Collapsible from "react-collapsible";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { FAQ_ITEMS } from "@/constants/sharedData";

const FAQRow = (props) => {
  const { row, index, currentOpen, setCurrentOpen } = props;
  const [isExpanded, setExpanded] = useState(false);

  const Icon = isExpanded ? AiFillCloseCircle : AiFillPlusCircle;

  return (
    <Box
      bg="gray.100"
      minH="70px"
      p="22px"
      pl="20px"
      boxShadow="md"
      mt="20px"
      mb="25px"
    >
      <Collapsible
        open={currentOpen === index}
        transitionTime={200}
        onOpen={() => setExpanded(true)}
        handleTriggerClick={() => {
          if (currentOpen === index) setCurrentOpen(-1);
          else setCurrentOpen(index);
        }}
        onClose={() => setExpanded(false)}
        trigger={
          <Flex align="center" w="100%">
            <Text
              fontSize={["16px", "16px", "16px", "18px"]}
              color="grey.900"
              textAlign="left"
            >
              {row.question}
            </Text>

            <Box ml="auto">
              <Icon style={{ fill: "#2C1758", fontSize: "30px" }} />
            </Box>
          </Flex>
        }
      >
        <Text mt="6px" color="grey.900" textAlign="left">
          {row.answer}
        </Text>
      </Collapsible>
    </Box>
  );
};

const FAQ = (props) => {
  const { data } = props;
  const [currentOpen, setCurrentOpen] = useState(-1);
  return (
    <Box w={["100%", "80%"]} py={3} px={6}>
      <Heading mb={6}>FAQ</Heading>

      {FAQ_ITEMS.map((faq, index) => (
        <FAQRow
          key={`faq-${index}`}
          row={faq}
          index={index + 1}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
        />
      ))}
    </Box>
  );
};
export default FAQ;
