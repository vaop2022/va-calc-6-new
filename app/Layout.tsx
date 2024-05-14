import { Flex, Container, Stack, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignContent="center"
      maxW={1200}
      mx="auto"
    >
      <Header />
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", lg: "16" }}
      >
        <Sidebar />
        {children}
      </Stack>
      <Footer />
    </Box>
  );
}