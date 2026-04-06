import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Filters from "./Filters";
import AddTransactionModal from "../AddTransactionModal";

const TransactionTable = () => {
  const { transactions, setTransactions, filter, role } =
    useContext(AppContext);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [editItem, setEditItem] = useState(null);

  const filtered = transactions
    .filter((t) =>
      filter
        ? (t.category || "").toLowerCase().includes(filter.toLowerCase())
        : true,
    )
    .sort((a, b) => {
      if (!sortKey) return 0;

      let valA = a[sortKey];
      let valB = b[sortKey];

      if (sortKey === "amount") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }

      valA = (valA || "").toString().toLowerCase();
      valB = (valB || "").toString().toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;

      return 0;
    });

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <>
      <Filters />

      <div className="bg-white p-4 rounded-2xl shadow-sm mt-2 dark:bg-gray-800 dark:text-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 text-left border-b">
              <th
                className="pb-2 cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date
              </th>

              <th
                className="pb-2 cursor-pointer select-none"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center gap-1">
                  Amount
                  <span className="text-xs text-gray-400">
                    {sortKey === "amount"
                      ? sortOrder === "asc"
                        ? "▲"
                        : "▼"
                      : "⇅"}
                  </span>
                </div>
              </th>

              <th
                className="pb-2 cursor-pointer"
                onClick={() => handleSort("category")}
              >
                Category
                <span className="text-xs text-gray-400">
                  {sortKey === "amount"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : "⇅"}
                </span>
              </th>

              <th
                className="pb-2 cursor-pointer"
                onClick={() => handleSort("type")}
              >
                Type
                <span className="text-xs text-gray-400">
                  {sortKey === "amount"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : "⇅"}
                </span>
              </th>
              {role === "admin" && <th className="pb-2">Action</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr
                key={t.id}
                className="border-b last:border-none hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-3">{t.date}</td>

                <td
                  className={
                    t.type === "income"
                      ? "text-green-500 font-medium"
                      : "text-red-500 font-medium"
                  }
                >
                  ₹{t.amount}
                </td>

                <td>{t.category}</td>

                <td className="capitalize">{t.type}</td>

                {role === "admin" && (
                  <td className="space-x-2">
                    <button
                      onClick={() => setEditItem(t)}
                      className="text-blue-500 text-xs"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-500 text-xs"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm mt-3 text-center">
            No transactions found
          </p>
        )}
      </div>

      {editItem && (
        <AddTransactionModal
          transaction={editItem}
          close={() => setEditItem(null)}
        />
      )}
    </>
  );
};

export default TransactionTable;
