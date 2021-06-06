import '../styles/globals.css'
import {Fragment} from "react";
import PlausibleProvider from "next-plausible";

function MyApp({Component, pageProps}) {
  const Layout = Component.Layout ? Component.Layout : Fragment
  return (
    <PlausibleProvider domain="mudmap.io">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}

export default MyApp
