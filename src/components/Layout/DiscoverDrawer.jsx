import React from "react";
import { MdDone } from "react-icons/md";
import "react-input-range/lib/css/index.css";
import FilterRatingItem from "../FilterRatingItem";
import FilterGenresItem from "../FilterGenresItem";
import FilterReleaseDateItem from "../FilterReleaseDateItem";
import FilterSortByItem from "../FilterSortByItem";
function DiscoverDrawer({ children }) {
  return (
    <div className="drawer">
      <input id="discover-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
}
DiscoverDrawer.Content = function ({ children }) {
  return <div className="drawer-content">{children}</div>;
};
export function DiscoverDrawerSlide() {
  return (
    <div className="drawer-side z-20 ">
      <label
        htmlFor="discover-drawer"
        aria-label="close sidebar"
        className="drawer-overlay z-50"
      ></label>
      <ul className="menu block h-screen overflow-y-auto overflow-x-hidden px-5 py-3 gap-1 w-80 min-h-full z-50 bg-black text-white ">
        <ul className="flex w-full items-center justify-between">
          <span className="text-2xl py-5 block font-extrabold tracking-widest">
            Filter
          </span>
          <label
            htmlFor="discover-drawer"
            className="btn btn-secondary text-white"
          >
            <MdDone className="text-xl" />
            Done
          </label>
        </ul>
        <FilterRatingItem />
        <FilterReleaseDateItem />
        <FilterGenresItem />
        <FilterSortByItem />
      </ul>
    </div>
  );
}
// DiscoverDrawer.Slide = function Slide() {
//   const [minValue, set_minValue] = useState(25);
//   const [maxValue, set_maxValue] = useState(75);

//   return (
//     <div className="drawer-side z-20">
//       <label
//         htmlFor="discover-drawer"
//         aria-label="close sidebar"
//         className="drawer-overlay z-50"
//       ></label>
//       <ul className="menu p-4 w-80 min-h-full z-50 bg-black text-white ">
//         <MultiRangeSlider
//           label={false}
//           ruler={false}
//           barInnerColor="#afafaf"
//           barLeftColor="#afafaf"
//           barRightColor="#afafaf"
//           style={{ border: "none", width: "100%" }}
//           className="border-none w-full"
//           min={0}
//           max={100}
//           step={5}
//           minValue={minValue}
//           maxValue={maxValue}
//           onInput={(e) => {
//             console.log(e);
//           }}
//         />

//         <li className=" grid-cols-2 w-full bg-white grid">maher</li>
//       </ul>
//     </div>
//   );
// };

export default DiscoverDrawer;
