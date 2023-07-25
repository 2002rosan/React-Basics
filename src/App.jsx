// import APIFetch from "./APIFetch";
// eslint-disable-next-line no-unused-vars
import AxiosPractice from "./API/AxiosPractice";
// eslint-disable-next-line no-unused-vars
import Controlled from "./Controlled";
import WorkingLists from "./Lists/WorkingLists";
// eslint-disable-next-line no-unused-vars
import UseEffect from "./UseEffect";
// import ComponentA from "./context/ComponentA";
// import { UserProvider } from "./context/UserContext";
// import Counter from "./Counter";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <APIFetch /> */}
      {/* <Counter /> */}
      {/* <Controlled /> */}
      {/* <UseEffect /> */}
      {/* <AxiosPractice /> */}
      {/* <UserProvider value="Rosan">
        <ComponentA />
      </UserProvider> */}
      <WorkingLists />
    </div>
  );
};

export default App;
