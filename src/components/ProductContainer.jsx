import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
import LoadingFullScreen from "./Loading";
const ProductContainer = ({products}) => {
  

  return (
    <div className="min-h-screen w-full  grid grid-cols-2 flex-wrap p-2  gap-1 sm:grid-cols-3 md:grid-cols-5 ">
      {products ? (
        products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard
              title={product.title}
              category={product.category}
              price={product.price}
              description={product.description}
              rating={product.rating}
              image={product.image}
              id={product.id}
            />
          </Link>
        ))
      ) : (
        <>Loading...</>
      )}
    </div>
  )
};

export default ProductContainer;
