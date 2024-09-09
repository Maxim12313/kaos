import Image from "next/image";

export default function Slide({ content, image }) {
  return (
    <div className="flex items-center justify-center helper w-full  h-full">
      <Image src={image} width={0} height={0} alt="slide" />
      <h1 className="text-5xl font-bold">{content}</h1>
    </div>
  );
}
