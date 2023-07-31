// import Crud from "./CRUD/Crud";
// import CatApi from "./CatAPI/CatApi";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import Home from "./MUI/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Nopage from "./Pages/Nopage";
// import Layout from "./layout/Layout";
// import About from "./MUI/About";
// import PermanentDrawerLeft from "./admin/layout";
// import Dashboard from "./admin/Dashboard";
// import userLayout from "./user/userLayout";

const App = () => {
  return (
    <>
      {/* <Crud /> */}
      {/* <CatApi /> */}
      {/* <Home /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="user" element={<userLayout />} />
          </Route>
          <Route path="/admin/" element={<PermanentDrawerLeft />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
