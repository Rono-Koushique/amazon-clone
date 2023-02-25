import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Condensed, Roboto } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { Provider as StoreProvider } from "react-redux";
import store from "@/redux/app/store";

const robotoCondensed = Roboto_Condensed({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
});

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StoreProvider store={store}>
            <SessionProvider session={pageProps.session}>
                <style jsx global>
                    {`
                        :root {
                            --robotoCondensed-font: ${robotoCondensed.style
                                .fontFamily};
                            --roboto-font: ${roboto.style.fontFamily};
                        }
                    `}
                </style>
                <Component {...pageProps} />
            </SessionProvider>
        </StoreProvider>
    );
}
