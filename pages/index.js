import Head from 'next/head'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GridList from "../components/Grid-List";
import CTA from "../components/CTA";
import Footer from "../components/FooterTailwind";
import FooterNew from "../components/FooterNew";
import Panels from "../components/Panel";
// import Panels from "../components/PanelList";
import HeadAndSeo from "../components/HeadAndSeo";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <>
        <HeadAndSeo />
      <Navbar />
      <Hero />
      <GridList />
        <Panels />
        <Pricing />
      <CTA />
        <Footer />
      {/*<FooterNew />*/}
</>
  )
}
