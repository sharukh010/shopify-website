import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Rating from "@mui/material/Rating";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const getProduct = async () => {
    console.log("fetching data.....");
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await response.json();
    return data;
  };
  React.useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct();
      setProduct(product);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="min-h-screen h-auto w-ful flex flex-col md:px-32 items-center">
      <div className="h-[10%] py-4 text-xl flex font-bold uppercase items-center pl-4 w-full">
        {product?.title}
      </div>
      <div className="h-[50%] bg-white box-border w-full flex justify-center items-center p-2">
        <img src={product?.image} alt={product?.title} className="h-[500px] w-3/6 object-contain" />
      </div>
      <div className="h-auto  w-full flex justify-center gap-1 flex-col p-4 text-[.9rem]">
        <b className="text-xl">Description:</b>
        {product?.description}
      </div>

      <div className="text-xs  flex h-[50px] gap-1 w-full px-2 items-center">
        <Rating
          name="half-rating-read"
          defaultValue={product.rating.rate}
          precision={0.5}
          readOnly
        />
        <b>{product?.rating?.rate}</b> ({product?.rating?.count})
      </div>
      <div className="h-1/6 w-full flex gap-5 flex-col p-2 text-[.9rem]">
        <h1 className="text-lg">
          Price:{" "}
          <strike className="text-red-700">${product?.price + 100}</strike> $
          {product?.price}
        </h1>
        <div className="flex w-full justify-between items-center">
          <h1 className="text-base capitalize">Category: {product?.category}</h1>
        </div>
        <div className="flex w-full justify-around items-center flex-col h-[130px] sm:flex-row gap-2">
            <button className="bg-blue-400 text-white w-full p-4 text-lg rounded-lg">
                Add to Cart
            </button>
            <button className="bg-blue-400 text-white w-full p-4 text-lg rounded-lg">
                Buy Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
