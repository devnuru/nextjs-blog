import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilsStyle from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyle.headingMd}>
        <p>Hello, I'm Md Nuruzzaman Bangladesh based Front-end & Wordpress Developer. You can contact me on{' '}
        <a href="https://twitter.com/nuruzzamanDev" target="_blank">Twitter</a>
        </p>
        <p>This is a sample website - you will be building a site like this on{" "}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilsStyle.headingMd} ${utilsStyle.padding1px}`}>
        <h2 className={utilsStyle.headingLg}>Blog</h2>
        <ul className={utilsStyle.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilsStyle.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}