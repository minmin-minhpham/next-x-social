import { ExploreIcon } from "../icons";

export default function SearchBar() {
  return (
    <div className="sticky top-0 flex items-center z-30 w-full min-h-14 bg-black">
      <div className="flex items-center rounded-full w-full px-4 py-2  border border-border-gray focus-within:outline-2 focus-within:outline-indigo-600">
        <ExploreIcon className="fill-gray-400 h-5" />
        <input
          placeholder="Search"
          type="text"
          className="outline-none placeholder:text-gray-400 caret-indigo-600 text-sm pl-0.5"
        />
      </div>
    </div>
  );
}
