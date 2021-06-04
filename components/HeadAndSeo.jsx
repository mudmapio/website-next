import {NextSeo} from "next-seo";
import Head from 'next/head'

export default function HeadAndSeo() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png"/>
            {/*    <title>Mudmap</title>*/}
            </Head>
                <NextSeo
                    title="Mudmap"
                    description="Cloud management and configuration for pfSense firewalls. Secure, safe and easy to configure and use. Take the hassle out of multisite firewall maintenance."
                    canonical="https://mudmap.io/"
                    openGraph={{
                        url: 'https://mudmap.io/',
                        title: 'Mudmap',
                        description: 'Cloud management and configuration for pfSense firewalls. Secure, safe and easy to configure and use. Take the hassle out of multisite firewall maintenance.'

                    }}
                    twitter={{
                        handle: '@dansult',
                        site: 'mudmap.io',
                        cardType: 'summary_large_image'
                    }}

                />
        </>
    )
}
