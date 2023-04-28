import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Heading,
} from "@chakra-ui/react";
import Tab1 from "./Tabs/tab1";
import Tab2 from "./Tabs/tab2";
import Tab3 from "./Tabs/tab3";
import Tab4 from "./Tabs/tab4";
import Tab5 from "./Tabs/tab5";

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
            { text: "For runs from 30 to 49", value: "10 Points" },
            { text: "For runs from 50 to 99", value: "20 Points" },
            { text: "For 100 or more runs", value: "30 Points" },
            { text: "For Duck (except bowlers)", value: "-5 Points" },
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
            { text: "For runs from 30 to 49", value: "10 Points" },
            { text: "For runs from 50 to 99", value: "20 Points" },
            { text: "For 100 or more runs", value: "30 Points" },
            { text: "For Duck (except bowlers)", value: "-5 Points" },
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
            { text: "For every 6 hit", value: "2 Points" },
            { text: "For every 4 hit", value: "1 Points" },
            { text: "For runs from 30 to 49", value: "10 Points" },
            { text: "For runs from 50 to 99", value: "20 Points" },
            { text: "For 100 or more runs", value: "30 Points" },
            { text: "For Duck (except bowlers)", value: "-5 Points" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Tabs isFitted variant="enclosed">
        <Heading
          textAlign="center"
          bg={"#5925d3"}
          color={"white"}
          fontSize="3xl"
          as="h1"
        >
          POINT SYSTEM
        </Heading>
        <TabList bg={"#5925d3"} color={"white"}>
          {/* <Tab _selected={{ color: "black", bg: "white" }}>100 BALL</Tab>
          <Tab _selected={{ color: "black", bg: "white" }}>T10</Tab>
          <Tab _selected={{ color: "black", bg: "white" }}>T20</Tab>
          <Tab _selected={{ color: "black", bg: "white" }}>ODI</Tab>
          <Tab _selected={{ color: "black", bg: "white" }}>TEST</Tab> */}
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
                          <Center
                            as="b"
                            color={
                              section.sectionName.indexOf("-") > -1
                                ? "red"
                                : "green"
                            }
                          >
                            {section.sectionName}
                          </Center>
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
