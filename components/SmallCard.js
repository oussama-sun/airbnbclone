import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center space-x-4 rounded-lg  mt-5 m-2 hover:bg-gray-100 hover:scale-105 transition duration-200 cursor-pointer  ease-out">
      <div className="relative w-16 h-16">
        <Image
          src={img}
          layout="fill"
          className="rounded-lg"
          objectFit="cover"
          alt={location}
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
