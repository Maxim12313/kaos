import Link from "next/link";
import BigCarousal from "../components/bigCarousal";
import Blurb from "../components/blurb";
import CardSet from "../components/cardSet";
import PresidentMessage from "../components/presidentMessage";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[600px]">
        <BigCarousal />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-3/5 flex flex-col items-center mb-[100px]">
          <Blurb />
        </div>
        <div className="w-full flex flex-col items-center bg-mygray">
          <div className="w-4/5 flex flex-col items-center relative top-[-100px] mb-[-100px]">
            <CardSet />
          </div>
          <div className="w-3/5 flex flex-col items-center m-10">
            <PresidentMessage />
          </div>
        </div>
      </div>
    </div>
  );
}
