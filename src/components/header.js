import React from "react";
import { Box, Text, Flex, VStack, Spacer, ChakraProvider, theme, } from "@chakra-ui/react";
import {
    Link
  } from "react-router-dom";
  import { Logo } from '../Logo';
function Header() {
  return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="transparent"
        paddingLeft="60px"
        >
        <Flex align="center" mr={5}>
            <Text fontWeight="semibold" ml={2} fontSize="3xl" letterSpacing={"-.1rem"} color="chakra.20">
            Chakra Data
            </Text>
        </Flex>
        <Spacer/>
            <VStack align="left " color="chakra.20" >
                <Box h="18px" >
                    <Link to="/login">
                    <Text fontWeight="bold" as="button"  color="chakra.500">
                        LOGIN
                    </Text>
                    </Link>
                </Box>
                <Box h="18px">
                    <Link to="/registry">
                    <Text fontWeight="bold" as="button" color="chakra.500">
                        CADASTRO
                    </Text>
                    </Link>
                </Box>
                <Box h="18px">
                    <Link to="/support"> 
                    <Text fontWeight="bold" as="button" >
                        SUPORTE
                    </Text>
                    </Link>
                </Box>
            </VStack>
        
        </Flex>
  );
};

export default Header;