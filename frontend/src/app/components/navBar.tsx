import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="bg-black text-white">
      <nav className="p-4">
        <div className="px-2 flex justify-between items-center">
          <span className="font-bold">CRUD</span>
          <ul className="flex space-x-4">
            <li>
              <Link href="/index" className="text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/update" className="text-blue-500">
                Update
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
