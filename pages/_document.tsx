import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="smooth-scroll">
            <Head>
                <meta
                    name="description"
                    content="Get ready for a seamless e-commerce experience with my 
                        Amazon Clone built using Next.js, TypeScript, TailwindCSS, 
                        Stripe, webhooks, and Firestore. Shop with confidence and 
                        ease, right now."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
