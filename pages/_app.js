import Layout from '../components/layout'
import "../styles/globals.css"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-roboto',
  style: ['normal'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} font-sans ` }>
      <Layout>    
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}