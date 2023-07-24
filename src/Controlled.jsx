import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState({ FirstName: "", LastName: "" });
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <input
        type="text"
        value={name.FirstName}
        onChange={(e) =>
          setName({
            ...name,
            FirstName: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={name.LastName}
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <h1>Your First name is: {name.FirstName}</h1>
      <h1>Your Last name is: {name.LastName}</h1>
    </form>
  );
};

export default Controlled;
