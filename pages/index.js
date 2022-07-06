import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import PizzaList from '../components/PizzaList'

export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza Shop in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageSlider />
      <PizzaList />
    </div>
  )
}
