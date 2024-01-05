"use client";

import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/product-card";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Product 1",
    description:
      "This is a product which is capable of doing a lot of things, and we are now selling it.",
    image: "https://picsum.photos/seed/1/400",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "This is a another product which can do a lot of things too. And again, we are selling it.",
    image: "https://picsum.photos/seed/2/400",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    description:
      "This is a third product which can do a lot of things too. And again, we are selling it. Probably the best product in the world.",
    image: "https://picsum.photos/seed/3/400",
    price: 300,
  },
  {
    id: 4,
    name: "Product 4",
    description:
      "This is a fourth product which can do a lot of things too. And again, we are selling it. Probably the best product in the world.",
    image: "https://picsum.photos/seed/4/400",
    price: 300,
  },
  {
    id: 5,
    name: "Product 5",
    description:
      "This is a fifth product which can do a lot of things too. And again, we are selling it. Probably the best product in the world.",
    image: "https://picsum.photos/seed/5/400",
    price: 300,
  },
  {
    id: 6,
    name: "Product 6",
    description:
      "This is a sixth product which can do a lot of things too. And again, we are selling it. Probably the best product in the world.",
    image: "https://picsum.photos/seed/6/400",
    price: 300,
  },
  {
    id: 7,
    name: "Product 7",
    description:
      "This is a seventh product which can do a lot of things too. And again, we are selling it. Probably the best product in the world.",
    image: "https://picsum.photos/seed/7/400",
    price: 300,
  },
  {
    id: 8,
    name: "Product 8",
    description:
      "This is a eighth product which can do a lot of things too. And again, we are selling it. Probably the best product in the world.",
    image: "https://picsum.photos/seed/8/400",
    price: 300,
  },
];

export type Product = (typeof products)[0];

export default function Home() {
  return (
    <main className="max-w-7xl w-full mx-auto p-3 lg:p-0">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}
