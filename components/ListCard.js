import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const ListCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div
      key={location}
      className="py-6 transition duration-200 ease-out border-b hover:opacity-80 hover:shadow-lg flex first:border-t"
    >
      <div className="relative h-44 w-56">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt={title}
        />
      </div>
      <div className="px-4 flex-grow">
        <div className="flex items-center   justify-between">
          <p className="text-sm">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h2 className="font-semibold pb-2">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-row-reverse">
          <p className="font-semibold">{price}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <StarIcon className="h-7 text-yellow-500" />
            <p>{star}</p>
          </div>
          <div className="text-sm text-gray-500">{total}</div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
