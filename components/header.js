import { chakra, useColorModeValue, Flex, Button, HStack } from "@chakra-ui/react";
import Link from 'next/link'
import Logo from '../components/logo'
import React from 'react'

const Header = () => {
    const bg = useColorModeValue("white", "gray.800");
    const hoverColor = useColorModeValue("gray.800", "white");
    const ref = React.useRef();
    return (
        <chakra.header
        bg={bg}
        ref={ref}
        w="full"
        borderTopColor="brand.400"
        borderBottomWidth={2}
        borderBottomColor={useColorModeValue("gray.400", "gray.900")}
        >
          <Flex w="full" h="full" alignItems="center" justifyContent="space-between">
            <Flex align="flex-start" padding="15px">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </Flex>
            <Flex align="center">
              <HStack>
                <Button
                variant="navbar"
                _hover={{ color: hoverColor }}
                _focus={{ boxShadow: "none" }}
                >
                  Features
                </Button>
                <Button
                variant="navbar"
                _hover={{ color: hoverColor }}
                _focus={{ boxShadow: "none" }}
                >
                  Download
                </Button>
                <Button
                variant="navbar"
                _hover={{ color: hoverColor }}
                _focus={{ boxShadow: "none" }}
                >
                  Community
                </Button>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: "none", md: "flex" }} padding="15px">
                <Button  variant="ghost" size="sm">
                  Discord ICON
                </Button>
                <Button  variant="ghost" size="sm">
                  Patreon ICON
                </Button>
              </HStack>
            </Flex>
          </Flex>
        </chakra.header>
    )
}

export default Header