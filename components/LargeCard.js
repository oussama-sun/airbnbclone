import Image from "next/image";

function LargeCard({ title, img, description, buttonText }) {
  return (
    <>
      <div className="relative h-80">
        <Image
          src={img}
          className="absolute rounded-2xl"
          objectFit="cover"
          layout="fill"
          alt={title}
        />
      </div>
      <div className="absolute top-24 left-10">
        <h2 className="text-2xl font-semibold w-36">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
        <button className="text-white bg-gray-900 px-4 py-2 rounded-lg mt-4">
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default LargeCard;
