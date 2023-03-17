import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/components/Download/Download";


const DefaultLayout = ({ children }) => {
  return (
    <Box margin="0" bg="purple.500" h="100vh" transition="0.5s ease-out">
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
      <Box id="myPopup" display="none" position="sticky" bottom="0" w="full" >
        <Download />
      </Box>
    </Box>
  );
};

if (typeof document !== 'undefined') {
  const popupWindow = document.getElementById('myPopup'); HTMLElement | null;

  if (popupWindow) {
      window.addEventListener('scroll', () => {
          if (window.pageYOffset > 0) {
              popupWindow.style.display = 'block';
          } else {
              popupWindow.style.display = 'none';
          }
      });
  }
}
export default DefaultLayout;
