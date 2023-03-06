import Head from "next/head";
import Coffees from "./components/Coffee/Coffees";
import Posts from "./components/Post/Posts";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ann's Coffee</title>
                <meta name="description" content="Ann's Coffee" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Posts />
                <Coffees />
            </main>
        </>
    );
}
