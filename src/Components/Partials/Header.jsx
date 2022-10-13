import logo_img from "../../Assets/logo.png";
import { Nav } from "../Partials/Nav";

export const Header = () => {
  return (
    <>
      <div>
        <img src={logo_img} alt="logo" />
      </div>
      <Nav />
    </>
  );
};
