import Image from "next/image";

export default function BigText({ title, image }) {
  return (
    <div className="h-[400px] w-full flex flex-col justify-center items-center overflow-hidden">
      <Image
        className="w-full"
        src={image}
        alt="big image"
        width={0}
        height={0}
      />
      <div className="w-3/4">
        <h1 className="absolute bottom-1/2 font-shadow  text-white">{title}</h1>
      </div>
    </div>
  );
}
