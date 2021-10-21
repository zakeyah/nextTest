// import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../components/styles/theme'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Nav/>
     <Component {...pageProps} />
     </ThemeProvider>
  )
}

export default MyApp
