import React from "react";
import { CircularProgress } from "@mui/material";
const LoadingFullScreen = () => {
  return (
    <div className="h-screen w-full z-40 flex justify-center items-center flex-col gap-2">
      <CircularProgress />
      <div className="font-semibold">Loading...</div>
    </div>
  );
};

const LoadingMini = () => {
  return (
    <div className="h-20  w-full gap-4 flex justify-center items-center">
      <CircularProgress size={30}/>
      <div className="font-semibold text-xl">Loading...</div>
    </div>
  );
};
export default LoadingFullScreen;

export { LoadingMini };
