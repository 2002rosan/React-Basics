import { UserConsumer } from "./UserContext";

const ComponentC = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <div>Hello {username}</div>;
      }}
    </UserConsumer>
  );
};

export default ComponentC;
