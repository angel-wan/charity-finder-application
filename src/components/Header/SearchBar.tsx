import { ReactElement, useEffect, useState } from "react";
import causesList from "../../assets/causesList.json";
import { useNavigate } from "react-router-dom";

const SearchBar = (): ReactElement => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);

  const onInputChange = (event: { target: { value: string } }) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      console.log("enter");
    }
  };

  const handleSearch = (cause: string) => {
    navigate(`/search/${cause}`);
    setSearchInput("");
  };

  useEffect(() => {
    const newSearchResult = causesList.causes.filter((cause: string) => {
      return cause.includes(searchInput);
    });

    searchInput.length ? setSearchResult(newSearchResult) : setSearchResult([]);
  }, [searchInput]);

  return (
    <div className="relative w-full">
      <input
        placeholder="Search"
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
        className="w-full h-16 rounded-md p-2"
        value={searchInput}
      />
      {searchResult.length !== 0 && (
        <div className="absolute w-full bg-white text-[#1f4172] rounded-bl-md rounded-br-md flex-wrap flex-col overflow-hidden z-10">
          {searchResult?.map((item) => (
            <button
              className="inline-block h-12 p-2 hover:bg-[#febbbb] rounded-full m-1"
              onClick={() => handleSearch(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
