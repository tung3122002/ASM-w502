import { Product } from "../types/Product";
import intance from "./instance";

export const create = (product: Product) => {
  const url = `/products`;
  return intance.post(url, product);
};

export const list = () => {
  const url = `/products`;
  return intance.get(url);
};

export const update = (product: Product) => {
  const url = `/products/${product._id}`;
  return intance.put(url, product);
};
export const remove = (id: number|string) => {
    const url = `/products/${id}`;
    return intance.delete(url);
  };
  export const read = (id: number) => {
    const url = `/products/${id}`;
    return intance.get(url);
  };

  export const searchProduct = (data: any) => {
    const url = `/search?q=${data}`;
    return intance.get(url);
}