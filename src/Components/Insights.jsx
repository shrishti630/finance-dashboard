import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce(
    (sum, t) => sum + Math.abs(t.amount || 0),
    0,
  );

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + Math.abs(t.amount || 0);
  });

  const highestCategory = Object.keys(categoryMap).reduce(
    (a, b) => (categoryMap[a] > categoryMap[b] ? a : b),
    "-",
  );

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="font-semibold">Insights</h3>
      <p className="text-xs text-gray-400 mb-3">
        Spending is highest in {highestCategory}, consider reviewing this
        category.
      </p>
      <div className="border-t pt-3 space-y-3 text-sm text-gray-600"></div>
      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex justify-between">
          <span className="text-gray-400">Total Expenses</span>
          <span className="font-medium text-gray-800">₹{totalExpense}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Top Spending Category</span>
          <span className="font-medium text-gray-800">{highestCategory}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Average Spend per Transaction</span>

          <span className="font-medium text-gray-800">
            ₹{expenses.length ? Math.round(totalExpense / expenses.length) : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Insights;
