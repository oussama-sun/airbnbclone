import { Header } from "../components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import ListCard from "../components/ListCard";
import MapVP from "../components/MapVP";
const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate =
    startDate && format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | Guests ${numberOfGuests}`}
      />
      <main className="flex pt-12">
        <section className="pl-4 pb-10">
          <p className="text-sm pb-2">
            300+ Stays - {range} for {numberOfGuests} of Guests
          </p>
          <h1 className="text-3xl font-semibold ">Stays in {location}</h1>
          <div className="inline-flex p-4 md:space-x-3 text-gray-800 pl-2 overflow-scroll scrollbar-hide">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Price</p>
            <p className="button">Type of place</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More fillters</p>
          </div>
          <div className="flex flex-col min-w-fit">
            {searchResults.map((data, index) => (
              <ListCard {...data} key={index} />
            ))}
          </div>
        </section>
        <section className="hidden lg:inline-flex lg:min-w-[600px] ">
          <MapVP searchResults={searchResults} />
        </section>
      </main>
    </div>
  );
};
export default Search;
export async function getStaticProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
