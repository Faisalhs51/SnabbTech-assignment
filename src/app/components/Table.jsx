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
      <section>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country Code</th>
            <th>
              Email <button onClick={handleSort}>sort</button>
            </th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.countryCode}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default memo(Table);
