import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Button, ButtonGroup } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark', 'Light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);


  return (
    <ButtonGroup
      onClick={toggleColorMode}
      aria-label={`Switch to ${text} mode`}
      w={'100%'}
      pl={5}
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      {...props}>
      <IconButton
        icon={<SwitchIcon />}
      />
      <Button>{text} Mode</Button>
    </ButtonGroup>

  );
};
