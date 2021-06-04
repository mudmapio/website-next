import '../styles/globals.css'
import {Fragment} from "react";

function MyApp({Component, pageProps}) {
  const Layout = Component.Layout ? Component.Layout : Fragment
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
