import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Filters = () => {
  const { filter, setFilter, transactions } = useContext(AppContext);

  const categories = [...new Set(transactions.map((t) => t.category))];

  return (
    <div className="flex gap-3 mb-3">
      <input
        type="text"
        placeholder="Search category..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border px-3 py-1 rounded-md w-full"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border px-2 py-1 rounded-md"
      >
        <option value="">All</option>

        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
