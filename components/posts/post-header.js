import Link from 'next/link'
import DateFormatter from "../posts/date-formatter";

export default function PostHeader({title, coverImage, date, author}) {
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            <p
              className="text-left uppercase text-xs text-indigo-600 font-bold hover:underline"
            >
              <Link
                href="/blog">👈 Return to Blog
              </Link>
            </p>
            <p
              className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl
              sm:tracking-tight lg:text-5xl">
              {title}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              <div
                className="text-left text-xs uppercase font-bold text-gray-500">
                <span><DateFormatter dateString={date}/> - </span>
                Written by <a
                className="uppercase text-xs text-indigo-600 font-bold hover:underline"
                href={`https://twitter.com/${author.twitter}`}>{author.name}</a>
              </div>
            </p>
          </div>
          <div className="text-center mt-8">
            <img
              className="object-center mx-auto"
              src={coverImage}
              title={title}
              height={278}
              width={556}
              alt={title}
            />
          </div>
        </div>
      </div>
    </>
  )
}
