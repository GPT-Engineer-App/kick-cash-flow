import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="blue.500" color="white" py={4} mt={8}>
      <Text textAlign="center">© 2023 Sneaker Accounting. All rights reserved.</Text>
      <Text textAlign="center">
        <Link href="/privacy" color="white" mr={4}>Privacy Policy</Link>
        <Link href="/terms" color="white">Terms of Service</Link>
      </Text>
    </Box>
  );
};

export default Footer;