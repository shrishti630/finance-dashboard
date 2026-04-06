import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RoleToggle = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border px-3 py-1 rounded-md"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleToggle;
