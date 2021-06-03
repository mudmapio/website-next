export default function Footer() {
  const company = [
    {name: 'About', href: '/about'},
    {name: 'Pricing', href: '/pricing'},
    {name: 'Documentation', href: '/docs'},
  ]
  const Product = [
    {name: 'For Managed Service Providers', href: '#'},
    {name: 'Service Multiple Firewalls', href: '#'},
    {name: 'Reduce Staff Workloads', href: '#'},
  ]
  const Support = [
    {name: 'Contact', href: '/contact'},
    {name: 'Frequently Asked Questions', href: '/faq'},
    {name: 'Terms of Service', href: '/terms'},
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <footer
      // className="mt-24 bg-blend-darken dark:bg-gray-800 pt-4 pb-8 xl:pt-8"
    >
      <div className="mt-24 bg-gray-800 dark:bg-gray-800">
        <div className="container px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="my-8 xl:my-0">
              <div className="my-8 xl:my-0">
                <h4
                  className="font-semibold tracking-wider text-gray-300 leading-5">
                  Plausible Analytics
                </h4>
                <p className="mt-4 text-base text-gray-400 leading-6">

                </p>

              </div>
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                GRID1

                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h4
                      className="text-sm font-semibold tracking-wider text-gray-400 uppercase leading-5">
                      Why Plausible?
                    </h4>
                    <ul className="mt-4">
                      <li>
                        <a href="https://plausible.io/simple-web-analytics"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Simple metrics
                        </a>
                      </li>
                      <li className="mt-4">
                        <a
                          href="https://plausible.io/lightweight-web-analytics"
                          className="text-base text-gray-300 leading-6 hover:text-white">
                          Lightweight script
                        </a>
                      </li>
                      <li className="mt-4">
                        <a
                          href="https://plausible.io/privacy-focused-web-analytics"
                          className="text-base text-gray-300 leading-6 hover:text-white">
                          Privacy focused
                        </a>
                      </li>
                      <li className="mt-4">
                        <a
                          href="https://plausible.io/open-source-website-analytics"
                          className="text-base text-gray-300 leading-6 hover:text-white">
                          Open source
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h4
                      className="text-sm font-semibold tracking-wider text-gray-400 uppercase leading-5">
                      Comparisons
                    </h4>
                    <ul className="mt-4">
                      <li>
                        <a href="https://plausible.io/vs-google-analytics"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          vs Google Analytics
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="https://plausible.io/vs-matomo"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          vs Matomo
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                GRID2


                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div className="mt-12 md:mt-0">
                    <h4
                      className="text-sm font-semibold tracking-wider text-gray-400 uppercase leading-5">
                      Community
                    </h4>
                    <ul className="mt-4">
                      <li>
                        <a href="https://plausible.io/blog"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Blog
                        </a>
                      </li>
                      <li className="mt-4">
                        <a target="_blank" href="https://docs.plausible.io/"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Documentation
                        </a>
                      </li>
                      <li className="mt-4">
                        <a target="_blank"
                           href="https://github.com/plausible/analytics"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          GitHub
                        </a>
                      </li>
                      <li className="mt-4">
                        <a target="_blank" href="https://plausible.io/forum"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Forum
                        </a>
                      </li>
                      <li className="mt-4">
                        <a target="_blank"
                           href="https://twitter.com/plausiblehq"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Twitter
                        </a>
                      </li>
                      <li className="mt-4">
                        <a target="_blank"
                           href="https://fosstodon.org/@plausible"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Mastodon
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4
                      className="text-sm font-semibold tracking-wider text-gray-400 uppercase leading-5">
                      Company
                    </h4>
                    <ul className="mt-4">
                      <li className="mt-4">
                        <a href="https://plausible.io/about"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          About
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="https://plausible.io/status"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Status
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="https://plausible.io/contact"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Contact
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="https://plausible.io/privacy"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Privacy
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="https://plausible.io/data-policy"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Data policy
                        </a>
                      </li>
                      <li className="mt-4">
                        <a href="https://plausible.io/imprint"
                           className="text-base text-gray-300 leading-6 hover:text-white">
                          Imprint
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <h4
          className="text-sm font-semibold tracking-wider text-gray-400 uppercase leading-5">
          Why Plausible?
        </h4>

        <ul className="mt-4">
          {company.map((item) => (
            <li>
              <a href={item.href}
                 className="text-base text-gray-300 leading-6 hover:text-white">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
