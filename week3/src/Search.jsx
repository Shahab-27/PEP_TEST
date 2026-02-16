import { useState, useEffect } from "react";

function useSearch(items) {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const result = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(result);
  }, [search, items]);

  return { search, setSearch, filteredItems };
}

export default useSearch;
