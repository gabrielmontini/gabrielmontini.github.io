import "@fontsource/source-sans-pro"
import React from 'react';
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
  Fade, ScaleFade, Slide, SlideFade
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Icon } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import theme from "./theme";
import { extendTheme, useStyleConfig } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import imageUrl from './assets/profile.jpeg'
import imageAboutUrl from './assets/about.jpeg'
import imageBgUrl from './assets/bg.jpeg'

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
      backgroundImage: colorMode === 'dark' ? 'url(' + imageBgUrl + ')' : 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(' + imageBgUrl + ')',
    }),
  },
}

function App() {

  const sla = extendTheme({ components })

  function CustomBadge(props) {
    const { size, variant, ...rest } = props
    const styles = useStyleConfig('CustomBadge', { size, variant })
    return <Box sx={styles} {...rest} />
  }

  return (
    <ChakraProvider theme={(theme, sla)}>
      <Flex
        id="nav"
        position={"sticky"}
        top="0px"
        zIndex={2}
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={[10, 10, 14, 14]}
        bg="transparent"
      >
        <Flex>
          <Link to="/">
            <Text as="button" fontWeight="semibold" fontSize={["3xl", "3xl", "4xl", "4xl"]} letterSpacing={"-.1rem"} >
              G.M.S
            </Text>
          </Link>
        </Flex>
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

      <Wrap id="intro" justify={'center'} mt={5} mb={20} >

        <ScaleFade in={true} delay={1}>
          <Image
            boxSize={['xs', 'xs', 'xs', 'xs']}
            objectFit='cover'
            position={'relative'}
            zIndex={1}
            boxShadow='2xl'
            src={imageUrl}
            alt={content.imageAlt}
            borderRadius="full" />
        </ScaleFade>


        <Container zIndex={0}>
          <VStack alignItems={'flex-start'} textAlign={'left'}>
            <SlideFade in={true} offsetY={100} delay={1}>
              <Heading size="3xl" fontWeight="lighweight" >{content.introduction}<br /><strong>{content.name}</strong></Heading>
            </SlideFade>
            <SlideFade in={true} offsetY={100} delay={1.5}>
              <Text fontSize={'2xl'} fontWeight="light">{content.sub}</Text>
            </SlideFade>
          </VStack>
          <Divider orientation="horizontal" />
        </Container>
        <Center position={"absolute"} w='100%' pt={200}>
          <Container h={14} bg={'blue.100'} ></Container>
        </Center>

        <Center position={['revert', 'revert', "absolute", "absolute"]} w='100%' pt={[0, 0, 200, 200, 200]} >
          <Container h={14} bg={'blue.100'}  >
            <HStack justify={'flex-end'} h='100%'>
              <Link href='https://www.linkedin.com/in/gabriel-montini-2a3852161/' isExternal>
                <ScaleFade in={true} delay={0.5} unmountOnExit={true} initialScale='0.1'>
                  <Icon as={AiFillLinkedin} w={8} h={8} color='blue.400' />
                </ScaleFade>

              </Link>
              <Link href='https://github.com/gabrielmontini' isExternal>

                <ScaleFade in={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                  <Icon as={AiFillGithub} w={8} h={8} color='blue.400' />
                </ScaleFade>

              </Link>
            </HStack>
          </Container>
        </Center>

      </Wrap>

      <CustomBadge align={'center'} >
        <Grid
          p={10}
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={10}
        >
          <GridItem rowSpan={2} colSpan={3} >
            <Text fontSize={'5xl'} borderBottom="1px">Skills</Text>
          </GridItem>

          <GridItem colSpan={[3, 3, 3, 1]} border='1px' borderRadius={'50px'}>
            <Stack direction={'row'} justify={'center'} padding={10}>
              <Box pl={10} pr={10}>
                <Text fontWeight={'bold'} fontSize={'3xl'} borderBottom="1px">Front-End</Text>
                <Box pt={10}>
                  <Text fontSize={'xl'}>HTML</Text>
                  <Text fontSize={'xl'}>CSS</Text>
                  <Text fontSize={'xl'}>Javascript</Text>
                  <Text fontSize={'xl'}>ReactJS</Text>
                  <Text fontSize={'xl'}>WordPress</Text>
                  <Text fontSize={'xl'}>VTEX</Text>
                </Box>
              </Box>
            </Stack>
          </GridItem>

          <GridItem colSpan={[3, 3, 3, 1]} border='1px' borderRadius={'50px'}>
            <Stack direction={'row'} justify={'center'} padding={10}>
              <Box pl={10} pr={10}>
                <Text fontWeight={'bold'} fontSize={'3xl'} borderBottom="1px">Back-End</Text>
                <Box pt={10}>
                  <Text fontSize={'xl'}>NodeJS</Text>
                  <Text fontSize={'xl'}>Python</Text>
                  <Text fontSize={'xl'}>Java</Text>
                  <Text fontSize={'xl'}>PHP</Text>
                  <Text fontSize={'xl'}>MySQL</Text>
                  <Text fontSize={'xl'}>MongoDB</Text>
                </Box>
              </Box>
            </Stack>
          </GridItem>

          <GridItem colSpan={[3, 3, 3, 1]} border='1px' borderRadius={'50px'}>
            <Stack direction={'row'} justify={'center'} padding={10}>
              <Box pl={10} pr={10}>
                <Text fontWeight={'bold'} fontSize={'3xl'} borderBottom="1px">Mobile</Text>
                <Box pt={10}>
                  <Text fontSize={'xl'}>React Native</Text>
                  <Text fontSize={'xl'}>Swift</Text>
                  <Text fontSize={'xl'}>Kotlin</Text>
                  <Text fontSize={'xl'}>Dart</Text>
                </Box>
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </CustomBadge>


      <Wrap id="intro" mb={20} mt={20} justify={'center'}  >
        <Container >
          <VStack align='flex-start'>
            <Heading size="3xl" fontWeight="lighweight" >{content.sub2}</Heading>
            <Divider orientation="horizontal" />
          </VStack>
        </Container>

        <Box pt={[5, 10, 10, 0, 0]}>
          <Image
            boxSize={['xs', 'xs', 'xs', '2xs', 'xs']}
            objectFit='cover'
            position={'relative'}
            zIndex={1}
            boxShadow='xl'
            src={imageAboutUrl}
            alt={content.imageAlt}
            borderRadius='full' />
        </Box>

        <Box w={'100%'} position={['relative', 'relative', 'relative', 'absolute', 'absolute']} pt={20} pr={[0, 0, 0, 200, 250]}>
          <Container bg={'blue.100'} >
            <Flex alignItems={'center'} p={2} pl={3} >
              <Text fontSize={'2xl'} fontWeight="lightweight">Software developer based in Curitiba</Text>
            </Flex>
          </Container>
          <Container >
            <Text fontSize={'lg'} fontWeight="light" p={3}>Hello, thanks for checking out!
              <br />
              My name is Gabriel Montini da Silva and I'm software developer who's been working since 2021.
              With experience on both Front and Back-end development I've been yearning to enter the international market to found a company with the same values as mine and to develop my skills.
              <br />
              Since university I've been working with both Web and App development.
            </Text>
          </Container>
        </Box>


      </Wrap>
    </ChakraProvider>
  );
}

export default App;
