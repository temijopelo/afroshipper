export default function Table({ columns, data }) {
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "expired":
        return "text-yellow-600 border-yellow-600";
      case "signed out":
        return "text-red-600 border-red-600";
      case "active":
        return "text-green-600 border-green-600";
      default:
        return "text-gray-500 border-gray-300"; // Default style
    }
  };
  return (
    <div className="border-[1px] rounded-xl">
      <div className="flex justify-between items-center p-6">
        <h2 className="text-2xl font-semibold">Session Logs</h2>
        <button className="px-4 py-2 bg-[#0C0F5C] text-white rounded-lg">
          Sign Out All Sessions
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead className="bg-[#F9FAFB] text-[#475467] ">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="text-left py-4 px-4 border-y">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100 transition">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="py-6 px-4 border-b">
                    {col === "ActivityStatus" ? (
                      <span
                        className={`px-2 py-1 border rounded-full text-sm ${getStatusStyles(
                          row[col]
                        )}`}
                      >
                        {row[col] || "Unknown"}
                      </span>
                    ) : (
                      row[col]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
