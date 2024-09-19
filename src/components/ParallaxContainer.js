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
import { Icon } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BiLogoVuejs } from 'react-icons/bi'
import { SiVtex, SiWordpress, SiJavascript, SiTypescript, SiSpring, SiChakraui } from 'react-icons/si'
import { BsKanban } from "react-icons/bs";
import { DiReact, DiHtml5, DiCss3, DiJava, DiGit, DiNodejsSmall, DiPython, DiPostgresql, DiMongodb, DiSass, DiScrum } from 'react-icons/di'
import { extendTheme, useStyleConfig } from '@chakra-ui/react'
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

export default function ParallaxContainer() {
    const parallax = useRef(<Parallax />)
    const containerRef = React.useRef()
    const { scrollYProgress } = useScroll({
        container: containerRef,
        onChange: (scrollYProgress => {
            console.log(scrollYProgress)
        })
    })
    function CustomBadge(props) {
        const { size, variant, ...rest } = props
        const styles = useStyleConfig('CustomBadge', { size, variant })
        return <Box sx={styles} {...rest} />
    }

    const CustomTag = ({ icon, text }) => (
        <>

            <WrapItem>
                <ParallaxLayer speed={0.3}>
                    <ScaleFade colSpan={[3, 3, 3, 1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }} in={true} reverse={true} delay={0.6} initialScale='0.1'>
                        <Icon as={icon} w={10} h={10} color='chakra.10' />
                        <Text fontSize={'xl'}>{text}</Text>
                    </ScaleFade>
                </ParallaxLayer>
            </WrapItem>
        </>
    )
    return (
        <Parallax style={{ height: '100vh', top: "0px", overflowY: 'scroll' }} ref={parallax} pages={3}>

            <ParallaxLayer offset={1} speed={1}>
                <Box w='100%' h={'150%'} _dark={{ backgroundColor: '#29485c' }} _light={{ backgroundColor: '#87BCDE' }} />
            </ParallaxLayer>
            
            <ParallaxLayer offset={2} speed={1}>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                    backgroundImage: url('stars', true),
                    backgroundSize: 'cover',
                }}
            />

            <ParallaxLayer offset={0.25} speed={0.1} >
                <Wrap id="intro" justify={'center'} mt={5} mb={[20]} >

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

                    <Container>
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

                    <Center position={['revert', 'revert', "absolute", "absolute"]} w='100%' pt={[0, 0, 500, 200, 200]} >
                        <Container h={14} _dark={{ backgroundColor: '#29485c' }} _light={{ backgroundColor: '#87BCDE' }}  >
                            <HStack justify={'flex-end'} h='100%'>

                                <Link href='https://www.linkedin.com/in/gabrielmontini/' isExternal>
                                    <ScaleFade in={true} delay={0.5} unmountOnExit={true} initialScale='0.1'>
                                        <Icon as={AiFillLinkedin} w={8} h={8} color='chakra.10' transition='all .2s ease-in-out' _hover={{ color: 'blue.500' }} />
                                    </ScaleFade>
                                </Link>
                                <Link href='https://github.com/gabrielmontini' isExternal >
                                    <ScaleFade in={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                                        <Icon as={AiFillGithub} w={8} h={8} color='chakra.10' transition='all .2s ease-in-out' _hover={{ color: 'blue.500' }} />
                                    </ScaleFade>
                                </Link>

                            </HStack>
                        </Container>
                    </Center>

                </Wrap>
            </ParallaxLayer>
            {/* <ParallaxLayer sticky={{ start: 0, end: 3 }} style={{ marginTop: '5%' }}>
            <Tabs marginLeft={['30%', '70%', '80%', '95%']} paddingTop='15%' marginTop={['180%', '5%']} position="fixed" variant='unstyled' size='md'>
              <TabList flexDirection={['row', "column"]} style={{ listStyle: 'none' }} >
                <Tab onClick={() => parallax.current.scrollTo(0)} _hover={{ borderRight: '4px' }} _focus={{ outline: 'none' }}
                  _selected={{ borderRight: '4px' }} borderRight="1px" align="center" justify={'center'}>
                  <Text _hover={{ color: 'white' }}>00</Text></Tab>
                <Tab onClick={() => parallax.current.scrollTo(1)} _hover={{ borderRight: '4px' }} _focus={{ outline: 'none' }}
                  _selected={{ borderRight: '4px' }} borderRight="1px" align="center" justify={'center'}>
                  <Text _hover={{ color: 'white' }}>01</Text></Tab>
                <Tab onClick={() => parallax.current.scrollTo(2)} _hover={{ borderRight: '4px' }} _focus={{ outline: 'none' }}
                  _selected={{ borderRight: '4px' }} borderRight="1px" align="center" justify={'center'}>
                  <Text _hover={{ color: 'white' }}>02</Text></Tab>
              </TabList>
            </Tabs>
          </ParallaxLayer> */}
            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={2.5}
                speed={-0.4}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <CustomBadge w={['100%', '50%']} h={['100%', '50%']} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={0.75}
                speed={0.55}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3,
                    height: '5%'
                }}
            >
                <img src={url('cloud')} style={{ width: '12%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ width: '12%', marginLeft: '-5%' }} />
            </ParallaxLayer>

            <ParallaxLayer
            offset={0.8}
                speed={0.1}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    opacity: 0.4
                }}>
                <img src={url('server')} style={{ width: '20%', marginLeft: '5%', marginBottom: '10%' }} />
                <img src={url('bash')} style={{ width: '40%', marginLeft: '35%', marginTop: '15%' }} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={-0.3}
                style={{
                    backgroundSize: '50%',
                    backgroundPosition: 'center',
                    opacity: 0.4
                }}
            />
            <ParallaxLayer
                offset={1}
                speed={0.1}
                >

                <Box _light={{ color: ['#F4F4F4'] }}>
                <Text fontSize={'5xl'} marginTop={['10%', '10%','20%', '10%']} align={'center'}>Skills & Experience</Text>
                <Box p={10}>
                    <Text fontSize={['xl','xl','2xl','2xl']} align={['left','center']}>My main expertise is analyzing and developing new techincal solutions for your company. With a FullStack background on both Web and App development and experience working horizontally through multiple sectors of a company, specially on the finances market. </Text>
                </Box>
                </Box>

                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={5}
                    _light={{ color: ['#F4F4F4'] }}
                    overflowX={['scroll', 'scroll','scroll',  'hidden']}
                    overflowY={'hidden'}
                >
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} initialScale='0.1'>
                            <Icon as={DiScrum} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>Scrum</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} initialScale='0.1'>
                            <Icon as={DiGit} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>Git</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={DiReact} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>ReactJS</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={SiVtex} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>VTEXIO</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={SiTypescript} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>Typescript</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={DiNodejsSmall} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>Node</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={SiSpring} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>SpringBoot</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={DiPython} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>Python</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={DiPostgresql} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>PostgreSQL</Text>
                        </ScaleFade>
                    </GridItem>
                    <GridItem colSpan={[1]} justify={'center'} padding={10} align={'center'} transition='all .2s ease-in-out' _hover={{ transform: 'scale(1.1)' }}>
                        <ScaleFade in={true} reverse={true} delay={0.6} unmountOnExit={true} initialScale='0.1'>
                            <Icon as={DiMongodb} w={10} h={10} color='chakra.10' />
                            <Text fontSize={'xl'}>MongoDB</Text>
                        </ScaleFade>
                    </GridItem>
                </Grid>

            </ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={-0}>
                <Box id="intro" mb={[0,20]} mt={[0,20]} >
                    <Container >
                        <Heading size="3xl" fontWeight="lighweight" align={'center'}>{content.sub2}</Heading>
                        <Divider orientation="horizontal" />
                    </Container>
                    <Stack direction={['column', 'column','column', 'row']} mt={[0,10]} mb={10} p={10} justify={'center'} align={'center'}>
                        <Image
                            boxSize={['2xs', 'xs', 'xs', '2xs', 'xs']}
                            objectFit='cover'
                            zIndex={1}
                            boxShadow='xl'
                            src={imageAboutUrl}
                            alt={content.imageAlt}
                            borderRadius='full' />
                        <Stack direction={['column']}>
                            <Container borderRadius={10} _dark={{ backgroundColor: 'transparent' }} _light={{ backgroundColor: '#87BCDE' }} >
                                <Flex alignItems={'center'} p={2} pl={[0,3]} >
                                    <Text fontSize={'2xl'} fontWeight="lightweight">IT Business Analyst based in Curitiba</Text>
                                </Flex>
                            </Container>
                            <Container borderRadius={10} _dark={{ backgroundColor: ['#29485c'] }} _light={{ backgroundColor: ['#87BCDE'] }} >
                                <Text fontSize={['lg','lg','2xl','lg']} fontWeight="light" p={3}>
                                    Hello, thanks for checking out!
                                    <br />
                                    I've started as a software developer on 2021 and since 2023 I'm helping companies implementing new technologies into multi-sector business.
                                    With experience on both Front and Back-end development and now further on the business analysis, I've been yearning to enter the international market and find an organization with the same values as mine to develop my skills.
                                    <br />
                                </Text>
                            </Container>
                        </Stack>
                    </Stack>
                </Box>
            </ParallaxLayer>
        </Parallax>
    )
}