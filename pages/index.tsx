import ProductFeed from "@/components/feed/ProductFeed";
import Header from "@/components/navbar/Header";
import Banner from "@/components/section/Banner";
import { Product } from "@/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

type PageProps = {
    products: Product[];
};

export default function Home({ products }: PageProps) {
    const [domLoaded, setDomLoaded] = React.useState(false);

    React.useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            <Head>
                <title>Amazon 2.0</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Shop for the latest fashion trends and more on My E-commerce Website."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen flex flex-col w-full bg-gray-100">
                <Header />
                <div className="max-w-screen-2xl w-full mx-auto">
                    <Banner />
                    {domLoaded && <ProductFeed products={products} />}
                </div>
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
    context
) => {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );

    return {
        props: {
            products,
        },
    };
};
