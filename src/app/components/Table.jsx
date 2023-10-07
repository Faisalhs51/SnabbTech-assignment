import { memo, useEffect, useState } from "react";

const Table = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");

  //Setting Table Data
  useEffect(() => {
    setTableData(data);
  }, [data]);

  //Debouncing for Search Name Input
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [search]);

  //Search Name Function
  const handleSearch = () => {
    const newData = data.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setTableData(newData);
  };

  //Sorting Email Function
  const handleSort = () => {
    const newData = [...tableData];
    newData.sort((a, b) => {
      if (a.email > b.email) {
        return 1;
      }
      if (a.email < b.email) {
        return -1;
      }
      return 0;
    });
    setTableData(newData);
  };

  return (
    <>
      <div className="w-full h-fit p-5 my-10 bg-gray-300 border-2 border-black">
        <h1 className="text-4xl font-bold text-center w-full pt-5">
          Details Table
        </h1>
        <section>
          <label htmlFor="search" className="text-2xl text-black">
            Search Name:{" "}
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search"
            placeholder="Search Name"
            className="w-1/5 text-xl focus:outline-none border-2 border-black rounded-md bg-slate-100 p-2"
          />
        </section>
        <div className="flex w-full items-center justify-center text-2xl">
          <table className="table-auto w-3/4 ">
            <thead className="table-header-group">
              <tr className="table-row">
                <th className="table-cell text-left p-3">Name</th>
                <th className="table-cell text-left p-3">Country Code</th>
                <th className="table-cell text-left p-3">
                  Email
                  <button
                    onClick={handleSort}
                    className="pl-14 hover:scale-105 hover:opacity-75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="currentColor"
                      class="bi bi-sort-alpha-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                      />
                      <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                    </svg>
                  </button>
                </th>
                <th className="table-cell text-left p-3">Password</th>
              </tr>
            </thead>
            <tbody className="table-row-group">
              {tableData.map((item, index) => (
                <tr className="table-row" key={index}>
                  <td className="table-cell p-3 capitalize">{item.name}</td>
                  <td className="table-cell p-3">+{item.countryCode}</td>
                  <td className="table-cell p-3">{item.email}</td>
                  <td className="table-cell p-3">{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default memo(Table);
