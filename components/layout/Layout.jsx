import HeadAndSeo from "./HeadAndSeo";
import CTA from "./CTA";
import Footer from "./FooterTailwind";
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <>
      <HeadAndSeo/>
      <Navbar/>
      {children}
      <CTA/>
      <Footer/>
    </>
  )
}
