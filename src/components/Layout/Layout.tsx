import Head from 'next/head'
import Navbar from '../Navbar'
import styles from './Layout.module.scss'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Custom Properties</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={styles.body}>{children}</main>
    </>
  )
}
