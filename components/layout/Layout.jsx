import HeadAndSeo from "./HeadAndSeo";
import CTA from "./CTA";
import Footer from "./FooterTailwind";
import Navbar from "./Navbar";
import {ToastContainer} from "react-toastify";

export default function Layout({children}) {
  return (
    <>
      <HeadAndSeo/>
      <ToastContainer/>
      <Navbar/>
      {children}
      <CTA/>
      <Footer/>
    </>
  )
}
