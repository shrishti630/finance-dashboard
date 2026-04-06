import { createContext, useState, useEffect } from "react";
import { data } from "../data/dummyData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : data;
  });

  const [role, setRole] = useState("admin");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
