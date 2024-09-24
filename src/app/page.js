import Link from "next/link";
import BigCarousal from "../components/bigCarousal";
import Blurb from "../components/blurb";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[600px]">
        <BigCarousal />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-3/5 flex flex-col items-center">
          <Blurb />
          <div></div>
        </div>
      </div>
    </div>
  );
}
