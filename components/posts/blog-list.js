import DateFormatter from "./date-formatter";

export default function BlogList({posts}) {
  return (
    <section>
      <div
        className="mx-auto max-w-screen-sm mt-6">
        <ul className="divide-y divide-gray-200">
          {posts.map((post) => (
            <div key={post.title}>
              <li className="py-4">
                <p className="uppercase text-xs text-gray-500 font-bold">
                  <time dateTime={post.datetime}><DateFormatter
                    dateString={post.date}/></time>
                </p>
                <a href={`/posts/${post.slug}`} className="mt-2 block">
                  {/*<p*/}
                  {/*  className="text-xl font-semibold text-gray-900">{post.title}</p>*/}
                  <h2
                    className="mt-1 text-2xl tracking-tight font-extrabold text-gray-900 sm:leading-none md:text-3xl">
                    {post.title}
                  </h2>
                  <p

                    className="mt-3 text-base text-gray-500">{post.description}</p>
                  <p
                    className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                </a>
                <div className="mt-3">
                  <a href={`/posts/${post.slug}`}
                     className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                    👉 Read More
                  </a>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>

    </section>
  )
}
