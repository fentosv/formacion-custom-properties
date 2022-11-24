import '../styles/normalize.css'
import '../styles/reset.local.css'
import '../styles/var.scss'
import '../styles/App.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
