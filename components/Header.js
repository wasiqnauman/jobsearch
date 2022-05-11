import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
import logo from "/assets/images/logo.png";

function Header({placeholder}) {
  // use state to get search input value
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(1);
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(0)

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  }
  const resetMenu = () => {
    setOpenMenu(0);
  }
  const search = () => {
    router.push({
      pathname: "search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numGuests,
      },
    });
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleMenu = () => {
    if(openMenu == 1)
      setOpenMenu(0);
    else
      setOpenMenu(1);
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-transparent backdrop-blur-lg shadow-md p-1 md:px-10">
      {/* LEFT */}
      <div onClick={() => router.push("home")} className="relative flex h-10 cursor-pointer my-auto ">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* MIDDLE - SEARCH*/}
      <div className="flex items-center rounded-full py-2 md:shadow-sm hover:shadow-lg transition transform duration-200 ease-in-out">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-800"
          type="text"
          placeholder= {placeholder || "Start your search"}
        ></input>
        <SearchIcon className="hidden md:inline-flex h-8 bg-gray-600 text-white rounded-full p-2 cursor-pointer md:mx-2 hover:shadow-md hover:scale-103 transition duration-300" />
      </div>
      {/* RIGHT */}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline-flex cursor-pointer transition duration-300 text-gray-600 hover:text-gray-900 animate-pulse" onClick={() => router.push("post")}>
          Post a job
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer text-gray-600 transition duration-300 hover:text-gray-900" />
        {/* Menu button */}
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full text-gray-600 transition duration-300 hover:shadow-md hover:text-gray-900">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#bdc3c7"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Workers
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={numGuests}
              min={1}
              onChange={(e) => setNumGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-gray-600"
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-gray-600">Search</button>
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;
