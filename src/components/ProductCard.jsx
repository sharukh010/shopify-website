import React from "react";
import Rating from "@mui/material/Rating";
const ProductCard = ({ title, description, image, id, rating, price }) => {
  return (
    <div className="h-[300px] w-full bg-white shadow-lg flex justify-between items-center py-4 flex-col px-2 relative rounded-lg">
      <img
        src={image}
        alt={title}
        className="h-[60%] w-full object-contain rounded-lg"
      />
      <div className="flex flex-col w-full h-[30%] justify-between items-center">
        <p className="text-bold text-xs overflow-hidden text-center">{title}</p>
        <div className="text-xs flex justify-center items-center gap-2">
          <Rating
            name="half-rating-read"
            defaultValue={rating.rate}
            precision={0.5}
            readOnly
          />
          {rating.rate} ({rating.count})
        </div>
        <div className="w-10 h-10 absolute top-0 left-0 bg-blue-400 text-white flex items-center justify-center text-xs  rounded-br-lg rounded-tl-lg">
          #{id}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
