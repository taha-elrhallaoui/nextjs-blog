import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { title } from '../components/layout';
import Date from '../components/Date';
import { getSortedPosts } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>

      <section className="mb-8">
        <p className="text-4xl text-center">
          Hi, I'm Taha. I'm a{' '}
          <span className=" text-green-600 font-bold">Web Developer</span>.
        </p>
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <ul className="">
          {posts.map(({ id, date, title }) => (
            <li className="mb-4" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-xl text-blue-600">{title}</a>
              </Link>
              <div className="text-gray-400">
                <Date iso={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPosts();
  return {
    props: {
      posts,
    },
  };
}
