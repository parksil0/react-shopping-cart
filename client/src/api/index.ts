import axios from "axios"
import { Product } from "../types/product";

export const requestGetProducts = () => {
  return axios.get<Product[]>('/products');
}