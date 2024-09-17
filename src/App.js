import "@fontsource/source-sans-pro"
import React, { useRef } from 'react'
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import theme from "./theme";
import { extendTheme, useStyleConfig } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ParallaxContainer from './components/ParallaxContainer'
// Little helpers ...


export default function App() {
  const sla = extendTheme()

  return (
    <ChakraProvider theme={(theme, sla)}>

      <Box height={'100%'} width={'100%'}>

        <ParallaxContainer/>
        <NavBar/>
        
      </Box>

    </ChakraProvider>
  )
}
