import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultSEO } from "@/constants/seoData";
import SEOContainer from "@/SEOContainer";
const DefaultLayout = ({ children }) => {
  return (
    <Box margin="0" transition="0.5s ease-out">
        <SEOContainer seoData={defaultSEO} />
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};
export default DefaultLayout;
