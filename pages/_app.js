import Layout from '../components/layout'
import "../styles/globals.css"
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400','500'],
  subsets: ['latin'],
  style: ['normal'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className }>
      <Layout>    
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}