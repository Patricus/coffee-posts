import Head from "next/head";
import Script from "next/script";
import Coffees from "../components/Coffee/Coffees";
import Posts from "../components/Post/Posts";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ann&apos;s Coffee</title>
                <meta name="description" content="Ann's Coffee" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                src="https://kit.fontawesome.com/aa4f1e5e06.js"
                crossOrigin="anonymous"></Script>

            <main className={styles.main}>
                <Posts />
                <Coffees />
            </main>
        </>
    );
}
