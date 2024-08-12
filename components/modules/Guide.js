import Link from "next/link";
import React from "react";

function Guide() {
  return (
    <div className="mt-20 mb-5 flex justify-around">
      <Link href='/menu' className="bg-white shadow-md p-2 px-9 rounded-md font-bold">Menu</Link>
      <Link href='/categories' className="bg-white shadow-md p-2 px-9 rounded-md font-bold">
        Categories
      </Link>
      <Link href='/' className="bg-white shadow-md p-2 px-9 rounded-md font-bold">
        Discount
      </Link>
    </div>
  );
}

export default Guide;
