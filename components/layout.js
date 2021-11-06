import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Taha El Rhallaoui';
export const title = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className="container max-w-2xl mx-auto py-8">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="flex flex-col items-center mb-16">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="mt-6 text-3xl font-bold">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a className="mb-4">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-3xl font-bold">{name}</h2>
          </>
        )}
      </header>

      <main className="mb-8">{children}</main>

      {!home && (
        <div>
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
