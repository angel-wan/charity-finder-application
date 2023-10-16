import { ReactElement, useEffect, useState } from "react";
import CharityCard from "./Charities/CharityCard";
import axios from "axios";
import { getCharityCauses, searchCauses } from "../api/apiEndpoints";
import CharityList from "./Charities/CharityList";
import { useDispatch, useSelector } from "react-redux";
import { setCharities } from "../redux/charitiesSlice";
import { selectCharities } from "../redux/selector";
import { useParams } from "react-router";

const SearchPage = (): ReactElement => {
  const dispatch = useDispatch();

  const { cause } = useParams<{ cause: string }>();
  const charities = useSelector(selectCharities);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (cause && !dataFetched)
      searchCauses(cause)
        .then((response) => {
          console.log({ response });
          dispatch(setCharities(response.data.nonprofits));
          setDataFetched(true);
        })
        .catch((error) => {
          console.error("Error fetching charities:", error);
        });
  }, [dispatch, charities, cause]);

  return (
    <div className="bg-white ">
      <div className="h-28 p-9 text-2xl font-semibold px-24">
        Search Result for: {cause}
      </div>
      <div className="p-5">
        <CharityList charities={charities} />
      </div>
    </div>
  );
};

export default SearchPage;
