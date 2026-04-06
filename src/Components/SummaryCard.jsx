const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-200 border border-gray-100">
      <div className="">
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-1">₹{value}</h2>
      </div>
    </div>
  );
};

export default SummaryCard;
