import { useEffect, useState } from "react";
import BlogList from "./list";

const WorkingLists = () => {
  
  const handleDelete = (id) => {
    const newLists = lists.filter((list) => list.id !== id);
    setlists(newLists);
  };

  return (
    <>
      {/* <BlogList lists={lists} title="Details" /> */}
      {isPending && <div>Loading...</div>}
      {lists && (
        <BlogList
          lists={lists}
          title="Details no 2"
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default WorkingLists;
