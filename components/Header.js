import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
export const Header = ({ placeholder }) => {
  const router = useRouter();

  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [numberOfGuests, setnumberOfGuests] = useState(1);
  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const clearInput = () => {
    setsearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
    clearInput();
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5 md:px-10">
      {/* Left - Logo */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto cursor-pointer"
      >
        <Image
          src={"https://links.papareact.com/qd3"}
          layout="fill"
          objectFit="contain"
          objectPosition={"left"}
          alt="logo"
        />
      </div>
      {/* Middle - Search */}
      <div className="flex rounded-full overflow-hidden px-3 lg:p3 py-2 border-0  md:border-2 md:shadow-sm items-center relative">
        <input
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          type="text"
          className="outline-none  bg-transparent flex-1 pl-1 placeholder-gray-400 text-gray-600"
          placeholder={placeholder || "Start Search"}
        />
        <SearchIcon className="hidden md:inline-flex  absolute right-0 mr-2 bg-red-400 text-white rounded-full p-2 w-8 h-8 cursor-pointer" />
      </div>
      {/* Right - Usser Space*/}
      <div className="flex space-x-4 items-center text-gray-500 justify-end">
        <p className="cursor-pointer hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex rounded-full border-2 p-2 cursor-pointer space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col w-full sm:w-96 pt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex mb-4 border-b items-center">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              className="text-red-400 w-12 pl-2 tex-lg z-50 outline-none"
              type="number"
              value={numberOfGuests}
              min="1"
              onChange={(e) => setnumberOfGuests(e.target.value)}
            />
          </div>
          <div className="flex ">
            <button className="flex-grow text-gray-500" onClick={clearInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
