import Banner from "../components/Banner";
import { Header } from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-5">Explore Neaeby</h2>
          {/* Pull some data from server - API endpoints*/}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((data, index) => (
              <SmallCard {...data} key={index} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold py-8">Live AnyWehre</h2>
          <div className="flex overflow-scroll space-x-3 scrollbar-hide p-4">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section className="relative py-4 min-w-[300px]">
          <LargeCard
            img={"https://links.papareact.com/4cj"}
            title={"The Greates Outdoors"}
            description={"Wishlists curated By Airbnb."}
            buttonText={"Get Inspired"}
          />
        </section>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
