import DefaultLayout from '@/layout/DefaultLayout'
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo';
import SEO from '../src/constants/seoData';
import '../src/styles/globals.css'


export default function App({ Component, pageProps }) {
  return <> <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head><ChakraProvider>
      <DefaultSeo
          {...SEO}
        />

    <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>

    </ChakraProvider>
    </>


}
