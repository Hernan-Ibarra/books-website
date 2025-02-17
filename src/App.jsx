import { useState } from "react";
import "./App.css";
import { myBooks } from "./assets/books.js";
import { Book } from "./components/Book.jsx";
import { DiscreteFilter } from "./components/DiscreteFilter.jsx";
import { ContinuousFilter } from "./components/ContinuousFilter.jsx";

function App() {
  const [myDiscreteFilters, setMyDiscreteFilters] = useState({
    author: undefined,
    country: undefined,
    language: undefined,
  });

  const [myContinuousFilters, setMyContinuousFilters] = useState({
    year: undefined,
    pages: undefined,
  });

  const currentBooks = myBooks.filter((book) => {
    let passes = true;
    Object.keys(myDiscreteFilters).forEach(function (filterName) {
      if (
        myDiscreteFilters[filterName] !== undefined &&
        book[filterName] !== myDiscreteFilters[filterName]
      ) {
        passes = false;
      }
    });
    Object.keys(myContinuousFilters).forEach(function (filterName) {
      if (
        myContinuousFilters[filterName] !== undefined &&
        (myContinuousFilters[filterName][0] > book[filterName] ||
          myContinuousFilters[filterName][1] < book[filterName])
      ) {
        passes = false;
      }
    });
    return passes;
  });

  const handleSettingDiscreteFilter = (filterName) => {
    return (selection) => {
      setMyDiscreteFilters((myDiscreteFilters) => {
        const newFilters = structuredClone(myDiscreteFilters);
        newFilters[filterName] = selection;
        return newFilters;
      });
    };
  };

  const handleSettingContinousFilter = (filterName) => {
    return (selection) => {
      setMyContinuousFilters((myDiscreteFilters) => {
        const newFilters = structuredClone(myDiscreteFilters);
        newFilters[filterName] = selection;
        return newFilters;
      });
    };
  };

  return (
    <>
      <h1>
        Some <s>cars</s> books
      </h1>
      <div className="discrete-filters">
        {Object.keys(myDiscreteFilters).map((filterName) => (
          <DiscreteFilter
            filterName={filterName}
            currentBooks={currentBooks}
            selectedFilter={myDiscreteFilters[filterName]}
            onFilterSelect={handleSettingDiscreteFilter(filterName)}
            key={filterName}
          />
        ))}
      </div>
      <div className="continuous-filters">
        {Object.keys(myContinuousFilters).map((filterName) => (
          <ContinuousFilter
            filterName={filterName}
            selectedFilter={myContinuousFilters[filterName]}
            onFilterSelect={handleSettingContinousFilter(filterName)}
            key={filterName}
          />
        ))}
      </div>
      <div className="books">
        {currentBooks.map((book) => (
          <Book {...book} key={book.title.concat(" - ", book.author)} />
        ))}
      </div>
    </>
  );
}

export default App;
