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
        title="Mudmap"
        description="Cloud management and configuration for pfSense firewalls. Secure, safe and easy to configure and use. Take the hassle out of multisite firewall maintenance."
        canonical="https://mudmap.io/"
        openGraph={{
          url: 'https://mudmap.io/',
          title: 'Mudmap',
          description: 'Cloud management and configuration for pfSense firewalls. Secure, safe and easy to configure and use. Take the hassle out of multisite firewall maintenance.',
          images: [
            {
              url: 'https://mudmap.io/mudmap-card.png',
              width: 800,
              height: 600,
              alt: "Mudmap OpenGraph Card Image"
            }
          ]

        }
        }
        twitter=
          {{
            handle: '@dansult',
            site: '@dansult',
            cardType: 'summary_large_image',
            image: 'https://mudmap.io/mudmap-card.png'
          }}
      />
    </>
  )
}
