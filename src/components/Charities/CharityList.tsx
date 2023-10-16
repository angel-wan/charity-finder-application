import { ReactElement } from "react";
import { Charity } from "../../type";
import CharityCard from "./CharityCard";

const CharityList = ({ charities }: { charities: Charity[] }): ReactElement => {
  return (
    <div className="text-4xl font-medium text-center grid grid-cols-3 gap-10 px-20">
      {charities?.map((charity) => (
        <CharityCard charity={charity} />
      ))}
    </div>
  );
};

export default CharityList;
