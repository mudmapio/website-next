import Layout from "../../components/layout/Layout";
import {
  BookOpenIcon,
  ShieldExclamationIcon,
  SupportIcon
} from "@heroicons/react/outline";

const issueGithub = 'https://github.com/mudmapio/public-interactions/issues/new/choose'
const supportLinks = [
  {
    name: 'Documentation',
    href: '/docs',
    description:
      'Unsure on how something works, or want to learn more about the product? Before reaching out, be sure to checkout the documentation',
    icon: BookOpenIcon,
  },
  {
    name: 'Feature Requests',
    href: `${issueGithub}`,
    description:
      'Think Mudmap is missing an important feature, or an existing one could be done better? Jump on the github and fill out the form and so I can triage it ASAP',
    icon: SupportIcon,
  },
  {
    name: 'Bug Reports',
    href: `${issueGithub}`,
    description:
      'Found a bug or security issue? If its security please email me rather than raise it publicly. Otherwise follow the link and fill out the form - the more detail the better!',
    icon: ShieldExclamationIcon,
  },
]
export default function Contact() {
  return (
    <>
      <Layout>
        <div className="bg-white">
          {/* Header */}
          <div className="relative pb-32 bg-gray-50">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gray-800 mix-blend-multiply"
                   aria-hidden="true"/>
            </div>
            <div
              className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1
                className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Contact</h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Thanks for getting in contact with me.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Check the boxes below to see which area most suits your needs.
                If you feel that none of those apply then you can reach me via
                email at <span className="underline">dan@mudmap.io</span>
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Hope you find what you're looking for.
              </p>
            </div>
          </div>

          {/* Overlapping cards */}
          <section
            className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
          >
            <h2 className="sr-only" id="contact-heading">
              Go here
            </h2>
            <div
              className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link) => (
                <div key={link.name}
                     className="flex flex-col bg-white rounded-2xl shadow-xl">
                  <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <div
                      className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                      <link.icon className="h-6 w-6 text-white"
                                 aria-hidden="true"/>
                    </div>
                    <h3
                      className="text-xl font-medium text-gray-900">{link.name}</h3>
                    <p
                      className="mt-4 text-base text-gray-500">{link.description}</p>
                  </div>
                  <div
                    className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <a href={link.href}
                       className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                      Contact us<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </Layout>
    </>
  )
}
