import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { TiDownload } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImTicket } from "react-icons/im";
const FeatureItem = [
  {
    statNumber: "10 Million+",
    statLabel: "Registered Users",
    icon: <TiDownload size="30px" />,
  },
  {
    statNumber: "10 Lakh+",
    statLabel: "in Winning daily",
    icon: <HiOutlineUserGroup size="30px" />,
  },
  {
    statNumber: "100+",
    statLabel: "Everyday Contest",
    icon: <ImTicket size="30px" />,
  },
];

const FeatureCard = (props) => {
  const { statNumber, statLabel, icon } = props;
  return (
    <Stat px={{ base: 2, md: 6 }} py={"5"} shadow={"xl"}>
      <Flex justifyContent={"center"}>
        <Box my={"auto"} color={useColorModeValue("white", "gray.200")}>
          {icon}
        </Box>
        <Box
          pl={{ base: 2, md: 4 }}
          color={useColorModeValue("white", "gray.200")}
        >
          <StatNumber fontSize={["sm", "2xl"]} fontWeight={"medium"}>
            {statNumber}
          </StatNumber>
          <StatLabel fontSize={["10px", "md"]} fontWeight={"medium"}>
            {statLabel}
          </StatLabel>
        </Box>
      </Flex>
    </Stat>
  );
};
const Features = () => {
  return (
    <SimpleGrid columns={3} spacing={0} bg="blue.900" w="100%">
      {FeatureItem.map((item, index) => (
        <FeatureCard
          key={index + "feature"}
          statNumber={item.statNumber}
          statLabel={item.statLabel}
          icon={item.icon}
        />
      ))}
    </SimpleGrid>
  );
};
export default Features;
