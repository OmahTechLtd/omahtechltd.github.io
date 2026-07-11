import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center p-6 select-none">
      {/* Structural Minimalist Status Code */}
      <h1 className="text-6xl font-extrabold tracking-tight text-white mb-2">
        404
      </h1>
      
      {/* Clean, Non-gradient Typography */}
      <h2 className="text-xl font-medium text-gray-200 tracking-wide">
        Page Not Found
      </h2>
      
      <p className="text-sm text-gray-400 mt-4 max-w-sm leading-relaxed">
        The resource you are looking for does not exist, has been relocated, or is temporarily unavailable.
      </p>

      {/* Premium Institutional Action Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-2.5 text-xs tracking-wider uppercase font-medium bg-white text-black border border-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}