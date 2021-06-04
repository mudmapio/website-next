import {ChevronDownIcon} from '@heroicons/react/solid'

export default function Panels() {
  return (


    <div className="bg-gray-800">
      <div
        className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2
            className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            All your devices in one dashboard
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            See the status of all your <i>pfSense</i>® firewalls from one page.
            You can also get a detailed view of any device that is accessible
            from the dashboard. View, create, update or delete operations
            you’re used to from inside pfSense’s own dashboard are all
            replicated within Mudmap. Everything in one location.
          </p>
        </div>
        <div className="w-full max-w-xs">
          <img
            // className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            className="mt-4 object-contain object-center h-full w-full object-cover rounded-xl"
            // src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
            // src="/service-3.png"
            src="/panel-1.jpg"
            alt="Inbox user interface"
          />
        </div>
      </div>


      {/*// panel 2 - light*/}

      <div className="bg-white">
        <div
          className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">

          <div className="mt-10 w-full max-w-xs">
          </div>


          <div className="max-w-xl">

            <h2
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Replace all those mouse clicks with an API-driven approach.
            </h2>
            <p className="mt-5 text-xl text-gray-500">
              If you’re tired of logging in and clicking through multiple
              panels and tabs then Mudmap has your back. Mudmap deploys an API
              to your firewall making remote manipulation easy. Now you can use
              one platform to view, update or delete records on your devices.
            </p>
          </div>

        </div>
      </div>

      {/*// panel 3 - dark*/}

      <div className="bg-gray-800">
        <div
          className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
          <div className="max-w-xl">
            <h2
              className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Security is paramount
            </h2>
            <p className="mt-5 text-xl text-gray-400">
              The front door to your kingdom needs to be protected. That’s why
              SSH is used under the hood to tunnel all packets to and from your
              devices. Passwordless-SSH, API token authentication, and
              service-level user accounts are all used to provide a
              defence-in-depth approach to security. Your SSH keys and
              passwords are not stored and all actions within the application
              and on your device are logged for auditing purposes.
            </p>
          </div>
          <div className="mt-10 w-full max-w-xs">

          </div>
        </div>

        {/*// panel 4 - light*/}


        <div className="bg-white">
          <div
            className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">

            <div className="mt-10 w-full max-w-xs">
              {/*<Image*/}
              {/*  src="/service-3.png"*/}
              {/*  alt="Picture of charts"*/}
              {/*  layout="responsive"*/}
              {/*  width={500}*/}
              {/*  height={500}*/}
              {/*  />*/}
            </div>


            <div className="max-w-xl">

              <h2
                className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Built by an engineer for engineers
              </h2>
              <p className="mt-5 text-xl text-gray-500">
                I’ve built this platform to serve those who use network
                security appliances every day. Security, ease of use, and
                time-saving efficiency have been front of mind. Mudmap is meant
                for engineers and business professionals - it should make you
                money by saving time and personnel dissatisfaction. If it
                doesn’t, be the change you want to see and get in touch. You
                will always have my undivided attention - you’ll never get an
                automated reply with 14 days SLA turnaround!
              </p>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}
