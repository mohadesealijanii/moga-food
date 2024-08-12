import React from "react";
import CategoriesPage from "../../../components/templates/CategoriesPage";

function Categories({ data }) {
  console.log(data);
  return (
    <div>
      <div className="text-xl font-bold border-b-2 w-fit border-orange-600 mt-28 mb-10">
        Categories
      </div>
      <CategoriesPage data={data}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  // console.log(data.details)
  // const filteredData = data.details.filter((item) => {

  //   const difficultyResult = item.filter((food) => {
  //     food.Difficulty && food.Difficulty === difficulty;
  //   });

  //   const timeResult = item.filter((food) => {
  //     const cookingTime = food["Cooking Time"] || "";
  //     const [timeDetail] = cookingTime.split(" ");
  //     if (time === "less" && timeDetail && +timeDetail <= 30) food;
  //     else if (time === "more" && timeDetail && +timeDetail > 30) food;
  //   });
  //   if (time && difficulty && timeResult.length && difficultyResult.length)
  //     item;
  //   else if (!time && difficulty && difficultyResult.length) item;
  //   else if (!difficulty && time && timeResult.length) item;
  // });

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (food) => food.Difficulty && food.Difficulty === difficulty
    );

    const timeResult = item.details.filter((food) => {
      const cookingTime = food["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return food;
      } else if (time === "more" && +timeDetail > 30) {
        return food;
      };
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (!difficulty && time && timeResult.length) {
      return item;
    } else if (!difficulty && !time) {
      return item
    }
  });

  return {
    props: { data: filteredData },
  };
}

export default Categories;
