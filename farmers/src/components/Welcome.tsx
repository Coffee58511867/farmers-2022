import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Hide,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Crop",
    href: "/dashbord/crop",
  },
  {
    label: "Disease",
    href: "/",
  },
  {
    label: "Fertilizer",
    href: "/",
  },
  {
    label: "Government Schemes",
    href: "/",
  },
  {
    label: "Weather",
    href: "/",
  },

 

];

function DesktopNav() {
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("white", "white");

  return (
    <Stack direction="row" spacing={4}>
      <Center>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Link
                  p={2}
                  m={4}
                  href={navItem.href ?? "#"}
                  fontSize="lg"
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Center>
    </Stack>
  );
}

function MobileNavItem({ label, children, href }: NavItem) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={500} color="white">
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
}

function MobileNav() {
  return (
    <Stack bg="#1C6B28" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          label={navItem.label}
          href={navItem.href}
        />
      ))}
    </Stack>
  );
}
export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useColorModeValue("white", "white");
  const linkHoverColor = useColorModeValue("white", "white");
  return (
    <Box>
      <Flex
        bg="#1C6B28"
        data-testid="navbar"
        color={useColorModeValue("white.900", "white")}
        minH="65px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            color="whiteAlpha.900"
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex justifyContent="space-between" w="full">
          <Hide above="sm">
            <Spacer />
          </Hide>
          <Text
            fontFamily="heading"
            fontSize="lg"
            fontWeight={500}
            mr={{ base: "2rem" }}
            data-testid="logo"
            color="white"
            align="end"
          >
            Green AI
          </Text>
          <Center>
            <Flex display={{ base: "none", md: "flex" }}>
              <DesktopNav />
            </Flex>
          </Center>
          <Box>
            <Link
              href="/logout"
              fontSize="lg"
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              Logout
            </Link>
          </Box>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
