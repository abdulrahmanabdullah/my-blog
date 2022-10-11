import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="pt-5">
        <p className="text-base md:text-2xl sm:text-lg font-blod tracking-wide antialiased py-5">
          كاتب و محب لعالم البرمجة و التطوير ، متخرج رياضيات لذلك أحب
          الخوارزميات ❤️‍🔥
        </p>
      </section>
      <section className="container mx-auto text-2xl flex justify-start flex-col px-0 pt-5">
        <h2 className="w-full font-mono pt-2 font-light antialiased">
          مقالاتي{" "}
        </h2>
        <ul className="w-full">
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
