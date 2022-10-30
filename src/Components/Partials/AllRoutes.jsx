import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { SeeHomes } from "../Pages/SeeHomes";
import { About } from "../Pages/About";
import { AboutCity } from "../Pages/AboutCity";
import { Gallery } from "../Pages/Gallery";
import { Faq } from "../Pages/Faq";
import { Contacts } from "../Pages/Contacts";
import { Documents } from "../Pages/Documents";
import { HomeDetails } from "../Pages/HomeDetails";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/se-boliger">
        <Route index element={<SeeHomes />}></Route>
        <Route path=":home_id" element={<HomeDetails />} />
      </Route>
      <Route path="/om-ebeltoft-havnefront" element={<About />}></Route>
      <Route path="/om-ebeltoft-by" element={<AboutCity />}></Route>
      <Route path="/galleri" element={<Gallery />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/kontakter" element={<Contacts />}></Route>
      <Route path="/dokumenter" element={<Documents />}></Route>
    </Routes>
  );
};
