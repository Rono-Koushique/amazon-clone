import React from "react";
import { Product } from "@/types";
import ProductCard from "../card/ProductCard";
import Image from "next/image";

type Props = {
    products: Product[];
};

export default function ProductFeed({ products }: Props) {
    return (
        <div
            className="grid grid-flow-row-dense gap-6 mx-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                    md:-mt-52"
        >
            {products
                .slice(0, 4)
                .map(
                    ({
                        id,
                        title,
                        price,
                        category,
                        description,
                        image,
                    }: Product) => {
                        return (
                            <ProductCard
                                key={`product-${id}`}
                                id={id}
                                title={title}
                                price={price}
                                category={category}
                                description={description}
                                image={image}
                            />
                        );
                    }
                )}

            <Image
                className="md:col-span-full w-full object-contain"
                src="https://links.papareact.com/dyz"
                width={1000}
                height={600}
                alt=""
            />

            <div className="md:col-span-2 h-full">
                {products
                    .slice(4, 5)
                    .map(
                        ({
                            id,
                            title,
                            price,
                            category,
                            description,
                            image,
                        }: Product) => {
                            return (
                                <ProductCard
                                    key={`product-${id}`}
                                    id={id}
                                    title={title}
                                    price={price}
                                    category={category}
                                    description={description}
                                    image={image}
                                />
                            );
                        }
                    )}
            </div>

            {products.slice(5, products.length).map(
                ({
                    id,
                    title,
                    price,
                    category,
                    description,
                    image,
                }: Product) => {
                    return (
                        <ProductCard
                            key={`product-${id}`}
                            id={id}
                            title={title}
                            price={price}
                            category={category}
                            description={description}
                            image={image}
                        />
                    );
                }
            )}
        </div>
    );
}
