//Custom Hook for fetching the data
import React, { useState, useEffect } from "react";

//custom hook and it is a functional component
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //function inside the useEffect fetchData
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const jsonData = await res.json();

        setResponse(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { response, error };
};

export default useFetch;
