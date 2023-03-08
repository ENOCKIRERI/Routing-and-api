import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context";


function Products({ products }) {
  const { categories } = useContext(ProductsContext);

  const navigate = useNavigate();
  const handleCategoryNavigation = (category) => {
    navigate(`/products/${category}`);
  };
  return (
    <div>
     
      <div className="productsLayout">
        <div>
          <div className="categories">
            {categories.map((category, index) => {
              return (
                <span
                  className="category"
                  key={index}
                  onClick={() => handleCategoryNavigation(category)}
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
