import Link from "next/link";
import Location from "../icons/Location";

function DetailsPage({ data }) {
  const { id, name, price, details, introduction, ingredients, recipe } =
    data.data;
  console.log(data.data);
  return (
    <div className="container mt-40">
      <h2 className="text-2xl font-bold border-b-4 border-orange-600 w-fit mb-4">
        Details
      </h2>
      <div className="flex">
        <div className="w-4/12">
          <img className="rounded" src={`/images/${id}.jpeg`} />
        </div>
        <div className="ml-6 flex flex-col w-8/12">
          <p className="font-bold mb-2 text-3xl text-orange-500 text-nowrap">
            {name}
          </p>
          <p>{introduction}</p>
          {/* <p>{price} $</p> */}
          <div className="mt-32 flex">
            {/* <Location /> */}
            {/* <p className="-mt-1 text-gray-700">{details[0].Cuisine}</p> */}
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <h2 className="text-2xl border-b-2 border-orange-600 w-fit mb-4">
            Food Information
          </h2>
          <div>
            {details.map((detail, index) => (
              <li key={index} className="text-orange-500">
                <span className="text-black font-bold mr-2">
                  {Object.keys(detail)[0]}:
                </span>
                <span className="text-gray-900">
                  {Object.values(detail)[0]}
                </span>
              </li>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl border-b-2 border-orange-600 w-fit mb-4 mt-20">
            Ingredients
          </h2>
          <div>
            {ingredients.map((item, index) => (
              <li key={index} className="text-orange-600">
                <span className="text-black font-bold">{item}</span>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl border-b-2 border-orange-600 w-fit mb-4 mt-20">
          Recipe
        </h2>
        <div>
          {recipe.map((item, index) => (
            <li
              key={index}
              className={`list-none text-black ${
                index % 2 ? "bg-orange-300" : "bg-orange-200"
              }`}
            >
              <div className="flex">
                <span className="text-3xl m-3">{index + 1}</span>
                <span className="my-auto">{item}</span>
              </div>
            </li>
          ))}
        </div>
        <div className="flex justify-center mt-16 bg-orange-500 rounded text-white font-bold text-xl p-1">
          <Link href={"/purchase"}>Order</Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
