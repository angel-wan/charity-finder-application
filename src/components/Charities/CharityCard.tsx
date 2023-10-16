import { MouseEventHandler, ReactElement } from "react";
import { Charity } from "../../type";
import { Link } from "react-router-dom";
import { getCharity } from "../../api/apiEndpoints";

const CharityCard = ({ charity }: { charity: Charity }): ReactElement => {
  const charityPath = `/charity/${charity.slug}`;

  return (
    <Link to={charityPath}>
      <div className="p-5 shadow-lg transition-[0.3s] shadow-[#fdf0f0] hover:shadow-xl hover:shadow-[#fdf0f0] flex flex-col h-full gap-2">
        <div className="flex gap-3 items-center">
          <img className="h-12 w-12 rounded-full" src={charity.logoUrl} />
          <div className="text-lg font-bold">{charity.name}</div>
        </div>
        <hr />
        <div className="flex gap-3 items-center ">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.squarespace-cdn.com/content/v1/5c099b0a3c3a534809dc06e2/1545865160545-L146TMOJZJOFA6LC9325/Location+Icon-01.png"
          />
          <div className="text-base ">{charity.location}</div>
        </div>
      </div>
    </Link>
  );
};

export default CharityCard;
