import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      {/* <Route path="/list">
        <Route index element={<List />}></Route>
        <Route path=":home_id" element={<Details />} />
      </Route> */}
    </Routes>
  );
};
