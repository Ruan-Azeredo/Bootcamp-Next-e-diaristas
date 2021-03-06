import '@styles/globals.css'
import { ThemeOptions } from '@material-ui/core'
import theme from 'ui/themes/theme'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/system'
import Header from 'ui/components/Surface/Header/Header'
import Footer from 'ui/components/Surface/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-diarista</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/font/tw-icons/css/treinaweb-icons.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MyApp
