import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto p-8 px-72 overflow-hidden">
        <header className="flex justify-between">
          <div className="text-2xl font-bold text-orange-500">
            <Link href="/">MOGA</Link>
          </div>
          <div className="flex ">
            <div className="mr-3 relative text-black hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              <Link href="/menu">menu</Link>
            </div>
            <div className="relative text-black hover:text-orange-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              <Link href="/categories">categories</Link>
            </div>
          </div>
        </header>
        <div>{children}</div>
        <footer>
          <h1 className="mt-96 text-center">developed by ALJ</h1>
        </footer>
      </div>
    </>
  );
}

export default Layout;
