import Fast from "../icons/Fast";
import Choice from "../icons/Choice";
import Food from "../icons/Food";
import Clock from "../icons/Clock";

function Attributes() {
  return (
    <>
      <div>
        <p className=" mt-20 mb-5 font-bold text-orange-500">Why MOGA?</p>
      </div>
      <div className="flex justify-between">
        <div className="bg-white shadow-md rounded-md w-28 p-7">
          <div className="mb-4">
            <Fast />
          </div>
          <div>
            <p className="flex justify-center font-semibold text-center">
              Fast
            </p>
          </div>
        </div>

        <div className=" bg-white shadow-md rounded-md w-28 p-7">
          <div className="mb-4">
            <Food />
          </div>
          <div>
            <p className="flex justify-center font-semibold text-center">
              Different Tastes
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md w-28 p-7">
          <div className="mb-4">
            <Clock />
          </div>
          <div>
            <p className="flex justify-center font-semibold text-center">
              24-hours
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md w-28 p-7">
          <div className="mb-4">
            <Choice />
          </div>
          <div>
            <p className="flex justify-center font-semibold text-center">
              Your Choice
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attributes;
