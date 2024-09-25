import Link from "next/link";
import Image from "next/image";
import logo from "../images/kaos-logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col h-32">
      <div className="flex flex-row bg-mygray w-full h-1/3 items-center justify-end space-x-20">
        <a>A</a>
        <a>B</a>
        <a>C</a>
        <Link
          href="/contact"
          className="px-8 bg-mycyan h-full justify-center flex items-center text-white"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-row bg-white w-full h-full items-center justify-between px-16">
        <Link href="/">
          <Image src={logo} height={75} width={0} alt="logo" />
        </Link>
        <div className="flex flex-row justify-end">
          <h3 className="flex flex-row justify-center flex-1">
            <Link className="px-8" href="/about">
              About Us
            </Link>
            <Link className="px-8" href="/membership">
              Membership
            </Link>
            <Link className="px-8" href="/programs">
              Programs
            </Link>
            <Link className="px-8" href="/events">
              Events
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
