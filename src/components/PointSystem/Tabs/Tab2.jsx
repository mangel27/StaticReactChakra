import React from 'react'
import { Center, Text, SimpleGrid, Box, Stack } from "@chakra-ui/react";

const Tab2 = () => {
    const BattingPoints = [
        { text: "For every run scored"},
        { text: "For every 6 hit"},
        { text: "For every 4 hit"},
        { text: "For runs from 25 to 49"},
        { text: "For runs from 50 to 75"},
        { text: "For 75 or more runs"},
        { text: "For Duck (except bowlers)"},
        { text: "Strike rate 0 to 49.99"},
        { text: "Strike rate 50 to 74.99"},
        { text: "Strike rate 75.00 to 99.99"},
        { text: "Strike rate 100 to 149.99"},
        { text: "Strike rate 150.00 to 199.99"},
        { text: "Strike rate 200.00 or more"},
      ];
    
      const BattingPoints1 = [
        { text: "1 Points"},
        { text: "2 Points"},
        { text: "1 Points"},
        { text: "10 Points"},
        { text: "25 Points"},
        { text: "40 Points"},
        { text: "-5 Points"},
        { text: "-10 Points"},
        { text: "-15 Points"},
        { text: "-5 Points"},
        { text: "5 Points"},
        { text: "10 Points"},
        { text: "15 Points"},
      ];
    
      const BowlingPoints = [
        { text: "For every wicket taken"},
        { text: "For 2-wicket haul"},
        { text: "For 3-wicket haul"},
        { text: "For 4-wicket haul"},
        { text: "For 5-wicket haul"},
        { text: "For 6-wicket haul"},
        { text: "For 7-wicket haul"},
        { text: "For 8-wicket haul"},
        { text: "For 9-wicket haul"},
        { text: "For 10-wicket haul"},
        { text: "For every maiden"},
        { text: "Economy rate 0 to 7.00"},
        { text: "Economy rate 7.01 to 10.00"},
        { text: "Economy rate 10.01 to 12.00"},
        { text: "Economy rate 12.01 to 15.00"},
        { text: "Economy rate 15.01 or above"},
        { text: "Bowled/LBW"},
      ];
    
      const BowlingPoints1 = [
        { text: "20 Points"},
        { text: "10 Points"},
        { text: "20 Points"},
        { text: "30 Points"},
        { text: "40 Points"},
        { text: "50 Points"},
        { text: "60 Points"},
        { text: "70 Points"},
        { text: "80 Points"},
        { text: "90 Points"},
        { text: "30 Points"},
        { text: "15 Points"},
        { text: "10 Points"},
        { text: "0 Points"},
        { text: "-10 Points"},
        { text: "-15 Points"},
        { text: "5 Points"},
      ];
    
      const GeneralPoints = [
        { text: "For playing in match"},
        { text: "For every catch"},
        { text: "For every stumping"},
        { text: "Run out (last 2 player)"},
        { text: "3 Catch Bonus"},
      ];
    
      const GeneralPoints1 = [
        { text: "3 Points"},
        { text: "10 Points"},
        { text: "15 Points"},
        { text: "10 Points"},
        { text: "5 Points"},
      ];
    
      return (
        <>
          <Center><Text py={5}>Batting Points</Text></Center>
            <SimpleGrid columns={2}>
                <Stack textAlign={"justify"}>
                    {BattingPoints.map((BattingPoints) => (
                        <Text>{BattingPoints.text}</Text>
                    ))}
                </Stack>
                <Stack align={"flex-end"}>
                    {BattingPoints1.map((BattingPoints1) => (
                        <Text>{BattingPoints1.text}</Text>
                    ))}
                </Stack>  
            </SimpleGrid>
    
          <Center><Text py={5}>Bowling Points</Text></Center>
            <SimpleGrid columns={2}>
                <Stack textAlign={"justify"}>
                    {BowlingPoints.map((BowlingPoints) => (
                        <Text>{BowlingPoints.text}</Text>
                    ))}
                </Stack>
                <Stack align={"flex-end"}>
                    {BowlingPoints1.map((BowlingPoints1) => (
                        <Text>{BowlingPoints1.text}</Text>
                    ))}
                </Stack>  
            </SimpleGrid>
    
          <Center><Text py={5}>General Points</Text></Center>
            <SimpleGrid columns={2}>
                <Stack textAlign={"justify"}>
                    {GeneralPoints.map((GeneralPoints) => (
                        <Text>{GeneralPoints.text}</Text>
                    ))}
                </Stack>
                <Stack align={"flex-end"}>
                    {GeneralPoints1.map((GeneralPoints1) => (
                        <Text>{GeneralPoints1.text}</Text>
                    ))}
                </Stack>  
            </SimpleGrid>
    
            <Center><Text fontSize={'sm'} p={5}>* Strike rate will be counted only if player have scored 10 runs atleast</Text></Center>
            <Center><Text fontSize={'sm'} p={5}>* Economy will be counted only if player have bowled atleast 1 over</Text></Center>
            <Center><Text fontSize={'sm'} p={5}>* For a Run Out fielder hitting the stump and last assist would be rewarded equal points</Text></Center>
        </>
      );
}

export default Tab2