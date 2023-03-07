import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CoffeeProvider } from "./components/Context/Coffee";
import { PostProvider } from "./components/Context/Post";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CoffeeProvider>
            <PostProvider>
                <Component {...pageProps} />
            </PostProvider>
        </CoffeeProvider>
    );
}
