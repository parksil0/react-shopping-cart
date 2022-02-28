import axios from "axios";
import { Cart, Product } from "../types/dto";

const api = axios.create({
  baseURL: "http://localhost:3003",
});

export const requestGetProducts = async () => {
  const { data } = await api.get<Product[]>("/products");
  return data;
};
export const requestGetCartProducts = async () => {
  const { data } = await api.get<Cart[]>("/carts");
  return data;
};
