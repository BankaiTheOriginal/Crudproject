"use client";
import React, { useState } from "react";
import { createUsers, deleteUsers, fetchData } from "@/app/api/api";
import { DataInterface } from "../interfaces/dataInterface";
import NavBar from "../components/navBar";

export default function Index() {
  const [wholeData, setwholeData] = useState<DataInterface[] | null>(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [deletePress, setdeletePress] = useState(false);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await createUsers(name, email);
      setMessage("User created successfully");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage(`Failed to create user ${error}`);
    }
  }

  async function handleFetchData() {
    const data = await fetchData();
    console.log(data);
    setwholeData(data);
    setdeletePress(false);
  }

  async function deleteAllUsers() {
    await deleteUsers();
    setdeletePress(true);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex items-center justify-center h-1/2">
        <div className="container mx-auto py-10 w-1/4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-5 w-56 mx-auto">
              <input
                className="border p-2 rounded border-black"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border p-2 rounded border-black"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-blue-500 text-white p-2 rounded">
                Submit
              </button>
            </div>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}

          <div className="mt-5 flex">
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={handleFetchData}
            >
              Get all records
            </button>
          </div>
          <div className="mt-5">
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={deleteAllUsers}
            >
              Delete all records
            </button>
          </div>

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
      </div>
    </div>
  );
}
