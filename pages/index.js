import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layouts, { siteTitle } from "@/components/Layouts";
import utilStyles from "../styles/utils.module.css"
import {getPostsData} from "../lib/post"


const inter = Inter({ subsets: ["latin"] });

//ssgの場合
export async function getStaticProps(){
  const allPostsData=getPostsData();
  // console.log(allPostsData);

  return{
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return(
    <Layouts home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="これはホームページの説明です" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={styles.maincontents}>
          <div className={styles.global}>
            <div className={styles.grid}>
              {allPostsData.map(({id,title,date,content})=>(
                <article key={id}>
                  <div className={styles.articleGrid}>
                    <div className={styles.titile}>
                      <Link legacyBehavior href={`/posts/${id}`}>
                        <a className={utilStyles.boldText}>{title}</a>
                      </Link>
                    </div>
                    <div className={utilStyles.lightText}>
                      {date}
                    </div>
                    <div className={styles.abstract}>
                      {content}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.bio}>
              <div className={styles.icon}>
                <img src="/images/shetori.jpg" className={styles.sideBarImage}></img>
              </div>
              <div className={styles.sidebarMessage}>
                都内SIer勤務のSEです。未経験~中級者向けに< br/>
                わかりやすくIT技術解説をします。
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}
