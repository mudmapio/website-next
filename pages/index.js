import GridList from "../components/landing-page/Grid-List";
import Panels from "../components/landing-page/PanelList";
import Pricing from "../components/landing-page/Pricing";
import Banner from "../components/landing-page/Banner";

export default function Home() {
  return (
    <>
      <Banner/>
      <GridList/>
      <Panels/>
      <Pricing/>
    </>
  )
}
