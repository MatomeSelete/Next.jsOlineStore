import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (

    <>
    <Head>
        <title> Home </title>
        <meta name="keywords" content='home' />
      </Head>

    <div className={styles.container}>
      <h1 className='title'> How to use it </h1>

      <p>
        fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format.
         you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!

      </p>
    </div>

    </>
  )
}
