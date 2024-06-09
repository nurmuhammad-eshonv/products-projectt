import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  if (!data || !data.products) {
    return <div className="text-4xl text-center">...loading</div>;
  }

  return (
    <div>
      {data.products.map((product) => (
        <ProductCard product={product}/>
      ))}
    </div>
  );
}

export default ProductList;
