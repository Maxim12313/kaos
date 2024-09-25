import Link from "next/link";

export default function Card({ title, color, url }) {
  return (
    <Link
      className="relative w-96 h-64 flex flex-col items-center justify-center rounded-lg bg-white shadow-sm 
								shadow-black overflow-hidden group group-hover:text-white"
      style={{ background: color, color }}
      href={url}
    >
      <div
        className="absolute inset-0 transition-transform duration-[400ms] transform -translate-y-2 
									group-hover:translate-y-[-100%] bg-white "
      />
      <div
        className="flex flex-col items-center justify-center w-full h-full m-3 group-hover:text-white 
											duration-200 z-10"
      >
        <h2>{title}</h2>
        <p>Learn More</p>
      </div>
    </Link>
  );
}
