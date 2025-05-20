import React from "react";

const Loader = () => (
  <div className="relative w-screen h-screen">
    <span className="loading loading-spinner loading-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
);

export default Loader;
