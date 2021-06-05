export default function PostLayout({children}) {
  return (
    <article>
      <div className="text-base max-w-none prose prose-lg">
        {children}
        </div>
    </article>
  )
}

