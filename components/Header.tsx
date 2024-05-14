import {
    Avatar,
    Box,
    ButtonGroup,
    Container,
    HStack,
    Icon,
    Text,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import { FiBell, FiSearch } from "react-icons/fi";
  import { Logo } from "./Logo";
  
  export const Header = () => (
    <Box as="section" borderBottomWidth="1px" bg="bg.surface" minH={50}>
      <HStack justify="space-between">
        <HStack>
          <img src="images/v-agent-32x32.png" width={32} height={32} />{" "}
          <Text>VAOP</Text>
        </HStack>
  
        <HStack spacing={{ base: "2", md: "4" }}>
          <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
        </HStack>
      </HStack>
    </Box>
  );