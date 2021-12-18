export default function PostLayout({children}) {
  return (
    <article>
      <div className="text-base max-w-none prose prose-lg pb-6 lg:pb-16">
        {children}
      </div>
    </article>
  )
}

