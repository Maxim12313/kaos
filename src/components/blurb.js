import Link from "next/link";

export default function Blurb() {
  return (
    <div className="w-full my-16 flex flex-col justify-center items-center text-center text-mygreen space-y-5">
      <h1>Korean American Otolaryngology Society</h1>
      <h3 className="leading-8 text-xl text-myslate">
        The Korean American Otolaryngology Society (KAOS) works to promote and
        advance otolaryngology knowledge through scientific discussion and
        research
      </h3>
      <Link
        href="../about"
        className="text-xl button px-5 py-2 rounded-3xl hover:text-white hover:bg-mygreen"
      >
        About Us
      </Link>
    </div>
  );
}
