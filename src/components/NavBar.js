import "@fontsource/source-sans-pro"
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated, useScroll } from '@react-spring/web'

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Heading,
  Center,
  VStack,
  Code,
  Grid,
  Flex,
  Spacer,
  SimpleGrid,
  Image,
  Divider,
  Container,
  HStack,
  Wrap,
  WrapItem,
  GridItem,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useColorModeValue,
  ColorModeContext,
  useColorMode,
  IconButton,
  Circle,
  CircularProgress,
  Progress,
  Fade, ScaleFade, Slide, SlideFade, Tabs, TabList, TabPanels, Tab, TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Icon } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BiLogoVuejs } from 'react-icons/bi'
import { SiVtex, SiWordpress, SiJavascript, SiTypescript, SiSpring, SiChakraui } from 'react-icons/si'
import { BsKanban } from "react-icons/bs";
import { DiReact, DiHtml5, DiCss3, DiJava, DiGit, DiNodejsSmall, DiPython, DiPostgresql, DiMongodb, DiSass, DiScrum } from 'react-icons/di'
import theme from "../theme";
import { extendTheme, useStyleConfig } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import imageUrl from '../assets/profile.jpeg'
import imageAboutUrl from '../assets/about.jpeg'
// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const content = {
  imageAlt: 'Foto de Perfil',
  introduction: 'Hi, I am ',
  name: 'Gabriel Montini',
  sub: 'And this is my portfolio',
  sub2: 'About Me',
}

const components = {
  CustomBadge: {
    baseStyle: ({ colorMode }) => ({
      backgroundSize: "cover",
      backgroundPosition: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: colorMode === 'dark' ? 'url(' + url('earth') + ')' : 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(' + url('earth') + ')',
    }),
  },
}

export default function NavBar() {
  const blink = useSpring({
    from: { opacity: 0 },
    to: [{ opacity: 1 }, { opacity: 0 }],
    config: {
      duration: 1000
    },
    loop: true,
  })
  return (

      <Box height={'100%'} width={'100%'}>
        <Flex
          id="nav"
          position="sticky"
          top="0px"
          zIndex={2}
          align="center"
          justify="space-between"
          wrap="wrap"
          padding={[10]}
          bg="transparent"
          transition="top 0.3s"
        >
          <Link to="/" style={{ textDecoration: 'none' }} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
            <Flex align="center" justify-content="center">
              <svg width="70" height="34" viewBox="0 0 90 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="10" width="35" height="52" fill="#000000"></rect>
                <path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" fill="aliceblue"></path>
                <animated.rect style={blink} x="45" y="44" width="29" height="8" fill="#000000" />
              </svg>
              <Text fontWeight="semibold" fontSize={["3xl", "3xl", "4xl", "4xl"]} letterSpacing={"-.1rem"} >
                G.M.S
              </Text>
            </Flex>
          </Link>
          <Menu>
            <MenuButton
              as={IconButton}
              size="md"
              fontSize="3xl"
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='ghost'
            />
            <MenuList>
              <ColorModeSwitcher justifySelf="flex-end" />
            </MenuList>
          </Menu>

        </Flex>
      </Box>
  )
}
