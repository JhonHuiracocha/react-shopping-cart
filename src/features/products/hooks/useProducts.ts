import { useState } from "react";
import { ProductContextProps } from "../context";
import { Product } from "../interfaces/product";

const INITIAL_STATE: Product[] = [
  {
    id: 1,
    name: "Glorious Model D",
    imageUrl:
      "https://my-test-11.slatic.net/p/mdc/b80bb5d70ca094bb2dbc8c85edca304e.jpg",
    price: 60,
  },
  {
    id: 2,
    name: "Redragon Kumara",
    imageUrl:
      "https://dondigital.com.ar/wp-content/uploads/2022/05/RED17-2.jpg",
    price: 50,
  },
  {
    id: 3,
    name: "Razer Kraken X",
    imageUrl: "https://i.blogs.es/7b1951/2067913-5/original.png",
    price: 40,
  },
  {
    id: 4,
    name: "Razer Viper Ultimate Wireless",
    imageUrl:
      "https://exotique.com.mt/wp-content/uploads/2020/04/Razer-Viper-Ultimate-Wireless-Ambidextrous-Gaming-Mouse-v4.jpg",
    price: 80,
  },
  {
    id: 5,
    name: "Razer Seiren X",
    imageUrl:
      "https://6e616e6f7465680a.ultracdn.net/radix/img/items/20180221/15/5a8d7ab8a5ea5-201802211557.jpg",
    price: 75,
  },
];

export const useProducts = (): ProductContextProps => {
  const [products, setProducts] = useState<Product[]>(INITIAL_STATE);

  const getProduct = (id: number): Product | null => {
    return products?.find((product) => product.id === id) || null;
  };

  return {
    products,
    getProduct
  };
};
