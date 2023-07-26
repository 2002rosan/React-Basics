import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDatas(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }, [url]);
  return { datas, isPending };
};

export default UseFetch;
