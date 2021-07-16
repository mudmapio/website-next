import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {ChevronRightIcon} from '@heroicons/react/solid'
import {PopupButton} from "react-calendly";
import NewFeaturesBanner from "./NewFeaturesBanner";

const navigation = [
  {name: 'About', href: '/about', current: false},
  {name: 'Pricing', href: '#pricing', current: false},
  {name: 'Docs', href: '/docs', current: false},
  {name: 'Contact', href: '/contact', current: false},
]

export default function Banner() {

  return (
    <div className="min-h-0">
      <NewFeaturesBanner />
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          {({open}) => (
            <>
              <div className="bg-gray-900 pt-6">
                <nav
                  className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1">
                    <div
                      className="flex items-center justify-between w-full md:w-auto">
                      <a href="/">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="/logo.png"
                          alt="Mudmap logo"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button
                          className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="hidden space-x-8 md:flex md:ml-10">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-white hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex md:items-center md:space-x-6">
                    <a href="/login"
                       className="text-base font-medium text-white hover:text-gray-300">
                      Log in
                    </a>
                    <a
                      href="/register"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                    >
                      Register
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
                >
                  <div
                    className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div
                      className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="/logo.png"
                          alt="Mudmap logo"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="pt-5 pb-6">
                      <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-6 px-5">
                        <a
                          href="/register"
                          className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                        >
                          Register
                        </a>
                      </div>
                      <div className="mt-6 px-5">
                        <p
                          className="text-center text-base font-medium text-gray-500">
                          Existing customer?{' '}
                          <a href="/login"
                             className="text-gray-900 hover:underline">
                            Login
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main>
          <div
            className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div
                  className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <a
                      href="/blog"
                      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span
                        className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                        Want to know more?
                      </span>
                      <span className="ml-4 text-sm">Read the blog</span>
                      <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500"
                                        aria-hidden="true"/>
                    </a>
                    <h1
                      className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">A better way to</span>
                      <span
                        className="block text-indigo-400">manage pfSense firewalls</span>
                    </h1>
                    <p
                      className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Save time whilst securely managing your fleet of devices
                      across multiple sites all from one location.
                    </p>

                    <div
                      className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="/register"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                          Get started
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <PopupButton url="https://calendly.com/dansult"
                                     text="Book a demo"
                                     className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div
                    className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
    </div>
  )
}
