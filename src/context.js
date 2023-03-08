import { createContext } from "react";
import { products } from "./data";

export const ProductsContext = createContext()

export function ProductsProvider({ children }) {
    const categories = products.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    return (
        <ProductsContext.Provider value={{ categories: categoriesArr, products: products}}>{children}</ProductsContext.Provider>
    )
}

export default ProductsProvider;