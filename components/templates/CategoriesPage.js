import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";

function CategoriesPage({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
      const { difficulty, time } = router.query;
      if (query.difficulty != difficulty || query.time != time) {
        setQuery({ time, difficulty });
      }
    },
    []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };
  // console.log(query);
  return (
    <div>
      <div>
        <div className="flex">
          <div className="mr-4">
            <select
              className="bg-white shadow-md py-2 px-2 rounded text-orange-500"
              value={query.difficulty}
              name="difficulty"
              onChange={changeHandler}
            >
              <option value="">difficulty</option>
              <option value="Hard">difficult</option>
              <option value="Easy">easy</option>
              <option value="Medium">medium</option>
            </select>
          </div>
          <div className="mr-4">
            <select
              className="bg-white shadow-md py-2 px-2 rounded text-orange-500 "
              value={query.time}
              name="time"
              onChange={changeHandler}
            >
              <option value="">cooking time</option>
              <option value="more">more than 30 mins</option>
              <option value="less">less than 30 mins</option>
            </select>
          </div>
          <button
            className="bg-orange-500 rounded py-1 px-2 text-white shadow-lg"
            onClick={searchHandler}
          >
            search
          </button>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-between">
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
