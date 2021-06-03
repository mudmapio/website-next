/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon, CashIcon,
  CloudIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon, SearchIcon, SpeakerphoneIcon
} from '@heroicons/react/outline'

const features = [
  {
    name: 'API Driven Access',
    description:
      'Mudmap utilises programmatic access to pfSense® devices allowing for single or multi-device configuration.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Oversight',
    description:
      'At a glance, view your devices in real-time. Confirm the status of each device without opening an SSH tunnel or VPN connection.',
    icon: SearchIcon,
  },
  {
    name: 'Always Connected',
    description:
      'Never skip a beat with Mudmap’s persistent connections. Let it be your Single-Pane-of-Glass to view the status of your devices.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Faster Response',
    description:
      "Make a change in the dashboard and propagate it across as many devices as needed. Updating rules, alias' and more, is now easy with our interface.",
    icon: SpeakerphoneIcon,
  },
  {
    name: 'Value for Money',
    description:
      "Save time, money, and human resources by no longer having to open an SSH or VPN connection to gain insights or make changes to, your appliances.",
    icon: CashIcon,
  },
  {
    name: 'Cloud-Based',
    description:
      "Log in, make changes, and log out from anywhere in the world. No longer are you limited by SSH keys or VPN profiles tied to a particular asset inside your network.",
    icon: CloudIcon,
  },
]

export default function GridList() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Management</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage your security perimeter
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Mudmap solves your pfSense® management problems
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
