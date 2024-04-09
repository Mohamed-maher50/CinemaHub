import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";

const WithLoader = forwardRef(({ Element, url, Skeleton, ...otherProps }) => {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setResponseData(data);
      })
      .catch((err) => {});
  }, [url]);
  if (!responseData && Skeleton) return <Skeleton />;
  if (!responseData) return <div>Loading...</div>;
  return <Element {...responseData} {...otherProps} />;
});

export default WithLoader;
