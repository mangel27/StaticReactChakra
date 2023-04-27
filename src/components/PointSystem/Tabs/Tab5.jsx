import React from 'react'
import { Center, Text, SimpleGrid, Box, Stack } from "@chakra-ui/react";

const Tab5 = () => {
    const BattingPoints = [
        { text: "For every run scored"},
        { text: "For every 6 hit"},
        { text: "For every 4 hit"},
        { text: "For 50 runs"},
        { text: "For 100 runs"},
        { text: "For 200 runs"},
        { text: "For 300 runs"},
        { text: "For Duck (except bowlers)"},
        { text: "0-50 Balls Played"},
        { text: "51-100 Balls Played"},
        { text: "101-150 Balls Played"},
        { text: "150-200 Balls Played"},
        { text: "200 Above"},
        { text: "Strike rate 0 to 19.99"},
        { text: "Strike rate 20 to 29.99"},
        { text: "Strike rate 30 to 49.99"},
        { text: "Strike rate 50 to 69.999"},
        { text: "Strike rate 70 to 99.99"},
        { text: "Strike rate 100.00 or more"},
      ];
    
      const BattingPoints1 = [
        { text: "1 Points"},
        { text: "4 Points"},
        { text: "2 Points"},
        { text: "10 Points"},
        { text: "20 Points"},
        { text: "25 Points"},
        { text: "30 Points"},
        { text: "40 Points"},
        { text: "-5 Points"},
        { text: "0 Points"},
        { text: "5 Points"},
        { text: "10 Points"},
        { text: "15 Points"},
        { text: "20 Points"},
        { text: "-10 Points"},
        { text: "-5 Points"},
        { text: "0 Points"},
        { text: "5 Points"},
        { text: "10 Points"},
        { text: "15 Points"},
      ];
    
      const BowlingPoints = [
        { text: "For every wicket taken"},
        { text: "For 3-wicket haul"},
        { text: "For 4-wicket haul"},
        { text: "For 5-wicket haul"},
        { text: "For 6-wicket haul"},
        { text: "For 7-wicket haul"},
        { text: "For 8-wicket haul"},
        { text: "For 9-wicket haul"},
        { text: "For 10-wicket haul"},
        { text: "Economy rate 0 to 1.00"},
        { text: "Economy rate 1.01 to 2.00"},
        { text: "Economy rate 2.01 to 3.00"},
        { text: "Economy rate 3.01 to 5.00"},
        { text: "Economy rate 5.01 or 7.00"},
        { text: "Above 7 runs"},
        { text: "Maiden Over"},
        { text: "Bowled/LBW"},
      ];
    
      const BowlingPoints1 = [
        { text: "20 Points"},
        { text: "15 Points"},
        { text: "20 Points"},
        { text: "25 Points"},
        { text: "30 Points"},
        { text: "35 Points"},
        { text: "40 Points"},
        { text: "45 Points"},
        { text: "50 Points"},
        { text: "15 Points"},
        { text: "10 Points"},
        { text: "5 Points"},
        { text: "0 Points"},
        { text: "-5 Points"},
        { text: "-10 Points"},
        { text: "3 Points"},
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
            <Center><Text fontSize={'sm'} p={5}>* * Points will be given for each Innings not complete Test match</Text></Center>
            <Center><Text fontSize={'sm'} p={5}>* For a Run Out fielder hitting the stump and last assist would be rewarded equal points</Text></Center>
        </>
      );
}

export default Tab5