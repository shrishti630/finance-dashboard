import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b", "#8b5cf6"];

const MyPieChart = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + Math.abs(t.amount);
  });

  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-sm text-gray-500 mb-2">Spending Breakdown</h3>

      <PieChart width={300} height={250}>
        <Pie data={data} dataKey="value" outerRadius={90} label>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
