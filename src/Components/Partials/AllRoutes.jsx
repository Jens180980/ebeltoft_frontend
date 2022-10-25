import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { SeeHomes } from "../Pages/SeeHomes";
import { About } from "../Pages/About";
import { AboutCity } from "../Pages/AboutCity";
import { Gallery } from "../Pages/Gallery";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      {/* <Route path="/list">
        <Route index element={<List />}></Route>
        <Route path=":home_id" element={<Details />} />
      </Route> */}
      <Route path="/se-boliger" element={<SeeHomes />}></Route>
      <Route path="/om-ebeltoft-havnefront" element={<About />}></Route>
      <Route path="/om-ebeltoft-by" element={<AboutCity />}></Route>
      <Route path="/galleri" element={<Gallery />}></Route>
    </Routes>
  );
};
