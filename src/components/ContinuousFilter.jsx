import { camelCaseToNormal } from "../assets/camelCaseConverter";
import { myBooks } from "../assets/books";
import { useState } from "react";

export const ContinuousFilter = ({
  filterName,
  selectedFilter,
  onFilterSelect,
}) => {
  const values = myBooks.map((book) => book[filterName]);
  const absoluteMinimum = Math.min(...values);
  const absoluteMaximum = Math.max(...values);

  const [selectedMinimum, setSelectedMinimum] = useState(absoluteMinimum);
  const [selectedMaximum, setSelectedMaximum] = useState(absoluteMaximum);

  const handleChangeMin = (e) => {
    if (selectedFilter === undefined) {
      onFilterSelect([e.target.value, absoluteMaximum]);
    } else {
      onFilterSelect([e.target.value, selectedFilter[1]]);
    }
    setSelectedMinimum(e.target.value);
  };
  const handleChangeMax = (e) => {
    if (selectedFilter === undefined) {
      onFilterSelect([absoluteMinimum, e.target.value]);
    } else {
      onFilterSelect([selectedFilter[0], e.target.value]);
    }
    setSelectedMaximum(e.target.value);
  };

  return (
    <div className="continuous-filter">
      <p>{camelCaseToNormal(filterName)}</p>
      <div className="sliders">
        <label htmlFor={filterName.concat("-from")}>
          From: {selectedMinimum}
        </label>
        <input
          id={filterName.concat("-from")}
          name={filterName.concat("-from")}
          type="range"
          min={absoluteMinimum}
          max={absoluteMaximum}
          defaultValue={absoluteMinimum}
          onChange={handleChangeMin}
        />
        <label htmlFor={filterName.concat("-to")}>To: {selectedMaximum}</label>
        <input
          id={filterName.concat("-to")}
          name={filterName.concat("-to")}
          type="range"
          min={absoluteMinimum}
          max={absoluteMaximum}
          defaultValue={absoluteMaximum}
          onChange={handleChangeMax}
        />
      </div>
    </div>
  );
};
