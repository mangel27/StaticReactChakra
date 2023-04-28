import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const PointSystem = () => {
  const pageData = [
    {
      tabName: "100 BALL",
      tabData: [
        {
          sectionName: "Batting Points",
          sectionData: [
            { text: "For every run scored", value: "1 Points" },
            { text: "For every 6 hit", value: "2 Points" },
            { text: "For every 4 hit", value: "1 Points" },
            { text: "For runs from 30 to 49", value: "10 Points" },
            { text: "For runs from 50 to 99", value: "20 Points" },
            { text: "For 100 or more runs", value: "30 Points" },
            { text: "For Duck (except bowlers)", value: "-5 Points" },
          ],
        },
        {
          sectionName: "Bowling Points",
          sectionData: [
            { text: "For every wicket taken", value: "20 Points" },
            { text: "For 3-wicket haul", value: "10 Points" },
            { text: "For 4-wicket haul", value: "20 Points" },
            { text: "For 5-wicket haul", value: "30 Points" },
            { text: "For 6-wicket haul", value: "40 Points" },
            { text: "For 7-wicket haul", value: "50 Points" },
            { text: "For 8-wicket haul", value: "60 Points" },
            { text: "For 9-wicket haul", value: "70 Points" },
            { text: "For 10-wicket haul", value: "80 Points" },
            { text: "For every maiden", value: "20 Points" },
            { text: "Bowled/LBW", value: "5 Points" },
          ],
        },
        {
          sectionName: "General Points",
          sectionData: [
            { text: "For playing in match", value: "3 Points" },
            { text: "For every catch", value: "10 Points" },
            { text: "For every stumping", value: "15 Points" },
            { text: "Run out (last 2 player)", value: "10 Points" },
            { text: "3 Catch Bonus", value: "5 Points" },
          ],
        },
      ],
    },
    {
      tabName: "T10",
      tabData: [
        {
          sectionName: "Batting Points",
          sectionData: [
            { text: "For every run scored", value: "1 Points" },
            { text: "For every 6 hit", value: "2 Points" },
            { text: "For every 4 hit", value: "1 Points" },
            { text: "For runs from 25 to 49", value: "10 Points" },
            { text: "For runs from 50 to 75", value: "25 Points" },
            { text: "For 75 or more runs", value: "40 Points" },
            { text: "For Duck (except bowlers)", value: "-5 Points" },
            { text: "Strike rate 0 to 49.99", value: "-10 Points" },
            { text: "Strike rate 50 to 74.99", value: "-15 Points" },
            { text: "Strike rate 75.00 to 99.99", value: "-5 Points" },
            { text: "Strike rate 100 to 149.99", value: "5 Points" },
            { text: "Strike rate 150.00 to 199.99", value: "10 Points" },
            { text: "Strike rate 200.00 or more", value: "15 Points" },
          ],
        },
        {
          sectionName: "Bowling Points",
          sectionData: [
            { text: "For every wicket taken", value: "20 Points" },
            { text: "For 2-wicket haul", value: "10 Points" },
            { text: "For 3-wicket haul", value: "20 Points" },
            { text: "For 4-wicket haul", value: "30 Points" },
            { text: "For 5-wicket haul", value: "40 Points" },
            { text: "For 6-wicket haul", value: "50 Points" },
            { text: "For 7-wicket haul", value: "60 Points" },
            { text: "For 8-wicket haul", value: "70 Points" },
            { text: "For 9-wicket haul", value: "80 Points" },
            { text: "For 10-wicket haul", value: "90 Points" },
            { text: "For every maiden", value: "30 Points" },
            { text: "Economy rate 0 to 7.00", value: "15 Points" },
            { text: "Economy rate 7.01 to 10.00", value: "10 Points" },
            { text: "Economy rate 10.01 to 12.00", value: "0 Points" },
            { text: "Economy rate 12.01 to 15.00", value: "-10 Points" },
            { text: "Economy rate 15.01 or above", value: "-15 Points" },
            { text: "Bowled/LBW", value: "5 Points" },
          ],
        },
        {
          sectionName: "General Points",
          sectionData: [
            { text: "For playing in match", value: "3 Points" },
            { text: "For every catch", value: "10 Points" },
            { text: "For every stumping", value: "15 Points" },
            { text: "Run out (last 2 player)", value: "10 Points" },
            { text: "3 Catch Bonus", value: "5 Points" },
          ],
        },
      ],
    },
    {
      tabName: "T20",
      tabData: [
        {
          sectionName: "Batting Points",
          sectionData: [
            { text: "For every run scored", value: "1 Points" },
            { text: "For every 6 hit", value: "2 Points" },
            { text: "For every 4 hit", value: "1 Points" },
            { text: "For runs from 30 to 49", value: "10 Points" },
            { text: "For runs from 50 to 99", value: "20 Points" },
            { text: "For 100 or more runs", value: "30 Points" },
            { text: "For Duck (except bowlers)", value: "-5 Points" },
            { text: "Strike rate 0 to 49.99", value: "-10 Points" },
            { text: "Strike rate 50 to 74.99", value: "-15 Points" },
            { text: "Strike rate 75.00 to 99.99", value: "-5 Points" },
            { text: "Strike rate 100 to 149.99", value: "5 Points" },
            { text: "Strike rate 150.00 to 199.99", value: "10 Points" },
            { text: "Strike rate 200.00 or more", value: "15 Points" },
          ],
        },
        {
          sectionName: "Bowling Points",
          sectionData: [
            { text: "For every wicket taken", value: "20 Points" },
            { text: "For 3-wicket haul", value: "10 Points" },
            { text: "For 4-wicket haul", value: "20 Points" },
            { text: "For 5-wicket haul", value: "30 Points" },
            { text: "For 6-wicket haul", value: "40 Points" },
            { text: "For 7-wicket haul", value: "50 Points" },
            { text: "For 8-wicket haul", value: "60 Points" },
            { text: "For 9-wicket haul", value: "70 Points" },
            { text: "For 10-wicket haul", value: "80 Points" },
            { text: "For every maiden", value: "20 Points" },
            { text: "Economy rate 0 to 5.00", value: "15 Points" },
            { text: "Economy rate 5.01 to 8.00", value: "10 Points" },
            { text: "Economy rate 8.01 to 10.00", value: "5 Points" },
            { text: "Economy rate 10.01 to 12.00", value: "-5 Points" },
            { text: "Economy rate 12.01 to 15.00", value: "-10 Points" },
            { text: "Economy rate 15.01 or above", value: "-15 Points" },
            { text: "Bowled/LBW", value: "5 Points" },
          ],
        },
        {
          sectionName: "General Points",
          sectionData: [
            { text: "For playing in match", value: "3 Points" },
            { text: "For every catch", value: "10 Points" },
            { text: "For every stumping", value: "15 Points" },
            { text: "Run out (last 2 player)", value: "10 Points" },
            { text: "3 Catch Bonus", value: "5 Points" },
          ],
        },
      ],
    },
    {
      tabName: "ODI",
      tabData: [
        {
          sectionName: "Batting Points",
          sectionData: [
            { text: "For every run scored", value: "1 Points" },
            { text: "For every 6 hit", value: "2 Points" },
            { text: "For every 4 hit", value: "1 Points" },
            { text: "For 50 runs", value: "10 Points" },
            { text: "For 100 runs", value: "20 Points" },
            { text: "For 150 runs", value: "30 Points" },
            { text: "For 200 runs", value: "40 Points" },
            { text: "For Duck (except bowlers)", value: "-5 Points" },
            { text: "Strike rate 0 to 24.99", value: "-10 Points" },
            { text: "Strike rate 25 to 49.99", value: "-15 Points" },
            { text: "Strike rate 50 to 74.99", value: "-5 Points" },
            { text: "Strike rate 75 to 99.99", value: "0 Points" },
            { text: "Strike rate 100.00 to 124.99", value: "5 Points" },
            { text: "Strike rate 125 to 149.99", value: "10 Points" },
            { text: "Strike rate 150.00 or more", value: "15 Points" },
          ],
        },
        {
          sectionName: "Bowling Points",
          sectionData: [
            { text: "For every wicket taken", value: "20 Points" },
            { text: "For 3-wicket haul", value: "10 Points" },
            { text: "For 4-wicket haul", value: "15 Points" },
            { text: "For 5-wicket haul", value: "20 Points" },
            { text: "For 6-wicket haul", value: "30 Points" },
            { text: "For 7-wicket haul", value: "40 Points" },
            { text: "For 8-wicket haul", value: "50 Points" },
            { text: "For 9-wicket haul", value: "60 Points" },
            { text: "For 10-wicket haul", value: "70 Points" },
            { text: "For every maiden", value: "10 Points" },
            { text: "Economy rate 0 to 3.00", value: "15 Points" },
            { text: "Economy rate 3.01 to 5.00", value: "10 Points" },
            { text: "Economy rate 5.01 to 7.00", value: "5 Points" },
            { text: "Economy rate 7.01 to 9.00", value: "-5 Points" },
            { text: "Economy rate 9.01 to 11.00", value: "-10 Points" },
            { text: "Economy rate 11.01 or above", value: "-15 Points" },
            { text: "Bowled/LBW", value: "5 Points" },
          ],
        },
        {
          sectionName: "General Points",
          sectionData: [
            { text: "For playing in match", value: "3 Points" },
            { text: "For every catch", value: "10 Points" },
            { text: "For every stumping", value: "15 Points" },
            { text: "Run out (last 2 player)", value: "10 Points" },
            { text: "3 Catch Bonus", value: "5 Points" },
          ],
        },
      ],
    },
    {
      tabName: "TEST",
      tabData: [
        {
          sectionName: "Batting Points",
          sectionData: [
            { text: "For every run scored", value: "1 Points" },
            { text: "For every 6 hit", value: "4 Points" },
            { text: "For every 4 hit", value: "2 Points" },
            { text: "For 50 runs", value: "10 Points" },
            { text: "For 100 runs", value: "20 Points" },
            { text: "For 200 runs", value: "25 Points" },
            { text: "For 300 runs", value: "30 Points" },
            { text: "For Duck (except bowlers)", value: "40 Points" },
            { text: "0-50 Balls Played", value: "-5 Points" },
            { text: "51-100 Balls Played", value: "0 Points" },
            { text: "101-150 Balls Played", value: "5 Points" },
            { text: "150-200 Balls Played", value: "10 Points" },
            { text: "200 Above", value: "15 Points" },
            { text: "Strike rate 0 to 19.99", value: "20 Points" },
            { text: "Strike rate 20 to 29.99", value: "-10 Points" },
            { text: "Strike rate 30 to 49.99", value: "-5 Points" },
            { text: "Strike rate 50 to 69.999", value: "0 Points" },
            { text: "Strike rate 70 to 99.99", value: "5 Points" },
            { text: "Strike rate 100.00 or more", value: "10 Points" },
          ],
        },
        {
          sectionName: "Bowling Points",
          sectionData: [
            { text: "For every wicket taken", value: "20 Points" },
            { text: "For 3-wicket haul", value: "15 Points" },
            { text: "For 4-wicket haul", value: "20 Points" },
            { text: "For 5-wicket haul", value: "25 Points" },
            { text: "For 6-wicket haul", value: "30 Points" },
            { text: "For 7-wicket haul", value: "35 Points" },
            { text: "For 8-wicket haul", value: "40 Points" },
            { text: "For 9-wicket haul", value: "45 Points" },
            { text: "For 10-wicket haul", value: "50 Points" },
            { text: "Economy rate 0 to 1.00", value: "15 Points" },
            { text: "Economy rate 1.01 to 2.00", value: "10 Points" },
            { text: "Economy rate 2.01 to 3.00", value: "5 Points" },
            { text: "Economy rate 3.01 to 5.00", value: "0 Points" },
            { text: "Economy rate 5.01 or 7.00", value: "-5 Points" },
            { text: "Above 7 runs", value: "-10 Points" },
            { text: "Maiden Over", value: "3 Points" },
            { text: "Bowled/LBW", value: "5 Points" },
          ],
        },
        {
          sectionName: "General Points",
          sectionData: [
            { text: "For playing in match", value: "3 Points" },
            { text: "For every catch", value: "10 Points" },
            { text: "For every stumping", value: "15 Points" },
            { text: "Run out (last 2 player)", value: "10 Points" },
            { text: "3 Catch Bonus", value: "5 Points" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Tabs isFitted variant="enclosed">
        <Heading pl={5} bg={"#5925d3"} color={"white"} as="h1" pb={5}>
          Fantasy Point System
        </Heading>
        <TabList bg={"#5925d3"} color={"white"}>
          {pageData &&
            pageData.map((tabs, index) => {
              return (
                <Tab
                  key={"tabName" + index}
                  _selected={{ color: "black", bg: "white" }}
                >
                  {tabs.tabName}
                </Tab>
              );
            })}
        </TabList>

        <TabPanels>
          {pageData &&
            pageData.map((tabs, index) => {
              return (
                <TabPanel key={"tabPanel" + index}>
                  {tabs.tabData &&
                    tabs.tabData.map((section, index) => {
                      return (
                        <>
                          <Center as="b" py={5}>
                            {section.sectionName}
                          </Center>
                          {section.sectionData.map((item, itemIndex) => (
                            <SimpleGrid
                              columns={2}
                              key={itemIndex}
                              px={[0, 20]}
                            >
                              <Stack textAlign={"justify"}>
                                <Text>{item.text}</Text>
                              </Stack>
                              <Stack align={"flex-end"}>
                                <Text
                                  color={
                                    item.value.indexOf("-") > -1
                                      ? "red"
                                      : "green"
                                  }
                                >
                                  {item.value}
                                </Text>
                              </Stack>
                            </SimpleGrid>
                          ))}
                        </>
                      );
                    })}
                </TabPanel>
              );
            })}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PointSystem;
