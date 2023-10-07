"use client";
import { useState } from "react";
import Table from "./components/Table";

export default function Home() {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState(91);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  //Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation for Name
    if (name.length < 3) {
      alert("Name should be atleast 3 characters long");
      return;
    }
    //Validation for Email
    if (email.indexOf("@") === -1) {
      alert("Email should be valid");
      return;
    }
    //Validation for Password
    if (password.length < 6) {
      alert("Password should be atleast 8 characters long");
      return;
    }
    setData((prevData) => [
      ...prevData,
      { name, countryCode, email, password },
    ]);
    setName("");
    setCountryCode(91);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <main className="h-screen w-full">
        <form className="flex flex-col justify-evenly items-center h-5/6 w-full">
          <h1 className="text-4xl font-bold uppercase">Registration Form</h1>
          <div className="flex justify-between items-start w-1/2">
            <label htmlFor="name" className="text-3xl text-black">
              Name:
            </label>
            <input
              type="text"
              required
              value={name}
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your name"
              className="w-3/5 text-3xl focus:outline-none border-2 border-black rounded-md bg-slate-100 capitalize p-2"
            />
          </div>
          <div className="flex justify-between items-start w-1/2">
            <label htmlFor="country-code" className="text-3xl text-black">
              Country Code:
            </label>
            <input
              type="number"
              required
              value={countryCode}
              id="country-code"
              onChange={(e) => {
                setCountryCode(e.target.value);
              }}
              placeholder="Enter your country code"
              className="w-3/5 text-3xl focus:outline-none border-2 border-black rounded-md bg-slate-100 p-2"
            ></input>
          </div>
          <div className="flex justify-between items-start w-1/2">
            <label htmlFor="email" className="text-3xl text-black">
              Email:
            </label>
            <input
              type="email"
              required
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="w-3/5 text-3xl focus:outline-none border-2 border-black rounded-md bg-slate-100 p-2"
            ></input>
          </div>
          <div className="flex justify-between items-start w-1/2">
            <label htmlFor="password" className="text-3xl text-black">
              Password:
            </label>
            <input
              type="text"
              required
              value={password}
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              className="w-3/5 text-3xl focus:outline-none border-2 border-black rounded-md bg-slate-100 p-2"
            ></input>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-slate-300 p-5 text-3xl rounded-lg hover:scale-110 hover:opacity-75"
          >
            Submit
          </button>
        </form>
        <Table data={data} />
      </main>
    </>
  );
}
