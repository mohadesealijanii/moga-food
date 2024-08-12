import Link from "next/link";

function Banner() {
  return (
    <div className="container w-screen flex mx-auto mt-28">
      <div className="w-4/12">
        <h1 className="flex flex-col font-extrabold border-orange-400 border-b-2 w-max">
          MOGA Catering
        </h1>
        <h2 className="mt-5 font-bold">Food Delivery and Takeout!</h2>
        <h3 className="mt-2 mb-4">
          <span className="font-bold text-orange-400">MOGA </span>
          is the first online Food Court for those who care about their health.
          Foods are delivered as fast as possible by couries using cars,
          scooters, bikes and even on foot.
        </h3>
        <Link
          href="/menu"
          className="text-white bg-orange-400 px-4 py-1 rounded"
        >
          see all
        </Link>
      </div>
      <div>
        <img src="/images/banner.png" className="w-96 -mt-4" />
      </div>
    </div>
  );
}

export default Banner