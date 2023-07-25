const BlogList = ({ lists, title, handleDelete }) => {
  return (
    <div>
      {lists.map((list) => (
        <>
          <h1 key={list.id}>{title}</h1>
          <li key={list.id}>{list.name}</li>
          <li key={list.id}>{list.age}</li>
          <button type="button" onClick={() => handleDelete(list.id)}>
            Delete list
          </button>
        </>
      ))}
    </div>
  );
};

export default BlogList;
