import { ReactElement } from "react";
import CharityList from "./Charities/CharityList";
import { useSelector } from "react-redux";
import { selectCharities, selectFavourite } from "../redux/selector";
import { Charity } from "../type";

const Favourite = (): ReactElement => {
  const charities = useSelector(selectCharities);
  const favCharities = useSelector(selectFavourite);
  console.log({ favCharities });
  const test = charities.filter((charity: Charity) =>
    favCharities.includes(charity.slug)
  );
  console.log({ test });
  return (
    <div className="bg-white">
      <div className="h-28 p-9 text-2xl font-semibold px-24">Favourite</div>
      <div className="p-5">
        <CharityList
          charities={charities.filter((charity: Charity) =>
            favCharities.includes(charity.slug)
          )}
        />
      </div>
    </div>
  );
};

export default Favourite;
