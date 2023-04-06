import DefaultLayout from '@/layout/DefaultLayout'
import { ChakraProvider } from '@chakra-ui/react'
import '../src/styles/globals.css'


export default function App({ Component, pageProps }) {
  return <ChakraProvider>
    <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>

  </ChakraProvider>
}
