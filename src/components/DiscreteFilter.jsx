import { camelCaseToNormal } from "../assets/camelCaseConverter";

export function DiscreteFilter({
  filterName,
  currentBooks,
  selectedFilter,
  onFilterSelect,
}) {
  let availableOptions = [];
  for (let index = 0; index < currentBooks.length; index++) {
    const book = currentBooks[index];
    if (!availableOptions.includes(book[filterName])) {
      availableOptions.push(book[filterName]);
    }
  }

  const handleChange = (e) => {
    if (e.target.value === "All") {
      onFilterSelect(undefined);
    } else {
      onFilterSelect(e.target.value);
    }
  };

  return (
    <div>
      <p>{camelCaseToNormal(filterName)}:</p>
      <select value={selectedFilter} onChange={handleChange}>
        <option>All</option>
        {availableOptions.sort().map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}
