import {NextSeo} from "next-seo";
import Head from 'next/head'

export default function HeadAndSeo() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png"/>
        <title>Mudmap | Centralised Management for pfSense - Manage all your
          devices in the cloud.</title>
      </Head>
      <NextSeo
        title="Mudmap | pfSense Central Management in the cloud"
        description="Cloud management and configuration for pfSense firewalls. Secure, safe and easy to configure and use. Take the hassle out of multisite firewall maintenance."
        canonical="https://mudmap.io/"
        openGraph={{
          url: 'https://mudmap.io/',
          title: 'Mudmap | pfSense Central Management',
          description: 'Cloud management and configuration for pfSense firewalls. Secure, safe and easy to configure and use. Take the hassle out of multisite firewall maintenance.',
          images: [
            {
              url: 'https://mudmap.io/mudmap-card.png',
              width: 800,
              height: 600,
              alt: "Mudmap OpenGraph Card Image"
            }
          ],
          site_name: "mudmap.io"
        }}
        twitter={{
            handle: '@dansult',
            site: 'mudmap.io',
            cardType: 'summary_large_image',
          }}
      />
    </>
  )
}
