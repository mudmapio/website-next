import GridList from "../components/landing-page/Grid-List";
import Panels from "../components/landing-page/PanelList";
import Pricing from "../components/landing-page/Pricing";
import Banner from "../components/landing-page/Banner";
import CTA from "../components/layout/CTA";
import Footer from "../components/layout/FooterTailwind";

export default function Home() {
  return (
    <>
      <Banner/>
      <GridList/>
      <Panels/>
      <Pricing/>
      <CTA />
      <Footer />
    </>
  )
}
