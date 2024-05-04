import Head from "next/head";
import Image from "next/image";
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
  console.log(allPostsData);

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
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          私はSIer勤務のSEです。自身の技術力の向上のために勉強を始めました。
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail})=>(
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <img 
                src={`${thumbnail}`}
                className={styles.thumbnailImage}
              ></img>
            </Link>
            <Link legacyBehavior href={`/posts/${id}`}>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
          ))}
        </div>
      </section>

    </Layouts>
  );
}
