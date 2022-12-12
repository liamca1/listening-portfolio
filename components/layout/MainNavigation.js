import Link from "next/link";

import dynamic from "next/dynamic";
const Button = dynamic(() => import("../layout/ButtonToggle"), {
  ssr: false,
});

function MainNavigation() {
  return (
    <div className="flex flex-wrap justify-center items-baseline space-y-1 h-full w-full font-sm pt-6 lg:pt-12 p-2 ">
      <div className="item w-1/4 h-auto order-1">
        <Link
          // className="border border-yellow-300 border-t-1 border-l-1 border-r-1 border-b-1"
          href="/"
        >
          Liam Carroll
        </Link>
      </div>
      <div className="item w-1/4 h-auto order-2 ">
        <Link
          // className="border border-yellow-300 border-t-1 border-l-1 border-r-1 border-b-1"
          href="/work"
        >
          Archive
        </Link>
      </div>
      <div className="item w-1/4 h-auto order-3 ">
        <Link className="font text-right " href="/contact">
          Contact
        </Link>
      </div>
      <div className="item w-1/4 h-auto order-4 place-self-center">
        <Button />
      </div>
    </div>
  );
}

export default MainNavigation;
