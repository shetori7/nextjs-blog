import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name="こうのとりの開発ブログ"
export const siteTitle="こうのとりの開発ブログ"

function Layouts({children ,home}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/images/shetori_big.jpg"></link>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/shetori.jpg" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}></img>
                        <h1 className={utilStyles.headingXl}>{name}</h1>
                    </>
                ):(
                    <>
                        <img src="/images/shetori.jpg" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}></img>
                        <h1 className={utilStyles.headingXl}>{name}</h1>
                    </>
                )}

            </header>
            <main>{children}</main>
            {!home &&(
                <div>
                    <Link href="/">←ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layouts;