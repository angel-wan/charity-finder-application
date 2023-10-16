import { ReactElement, useEffect, useState } from "react";
import CharityCard from "./Charities/CharityCard";
import axios from "axios";
import { getCharityCauses } from "../api/apiEndpoints";
import CharityList from "./Charities/CharityList";
import { useDispatch, useSelector } from "react-redux";
import { setCharities } from "../redux/charitiesSlice";
import { selectCharities, selectFavourite } from "../redux/selector";
import causes from "../assets/causesList.json";
const Home = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    const randomCause =
      causes.causes[Math.floor(Math.random() * causes.causes.length)];
    getCharityCauses(randomCause)
      .then((response) => {
        console.log({ response });
        dispatch(setCharities(response.data.nonprofits));
      })
      .catch((error) => {
        console.error("Error fetching charities:", error);
      });
  }, [dispatch]);

  const charities = useSelector(selectCharities);
  const favCharities = useSelector(selectFavourite);

  console.log({ favCharities });

  return (
    <div className="bg-white">
      <div>
        <img
          src="https://www.canadahelps.org/media/5-Reasons-Why-You-Should-Donate-to-Charity.jpg"
          className="object-cover w-full h-96"
        />
      </div>
      <div>
        <div className="h-28 p-9 text-2xl text-center font-semibold">
          You may interested
        </div>
        <CharityList charities={charities} />
      </div>
    </div>
  );
};

export default Home;
