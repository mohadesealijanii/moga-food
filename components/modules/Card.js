import Link from "next/link";
import React from "react";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function Card(props) {
  const { id, name, price, discount, details } = props;
  return (
    <div className="shadow-md p-2 rounded-md">
      <p>
        {discount ? (
          <span className="absolute bg-red-600 shadow-stone-100 shadow-lg text-white p-1 rounded">
            -{discount}%
          </span>
        ) : null}
      </p>
      <img src={`/images/${id}.jpeg`} className="w-60 rounded mb-4" />
      <div className="flex justify-between">
        <h2 className="font-bold text-orange-500">{name}</h2>
        <div className="flex">
          <div className="mt-1">
            <Location />
          </div>
          <span className=" mt-1 text-gray-600 text-sm">
            {details[0].Cuisine}
          </span>
        </div>
      </div>
      <div className="my-3 flex">
        <Dollar />
        {discount ? (
          <span className="text-green-600 font-bold">{(price * (100 - discount)) / 100} $</span>
        ) : (
          <span>{price}$</span>
        )}
      </div>
      <div className="bg-orange-500 text-white rounded text-center mt-3">
        <Link href={`/menu/${id}`}>See Details</Link>
      </div>
    </div>
  );
}

export default Card;
