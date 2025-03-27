import React, { useEffect } from 'react';

import {

  Box,

  Flex,

  Heading,

  Text,

  VStack,

  Center

} from '@chakra-ui/react';

const GeoRestrictionOverlay = () => {

  // Add effect to disable scrolling when component mounts

  useEffect(() => {

    // Save original overflow style

    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Disable scrolling

    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts

    return () => {

      document.body.style.overflow = originalStyle;

    };

  }, []);
 
  return (
<Box

      position="fixed"

      top="0"

      left="0"

      right="0"

      bottom="0"

      zIndex="overlay"

      display="flex"

      alignItems="center"

      justifyContent="center"

      bgColor="rgba(0, 0, 0, 0.7)"

      backdropFilter="blur(4px)"

      style={{

        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))",

        backgroundSize: "cover",

        backgroundPosition: "center"

      }}
>
<VStack

        maxWidth="md"

        px={6}

        py={8}

        mx={4}

        textAlign="center"

        color="white"

        spacing={4}
>
<Center mb={2}>
<Text fontSize="5xl" color="yellow.400">⚠️</Text>
</Center>
<Heading

          as="h2"

          mb={6}

          fontSize="3xl"

          fontWeight="bold"
>

          Halaplay is Not Available in Your Location
</Heading>
<Text fontSize="lg">

          This website is currently unavailable in your region.
</Text>
<Text fontSize="lg" mt={4}>

          We appreciate your support and apologize for any inconvenience. Thank you!
</Text>
</VStack>
</Box>

  );

};

export default GeoRestrictionOverlay;
 