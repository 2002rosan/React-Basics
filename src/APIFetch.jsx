import { useEffect, useState } from "react";

const APIFetch = () => {
  // const PeopleLists = [
  //   {
  //     id: 1,
  //     name: "Rosan",
  //     age: 21,
  //     Education: "IT",
  //   },
  //   {
  //     id: 2,
  //     name: "Rohan",
  //     age: 21,
  //     Education: "IT",
  //   },
  //   {
  //     id: 3,
  //     name: "Abijeet",
  //     age: 21,
  //     Education: "IT",
  //   },
  //   {
  //     id: 4,
  //     name: "Tej",
  //     age: 21,
  //     Education: "IT",
  //   },
  //   {
  //     id: 5,
  //     name: "Deepak",
  //     age: 21,
  //     Education: "IT",
  //   },
  // ];
  const API = "https://648ec59675a96b664444425e.mockapi.io";

  const [datas, setDatas] = useState([]);

  const FetchData = async () => {
    const data = await fetch(`${API}/Blog`);

    const response = await data.json();
    setDatas(response);
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      {datas.map((data) => (
        <div
          style={{
            display: "flex",
            items: "center",
            flexDirection: "column",
          }}
          key={data.id}
        >
          <h1 key={data.id}>{data.title}</h1>
          <p key={data.id}>{data.description}</p>
          <img src={data.avatar} alt="" height={500} width={500} />
        </div>
      ))}
    </>
  );
};

export default APIFetch;
