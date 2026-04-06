import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddTransactionModal = ({ close }) => {
  const { setTransactions } = useContext(AppContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.date || !form.amount || !form.category) {
      setError("All fields are required");
      return;
    }

    let amount = Number(form.amount);

    if (form.type === "expense") {
      amount = -Math.abs(amount);
    } else {
      amount = Math.abs(amount);
    }

    setTransactions((prev) => [...prev, { id: Date.now(), ...form, amount }]);

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl w-80 space-y-3">
        <h2 className="font-bold">Add Transaction</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="date"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 w-full rounded"
        />

        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="border p-2 w-full rounded"
        />

        <select
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Salary">Salary</option>
        </select>

        <select
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 w-full rounded"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Add
        </button>
        <button onClick={close} className="border w-full py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTransactionModal;
