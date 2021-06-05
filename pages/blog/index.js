import Layout from "../../components/layout/Layout";
import Container from "../../components/posts/container";
import Intro from "../../components/posts/intro";
import {getAllPosts} from "../../lib/api";
import HeadAndSeo from "../../components/layout/HeadAndSeo";
import BlogList from "../../components/posts/blog-list";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <HeadAndSeo />
        <Container>
          <Intro />
          <BlogList posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
