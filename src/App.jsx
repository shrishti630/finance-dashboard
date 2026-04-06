import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    console.log("Dark mode:", dark);

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg--100 dark:bg-gray-900 text-black dark:text-white p-4 transition-colors">
      <button
        onClick={() => setDark(!dark)}
        className="mb-4 px-3 py-1 border rounded bg-white-200 dark:bg-gray-700 cursor-pointer"
      >
        Toggle Dark
      </button>

      <div className="max-w-6xl mx-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
