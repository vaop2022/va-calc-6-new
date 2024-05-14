import { Box, BoxProps, Link, Flex } from "@chakra-ui/react";

export const Footer = (props: BoxProps) => {
  const vaopUrl =
    "https://vaop.notion.site/Main-c505f1e727bd4779b097f7fd203024d6";
  return (
    <Flex minH="20" alignContent="center" justifyContent="center">
      <Link href={vaopUrl} display="flex" alignItems="center">
        <img src="images/v-agent-32x32.png" width={32} height={32} />
        Powered by VAOP
      </Link>
    </Flex>
  );
};