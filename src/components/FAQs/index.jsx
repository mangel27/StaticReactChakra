import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { FAQ_ITEMS_PAGE } from "@/constants/sharedData";
import FAQRow from "../../patterns/FAQRow";

const FAQs = () => {
  const [currentOpen, setCurrentOpen] = useState(-1);
  return (
    <Box p={[5, 10]} bg="#f0f3f8">
      <Heading my="5" mx="auto" textAlign={"center"}>
        {" "}
        FAQ
      </Heading>
      {FAQ_ITEMS_PAGE.map((item, index) => {
        return (
          <Box key={index}>
            <Heading as="h3" size="md" mb={2}>
              {item.sectionName}
            </Heading>
            {item.sectionContent.map((qaitem, index) => {
              return (
                <FAQRow
                  key={`faq-${index}`}
                  row={qaitem}
                  index={index + 1}
                  currentOpen={currentOpen}
                  setCurrentOpen={setCurrentOpen}
                />
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
export default FAQs;
