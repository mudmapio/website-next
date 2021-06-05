export default function Intro() {
  return (

    <section>
      <div className="">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl
              sm:tracking-tight lg:text-5xl">
              The Mudmap Blog
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Hi 👋 I’m <a className="text-indigo-600 hover:underline"
                           href="https://twitter.com/dansult">Dan</a>, the
              creator of Mudmap.
              I’m building a management tool to make pfSense easier to use.
              Read about the journey and what I’ve learnt along the way.
            </p>
          </div>
          <div className="text-center mt-8">
            <form
              className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-center">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div
                className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
