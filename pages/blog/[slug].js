import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {getAllPosts, getPostBySlug} from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from "../../components/layout/Layout";
import PostLayout from "../../components/posts/post-layout";
import PostHeader from "../../components/posts/post-header";
import Container from "../../components/posts/container";
import PostBody from "../../components/posts/post-body";

export default function Post({post}) {
  // breaks SSR
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>
  }
  // break SSR ^ ??
  return (
    <Layout>
      <Container>
        <PostHeader
          slug={post.slug}
          author={post.author}
          title={post.title}
          date={post.date}
          coverImage={post.coverImage}
          excerpt={post.excerpt}
        />
        <PostLayout>
          <PostBody content={post.content}/>
        </PostLayout>
      </Container>
    </Layout>

  )
}

export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
