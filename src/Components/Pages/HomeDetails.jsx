// import react hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Hero } from "../Partials/Hero";

// HomeDetails function component
export const HomeDetails = () => {
  const { home_id } = useParams(0);
  const [HomeDetails, setHomeDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const result = await axios.get(
          `https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-json/wp/v2/boliger/${home_id}`
        );
        setHomeDetails(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getDetails();
  }, [home_id]);

  console.log(HomeDetails);

  return (
    <>
      <Hero
        imgPath={
          HomeDetails ? HomeDetails.acf.featured_image.sizes.large : null
        }
        alt="inde i bolig"
      />
      <div>Type bolig {HomeDetails ? HomeDetails.acf.type : null}</div>
    </>
  );
};
