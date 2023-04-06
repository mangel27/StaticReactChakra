/* eslint-disable import/no-extraneous-dependencies */
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Image,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        as="header"
        bg={useColorModeValue("rgb(89,37,211)", "white")}
        color={useColorModeValue("white", "white")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex p={2} px={["90px", "0"]}>
          <Image
            alignSelf={useBreakpointValue({
              base: "center",
              md: "left",
            })}
            objectFit="contain"
            w={["140px", "230px"]}
            h={["50px", "75px"]}
            src="/assets/hp_logo.png"
          />
          <Flex display={{ base: "none", md: "flex" }} ml={700} mt={6}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        ></Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
