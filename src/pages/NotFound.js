import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center p-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
        404 - Page Not Found
      </h1>
      <p className="text-gray-400 mt-4">
        Sorry, the page you're looking for doesn't exist or the network is down.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-gradient-to-r from-green-400 via-blue-400 to-indigo-500 text-black font-semibold rounded-lg hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}