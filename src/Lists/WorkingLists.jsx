import { useState } from "react";
import BlogList from "./list";

const WorkingLists = () => {
  const [lists, setlists] = useState([
    {
      id: 1,
      name: "Rosan",
      age: 21,
    },
    {
      id: 2,
      name: "Tej",
      age: 21,
    },
    {
      id: 3,
      name: "Deepak",
      age: 21,
    },
    {
      id: 4,
      name: "Abijeet",
      age: 24,
    },
    {
      id: 5,
      name: "Rohan",
      age: 27,
    },
  ]);

  const handleDelete = (id) => {
    const newLists = lists.filter((list) => list.id !== id);
    setlists(newLists);
  };

  return (
    <>
      {/* <BlogList lists={lists} title="Details" /> */}
      <BlogList
        lists={lists}
        title="Details no 2"
        handleDelete={handleDelete}
      />
    </>
  );
};

export default WorkingLists;
