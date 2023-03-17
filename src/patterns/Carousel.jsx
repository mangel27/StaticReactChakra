import React from "react";
import Slider from "react-slick";
import { Box, Center } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides, settings, ...rest }) => {
  const defaultSettings = {
    ...settings,
  };

  return (
    <Box {...rest}>
      <Slider {...defaultSettings}>
        {slides.map((slide, index) => (
          <Center w="200px" key={index} height="100%">
            {slide}
          </Center>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
