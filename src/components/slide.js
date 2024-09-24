import Image from "next/image";
import Link from "next/link";

export default function Slide({ title, image, url }) {
  return (
    <div className="flex items-center justify-center w-full  h-full">
      <Image src={image} width={0} height={0} alt="slide" />
      <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center">
        <div className="h-1/2 w-1/2 flex flex-col justify-center items-center text-center space-y-10">
          <h1 className="text-6xl text-white">{title}</h1>
          <Link
            className="button px-5 py-2 rounded-3xl text-white border-white hover:text-black hover:bg-white"
            href={url}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
