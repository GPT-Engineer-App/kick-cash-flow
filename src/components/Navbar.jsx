import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">Sneaker Accounting</Heading>
        <Flex alignItems="center">
          <NavLink to="/" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Home</NavLink>
          <NavLink to="/about" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>About</NavLink>
          <NavLink to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;