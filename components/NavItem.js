import { useRouter } from "next/router";
import {
  Flex,
  Text,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
} from "@chakra-ui/react";

export default function NavItem({
  icon,
  LinkUrl,
  title,
  description,
  navSize,
}) {
  const router = useRouter(); // get current route
  // Determine if the current page matches the LinkUrl
  const isActive = router.pathname === LinkUrl;

  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          href={LinkUrl}
          backgroundColor={isActive && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <HStack justify="flex-start">
              <Icon
                as={icon}
                fontSize="xl"
                color={isActive ? "#82AAAD" : "gray.500"}
              />
              <Text
                ml={5}
                display={navSize == "small" ? "none" : "flex"}
                align="left"
              >
                {title}
              </Text>
            </HStack>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}