import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lgxl:h-[600px] 2xl:h-[700px] ">
      <Image
        src={"https://links.papareact.com/0fm"}
        objectFit="cover"
        layout="fill"
      />
      <div className="absolute top-1/2  w-full text-center text-sm md:text-lg">
        <p>Not sure where to go? Perfect.</p>
        <button className="bg-white my-4 py-4 px-10 rounded-full shadow-md text-purple-500 hover:shadow-xl active:scale-90 transform transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
