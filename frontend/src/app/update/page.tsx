"use client";
import React, { useState } from "react";
import NavBar from "../components/navBar";
import { fetchData, updateUser } from "../api/api";
import { DataInterface } from "../interfaces/dataInterface";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [deletePress, setdeletePress] = useState(false);
  const [wholeData, setwholeData] = useState<DataInterface[] | null>(null);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await updateUser(id, name, email);
      setMessage(
        `User updated successfully: Username is now ${name} and Email is ${email}`
      );
      handleFetchData();
    } catch (error) {
      console.error("Failed to update user", error);
      setMessage(`Failed to update user ${error}`);
    } finally {
      setLoading(false);
    }
  }
  async function handleFetchData() {
    const data = await fetchData();
    console.log(data);
    setwholeData(data);
    setdeletePress(false);
  }
  return (
    <div>
      <NavBar />
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <form
            className="py-10 flex flex-col space-y-4 w-1/2"
            onSubmit={handleUpdate}
          >
            <input
              value={id}
              type="text"
              className="border border-black rounded p-1"
              placeholder="Enter your ID"
              onChange={(e) => setId(e.target.value)}
            />
            <input
              value={name}
              type="text"
              className="border border-black rounded p-1"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={email}
              type="email"
              className="border border-black rounded p-1"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-green-500 rounded w- p-2 text-white">
              {loading ? "Updating...." : "Update User"}
            </button>
          </form>
          <button
            className="bg-blue-500 rounded w-1/2 p-2 h-fit text-white"
            onClick={handleFetchData}
          >
            Fetch Records
          </button>
        </div>
      </div>
      {message && <p className="text-center">{message}</p>}
      {wholeData && deletePress === false && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">All Records</h2>
          <ul>
            {wholeData.map((item) => (
              <div
                key={item.id}
                className="mt-5 p-4 border rounded shadow-lg bg-gray-100"
              >
                <h2>{item.id}</h2>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>
                  <strong>Email:</strong> {item.email}
                </p>
                <p>
                  <strong>Age:</strong> {item.age}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {item.isActive ? "Active" : "Inactive"}
                </p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
