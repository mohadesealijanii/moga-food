import Card from "../modules/Card";

function MenuPage({ data }) {
  console.log({ data });
  return (
    <>
      <div>
        <h2 className="text-orange-500 text-xl font-bold border-b-2 w-fit border-orange-600 mt-28 mb-10">Menu</h2>
        <div className="flex flex-row flex-wrap justify-between">
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuPage;
