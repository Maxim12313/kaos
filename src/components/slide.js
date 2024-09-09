import Image from "next/image";

export default function Slide({ title, image, caption }) {
  return (
    <div className="flex items-center justify-center w-full  h-full bg-slate-300">
      <Image src={image} width={0} height={0} alt="slide" />
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-center text-center space-y-5">
        <h1 className="text-5xl">{title}</h1>
        <p>{caption}</p>
      </div>
    </div>
  );
}
