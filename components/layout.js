import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
const name = "Abdulrahman Alkhudhayri";
export const siteTitle = "AbdulrahmanBlog";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal website using SSG" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta charSet="UTF-8" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div
        className="conatiner mx-auto flex flex-col justify-between h-screen px-4 max-w-xl"
        dir="rtl"
      >
        <header className={`${styles.header}  mt-1`}>
          {home ? (
            <>
              <Image
                priority
                src="/images/dev.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className="text-2xl text-center">{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/dev.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main className="mb-auto ">{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a> العودة ← </a>
            </Link>
          </div>
        )}
        <footer className="">
          <hr className="my-1 " />
          <div className="flex flex-row justify-between">
            <p className="text-base font-medium antialiased">
              مدونة استاتيكية تم بنائها بإستخدام &nbsp;
              <Link href="https://nextjs.org">
                <a>NextJs</a>
              </Link>
            </p>
            <p className="text-base">تجدني</p>
            <Link href="https://github.com/abdulrahmanabdullah">
              <a>
                <Image
                  priority
                  src="/images/github.png"
                  className={utilStyles.borderCircle}
                  height={32}
                  width={32}
                  alt="github pic"
                />
              </a>
            </Link>
            <Link href="https://twitter.com/nfs056">
              <a>
                <Image
                  priority
                  src="/images/twitter.png"
                  className={utilStyles.borderCircle}
                  height={32}
                  width={32}
                  alt="twitter pic"
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/abdulrahman-abdullah-alkhudhayri-68b609ab/">
              <a>
                <Image
                  priority
                  src="/images/linkedin.png"
                  className={utilStyles.borderCircle}
                  height={32}
                  width={32}
                  alt="linkedin pic"
                />
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
