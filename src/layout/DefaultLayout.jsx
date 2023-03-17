import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const DefaultLayout = ({ children }) => {
  return (
    <Box margin="0" bg="purple.500" h="100vh" transition="0.5s ease-out">
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};
export default DefaultLayout;
