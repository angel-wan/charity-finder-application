import { ReactElement } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Charity } from "../../type";
import { removeFavourite, setFavourite } from "../../redux/charitiesSlice";
import { selectCharities, selectFavourite } from "../../redux/selector";

const CharityDetail = (): ReactElement => {
  const dispatch = useDispatch();
  const charities = useSelector(selectCharities);
  const favCharities = useSelector(selectFavourite);

  const { slug } = useParams<{ slug: string }>();

  if (slug === undefined) {
    return <div>No name provided.</div>;
  }

  const charity: Charity | undefined = charities.find(
    (c: { slug: string }) => c.slug === slug
  ); // Replace 123 with the actual ID you're looking for

  const isFavCharity = favCharities.includes(charity?.slug || "");

  if (!charity) {
    return <div className="text-center p-8 font-bold">Charity not found.</div>;
  }

  const addToFav = (slug: string) => {
    dispatch(setFavourite(slug));
  };

  const removeFromFav = (slug: string) => {
    dispatch(removeFavourite(slug));
  };
  return (
    <div className="grid grid-cols-3 px-40 py-10 gap-10 ">
      <div className="col-span-2 shadow-lg shadow-[#fdf0f0] rounded-xl">
        <img
          src={charity.coverImageUrl}
          className="cover w-full rounded-t-xl"
        />

        <div className="px-16">
          <div className="flex mt-7 items-center gap-4 ">
            <img
              src={charity.logoUrl}
              className="cover rounded-full w-12 h-12"
            />
            <div className="text-4xl font-semibold">{charity.name}</div>
          </div>
          <div className="flex gap-3 items-center mt-4 mb-4">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.squarespace-cdn.com/content/v1/5c099b0a3c3a534809dc06e2/1545865160545-L146TMOJZJOFA6LC9325/Location+Icon-01.png"
            />
            <div className="text-base ">{charity.location}</div>
          </div>
          <div className="mb-9">{charity.description}</div>
        </div>
      </div>

      <div className="col-span-1 shadow-lg shadow-[#fdf0f0] px-16 h-fit py-8 rounded-xl">
        <div className="text-xl font-semibold mb-5">Tag:</div>
        <div className="text-xl font-semibold mb-5 flex flex-wrap gap-1">
          {charity.tags.map((tag) => (
            <a
              href={`/search/${tag}`}
              className="py-2 px-3 text-base bg-[#febbbb] shadow-2xl rounded-full m-1"
            >
              {tag}
            </a>
          ))}
        </div>

        <div className="mt-8 w-full font-semibold">
          <button
            className="bg-[#1f4172] text-white w-full h-10 rounded-md mb-3"
            onClick={() => (window.location.href = `${charity.profileUrl}`)}
          >
            Check it in Every.org
          </button>
          <button
            className={
              isFavCharity
                ? "bg-[#fdf0f0] w-full h-10 rounded-md"
                : "bg-[#febbbb] w-full h-10 rounded-md"
            }
            onClick={() =>
              isFavCharity
                ? removeFromFav(charity.slug)
                : addToFav(charity.slug)
            }
          >
            {isFavCharity ? "Remove from favourite" : "Add to favourite"}
          </button>
          {isFavCharity && (
            <div className="mt-5 text-center">
              This Charity Added To Your Favorite!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharityDetail;
