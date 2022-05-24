import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from '../components/theme'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={Theme}>
      <Layout router={router}>
          <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp