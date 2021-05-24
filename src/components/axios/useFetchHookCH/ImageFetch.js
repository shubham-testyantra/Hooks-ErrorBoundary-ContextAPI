import React from "react";
import useFetch from "./useFetch";

const ImageFetch = (props) => {
  const res = useFetch("https://dog.ceo/api/breeds/image/random", {});

  console.log("Response", res);

  //response is a property from useFetch Hook
  if (!res.response) {
    return <div>Loading...</div>;
  }

  const dogName = res.response.status;
  const imageURL = res.response.message;

  return (
    <div>
      <h2>{dogName}</h2>
      <img src={imageURL} width={400} height="auto" alt="avatar" />
    </div>
  );
};

export default ImageFetch;
