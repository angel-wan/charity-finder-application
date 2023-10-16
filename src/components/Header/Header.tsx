import { ReactElement } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router";

const Header = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fdf0f0]">
      <div className="flex flex-row w-f  justify-around h-24 items-center  px-20">
        <div
          className="basis-1/3 flex items-center justify-left"
          onClick={() => navigate(`/`)}
        >
          <img
            src="https://st2.depositphotos.com/7358038/10411/v/450/depositphotos_104118204-stock-illustration-charity-web-icon-vector-design.jpg"
            className="w-16 h-16 rounded-full m-3"
          />
          <div className="text-2xl font-semibold">Charity Find</div>
        </div>
        <div className="basis-1/3 flex items-center justify-center">
          <SearchBar />
        </div>
        <div
          className="basis-1/3 flex items-center justify-end "
          onClick={() => navigate(`/favourite`)}
        >
          <img
            src="https://winaero.com/blog/wp-content/uploads/2018/08/favorites-heart-icon-1-big-256.png"
            className="w-12 h-12"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
