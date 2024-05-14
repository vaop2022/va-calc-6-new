import React, { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BsFillCalculatorFill } from "react-icons/bs";
import { ImCalculator } from "react-icons/im";
import { TbCalculator } from "react-icons/tb";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        {/* <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        /> */}
        <NavItem
          LinkUrl="/"
          navSize={navSize}
          icon={ImCalculator}
          title="Info"
          description="This is the description for the dashboard."
        />
        {/* <Link href='/calculator10'> */}
        <NavItem
          LinkUrl="/calculator10"
          navSize={navSize}
          icon={BsFillCalculatorFill}
          title="Decimal calculator"
        />
        {/* </Link> */}
        <NavItem
          LinkUrl="/calculator2"
          navSize={navSize}
          icon={TbCalculator}
          title="Binary calculator"
        />
      </Flex>
    </Flex>
  );
}