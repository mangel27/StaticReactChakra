import { Box, Text, Heading } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const AboutUS = () => {
  const content = `Made in India, Played by India - HalaPlay is India’s most loved Daily Fantasy Sports destination trusted by users. We give you an opportunity to use your skill of the game and join exciting contests for fantasy cricket to win real money!


Put your cricket skill to the test by making fantasy teams - where you create your own virtual squad of real players and get points from their real world performances. Customize your teams based on form, statistics and head-to-head battles & join contests with a chance to win real cash prizes in the fantasy cricket league! It’s that simple.


If you are the type who don’t want to be limited by Batsmen, Bowler, All-rounders, or Wicketkeeper restrictions, then check out HalaPlay Daily Fantasy Sports - where you can select any number of Batsmen, Bowler, All-rounders, or Wicketkeeper without any restrictions.



With our user-friendly interface, exciting offer, heavy discounts, real cash games and a fun gaming experience, play fantasy cricket like never before. Download the HalaPlay app now!
Get started now, here’s how!\n\n


\n\nSelect Fantasy cricket on the HalaPlay app

Browse & pick matches from upcoming section

Select the free and paid leagues you want to enter

Pick your best team

Select your captains to get 2x points

Watch your players battle it out on the field

Get top position & Win real cash!


A few more reasons to pick HalaPlay & start playing Daily Fantasy Games online:


• 100% safe and secure platform

• Play practice games for free & win Real Cash

• Instant withdrawals

• 24x7 customer support

• Become VIP and Win Extra Money

• Analyze Historical Player Performance

• Quick League Join - Join multiple leagues at one click

• Unique team creation without any restrictions

• Get Deposit, Bonus, Discount Offers Daily

• Much More
`;
  const markdowntheme = {
    p: (props) => {
      const { children } = props;
      return (
        <Text m={2} fontWeight={400}>
          {children}{" "}
        </Text>
      );
    },
  };
  return (
    <Box p={5} bg="#f0f3f8">
      <Heading my="2" mx="auto" textAlign={"center"}>
        {" "}
        About Us
      </Heading>
      <ReactMarkdown
        skipHtml={false}
        components={ChakraUIRenderer(markdowntheme)}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};
export default AboutUS;
