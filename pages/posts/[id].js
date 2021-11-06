import Head from 'next/head';
import Date from '../../components/Date';
import Layout from '../../components/layout';
import { getPost, getPostIDs } from '../../lib/posts';

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article>
        <h1 className="text-3xl">{post.title}</h1>
        <div className="mt-6 text-gray-400">
          <Date iso={post.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postIDs = await getPostIDs();
  const paths = postIDs.map((postID) => ({ params: { id: postID } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      post,
    },
  };
}
