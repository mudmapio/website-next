import Layout from "../../components/layout/Layout";
import Link from 'next/link'

export default function ForMSPS() {
  return (
    <>
      <Layout>
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
          <div
            className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div
                className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2
                  className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Managed
                  service providers</h2>
                <h3
                  className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  How Mudmap can help
                </h3>
                <p className="mt-8 text-lg text-gray-500">
                  You’ve probably got some of these <span
                  className="text-gray-900 underline">problems</span>:
                </p>
                <div className="mt-5 prose prose-indigo text-gray-500">
                  <ul>
                    <li>Have tens or hundreds of pfSense devices across several
                      clients
                    </li>
                    <li>Needed to configure one or several devices meaning you
                      then had to login via SSH
                      or a VPN, navigate the user interface, make the change,
                      and then repeat that
                      over and over again
                    </li>
                    <li>Deliberately not used pfSense simply because it lacks
                      unified management -
                      even though it's the right tool for your customers
                    </li>
                  </ul>
                  <p>
                    Mudmap has been designed to stop needless wastes of time
                    and
                    empower you, the professional, so you can deliver better
                    service and value to your customers.
                  </p>

                  <h2>Manage multiple devices in one location</h2>
                  <p>
                    Mudmap is a single pane of glass that lets you connect your
                    devices and view them in one location. It also allows you
                    to manage them, not just view. Need to update a firewall
                    rule, add an alias or delete a DNS server? Mudmap has you
                    covered.
                  </p>
                  <h2>Remove the need to SSH in all the time</h2>
                  <p>
                    Instead of SSH’ing in or making a VPN connection, only to
                    then have to login to the user interface, navigate to the
                    item you need and then logout once done, let Mudmap do that
                    for you.
                  </p>
                  <p>
                    Once Mudmap has made its initial connection to the device,
                    it can SSH to it and make changes via its API as the
                    service account user.
                  </p>
                  <p>
                    Using the API is faster, and leaves an audit trail. It uses
                    a layered security approach with SSH as its transport layer
                    and API authentication before polling the device for any
                    information.
                  </p>
                  <h2>Don’t let the lack of a native pfSense management
                    platform hold you back</h2>
                  <p>
                    Now that you can use a platform like Mudmap, it is possible
                    to roll out pfSense to your customers and be able to
                    provide remote management.
                  </p>
                  <p>
                    The cost of Mudmap is easily offset against such a feature
                    - allowing your customers piece of mind that you can
                    continue to support their business operations and network
                    security.
                  </p>
                  <h3>Mudmap is tailored to MSP's like you</h3>
                  <p>
                    Out of the box it provides:
                  </p>
                  <ul>
                    <li>
                      Remote network management, including updating firewall
                      rules, alias', DNS records, and more
                    </li>
                    <li>
                      Service stop, restart and start functionality without
                      logging in to the device individually
                    </li>
                    <li>
                      Decreased audit times through the single pane of glass
                      overview of each device
                    </li>
                    <li>
                      The ability to update devices individually, or in bulk
                      without logging in to each one
                    </li>
                  </ul>
                  <p>
                    Put simply, Mudmap is the ideal solution for managing
                    multiple firewalls across many customers
                  </p>
                  <div>
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
