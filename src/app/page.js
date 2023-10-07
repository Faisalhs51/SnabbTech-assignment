"use client";
import { useEffect, useState } from "react";
import Table from "./components/Table";

export default function Home() {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState(91);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data.push({ name, countryCode, email, password }));
    // data.push({ name, countryCode, email, password })
    setData( prevData => [...prevData, {name, countryCode, email, password}]);
  };
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <>
      <main>
        <form className="flex flex-col justify-center items-center content-center h-4/5 w-full">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <label htmlFor="country-code">Country Code</label>
          <input
            type="number"
            required
            value={countryCode}
            onChange={(e) => {
              setCountryCode(e.target.value);
            }}
            placeholder="Enter your country code"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <Table data={data} />
      </main>
    </>
  );
}
