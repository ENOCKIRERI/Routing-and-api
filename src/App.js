import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import ProductsDisplay from "./components/ProductsDisplay";
import { products } from "./data";
import { ProductsProvider } from "./context"

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categories = products.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [products]);
  return (
    <div className="App">
      <Navbar />

      <ProductsProvider>
        <Routes>
          <Route path={"/products"} element={<Products products={products} />}>
            <Route
              index
              element={<ProductsDisplay products={products} category={"all"} />}
            />
            {categories.length > 0 &&
              categories.map((c) => {
                return (
                  <Route
                    path={`${c}`}
                    element={
                      <ProductsDisplay category={`${c}`} />
                    }
                  />
                );
              })}
          </Route>
          <Route
            path="/products/:id"
            element={<OneProduct products={products} />}
          />
        </Routes>
      </ProductsProvider>
    </div>
  );
}

export default App;
