import Head from 'next/head'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GridList from "../components/Grid-List";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FooterNew from "../components/FooterNew";

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <GridList />
      <CTA />
      <FooterNew />

</>
    // </div>
  )
}
