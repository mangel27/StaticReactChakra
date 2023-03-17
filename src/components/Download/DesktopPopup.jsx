import {
    Box,
    Flex,
    SimpleGrid,
    useColorModeValue,
    Image,
    Text,
    Link
} from "@chakra-ui/react";


const Desktop = () => {
    return (
        <SimpleGrid columns={1} spacing={0} bg="blue.900" w="100%">
            <Flex justifyContent={"center"}>
                <Box
                    pl={4}
                    p={6}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Link><Image src="assets/img/playstore.png" w={140} p={1}></Image></Link>
                </Box>
                <Box
                    pt={4}
                    pl={4}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Text fontSize={'sm'} fontWeight={"medium"} align="center">
                        Its always better with App
                    </Text>
                    <Text fontSize={'lg'} fontWeight={"medium"}>
                        Download App & Get Rs250 off on League Join
                    </Text>
                </Box>
                <Box
                    pl={4}
                    pt={4}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Link><Image src="assets/img/istore.png" w={140} p={1}></Image></Link>
                </Box>
            </Flex>
        </SimpleGrid>
    );
};
export default Desktop;
