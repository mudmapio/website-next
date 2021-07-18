import '../styles/globals.css'
import {Fragment} from "react";
import PlausibleProvider from "next-plausible";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

function MyApp({Component, pageProps}) {
  const Layout = Component.Layout ? Component.Layout : Fragment
  return (
    <PlausibleProvider domain="mudmap.io">
      <Layout>
        <ToastContainer/>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}

export default MyApp
