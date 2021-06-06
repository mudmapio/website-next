import Layout from "../../components/layout/Layout";
import Link from 'next/link'

export default function MultipleFirewalls() {
  return (
    <>
      <Layout>
        <div className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h2
                className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Many
                devices; one dashboard</h2>
              <p
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Get a handle on your devices with one sign in
              </p>
            </div>
            <div
              className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
              <p className="text-lg text-gray-500">
                One man show, small IT shop, or a large organisation split
                across continents. Mudmap has your back.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
              <div className="relative z-10">
                <div
                  className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                  <p>
                    I've been there, managing multiple devices. It was
                    repetitious, boring at times and slow.
                    Tired of waiting for "<i>pfCentral</i>" to become a reality
                    I built Mudmap. Now you can
                    securely manage your many firewalls quickly and easily.
                  </p>
                  <p>
                    Its natural to have questions about the service. Questions
                    such as:
                  </p>
                  <ul>
                    <li>Is it secure?</li>
                    <li>What does it look like?</li>
                    <li>Limitations, what are they?</li>
                  </ul>
                  <h2>Secure but internet facing</h2>
                  <p>
                    To remotely access firewalls, either it will need to be
                    accessible over SSH or a VPN. Mudmap uses SSH as its
                    transport layer, and will only do so using public key
                    authentication.
                  </p>
                  <p>
                    That doesn't mean you're locked to opening up port 22 to
                    the
                    world, Mudmap let's you chose which port.
                  </p>
                  <p>
                    The application also creates its own service account user
                    on each device and prohibits root or admin access after
                    installation. Access to the API also requires
                    authentication between Mudmap’s server and the device API.
                    No two devices share API credentials.
                  </p>
                  <h2>Display multiple devices in a single page</h2>
                  <p>
                    Once a device is connected to our servers, it will be able
                    to read and update information on the firewall.
                  </p>
                  <p>
                    Mudmap provides a convenient interface to view all
                    connected devices at a glance, get the version and online
                    status of each device. It is a near real-time service,
                    designed to provide great visuals without any impact to the
                    firewall’s performance.
                  </p>
                  <p>
                    It is also possible to view a firewall in detail. Mudmap
                    offers a familiar feel and layout to the traditional
                    pfSense user interface. All major functionality found in a
                    devices user interface also exists in the detailed view
                    within Mudmap’s dashboard.
                  </p>
                  <p>
                    Mudmap makes managing all your firewalls no matter where
                    they
                    are easy. Once integrated into the system you'll have that
                    central management you've always wanted in
                    a <i>pfSense</i> system.
                  </p>
                  <Link href="/contact">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Find out more
                    </button>
                  </Link>

                  <Link href="/register">
                    <button
                      type="button"
                      className="ml-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Register Today
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                <svg
                  className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4}
                            className="text-gray-200" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width={404} height={384}
                        fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"/>
                </svg>
                <div className="relative bg-gray-50 rounded-lg shadow-lg
                mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto
                ">
                  <figure>
                    <img
                      className="w-full rounded-lg"
                      // src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                      src="/dashboard-hero-example.png"
                      alt=""
                      width={1310}
                      height={873}
                    />
                    <figcaption className="ml-4 text-left">Mudmap's Dashboard
                    </figcaption>
                  </figure>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
