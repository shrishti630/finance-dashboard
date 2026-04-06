import SummaryCard from "../Components/SummaryCard";
import TransactionTable from "../Components/Transactions/TransactionTable";
import Insights from "../Components/Insights";
import RoleToggle from "../Components/RoleToggle";
import MyPieChart from "../Components/Charts/PieChart";
import MyLineChart from "../Components/Charts/LineChart";
import AddTransactionModal from "../Components/AddTransactionModal";

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { transactions, role } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + (b.amount || 0), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + Math.abs(b.amount || 0), 0);

  const balance = income - expense;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Finance Dashboard</h1>
        <div className="flex gap-3 items-center">
          <RoleToggle />

          {role === "admin" && (
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition text-white px-4 py-2 rounded-lg shadow-sm"
            >
              + Add
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <MyLineChart data={transactions} />
        <MyPieChart />
      </div>

      <TransactionTable />

      <Insights />

      {open && <AddTransactionModal close={() => setOpen(false)} />}
    </div>
  );
};

export default Dashboard;
