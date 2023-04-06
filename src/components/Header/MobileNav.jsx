/* eslint-disable import/no-extraneous-dependencies */
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { NAV_ITEMS } from "@/constants/sharedData";

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify="center"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
        fontWeight={isActive ? 900 : 500}
        fontSize={isActive ? 40 : 'md'}
      >
        <Text
          color={useColorModeValue("white", "gray.100")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align="start"
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MobileNav = () => {

  return (
    <Stack
      bg={useColorModeValue("rgb(89,37,211)", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};


export default MobileNav;
