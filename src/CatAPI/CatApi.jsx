import React, { useEffect, useState } from "react";

const CatApi = () => {
  const [dataFact, setDataFact] = useState("");
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setDataFact(res.data.fact);
    });
  }, []);
  return (
    <div>
      <h1>Generate Random Data</h1>
      <p>{dataFact}</p>
    </div>
  );
};

export default CatApi;
