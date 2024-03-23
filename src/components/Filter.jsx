import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveFilter } from "../redux/slice";
import { selectFilter } from "../redux/selectors";

const Filter = () => {
    const existFiler = useSelector(selectFilter);
    const dispatch = useDispatch();

    const [filter, setFiler] = useState(existFiler || "popular");
    const [isOpen, setIsOpen] = useState(false);

      const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };
    
    const handleFilter = (e) => {
        setFiler(e.target.textContent);
        dispatch(saveFilter(e.target.textContent));
        setIsOpen((prev) => !prev);
    }

  return (
    <form action="">
      <label htmlFor="brandInput">Filters</label>
      <div onClick={handleOpen}>{filter}</div>
      {isOpen && (
        <div>
          <ul>
            <li key={nanoid()} onClick={handleFilter}>
              A to Z
            </li>
            <li key={nanoid()} onClick={handleFilter}>
              popular
            </li>
            <li key={nanoid()} onClick={handleFilter}>
              expencive
            </li>
          </ul>
        </div>
      )}
      {/* <select name="" id="">
        <option value="fromA">A to Z</option>
        <option value="fromZ">Z to A</option>
        <option value="cheap">Less than 10$</option>
        <option value="expencive">Greater than 10$</option>
        <option value="popular" selected>
          Popular
        </option>
        <option value="unpopular">Not popular</option>
        <option value="all">Show all</option>
      </select> */}
    </form>
  );
};

export default Filter;
