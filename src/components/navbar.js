import Link from "next/link";
import Image from "next/image";
import logo from "../images/kaos-logo.png";
import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col h-32">
      <div className="flex flex-row bg-mygray w-full h-1/3 items-center justify-end space-x-5">
        <a
          href="https://www.instagram.com/kaosotosociety/"
          className="icon py-2"
        >
          <Image src={instagram} alt="instagram" height={25} width={20} />
        </a>
        <a href="https://hi-in.facebook.com/kaos.home.1/" className="icon py-2">
          <Image src={facebook} alt="facebook" height={25} width={20} />
        </a>
        <Link
          href="/"
          className="h-full justify-center flex items-center hover:text-mygreen duration-300"
        >
          KAOS
        </Link>
        <Link
          href="/contact"
          className="px-8 bg-mycyan h-full justify-center flex items-center text-white duration-300 hover:bg-mygreen"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex flex-row bg-white w-full h-full items-center justify-between px-16">
        <Link href="/">
          <Image src={logo} height={75} width={0} alt="logo" />
        </Link>
        <div className="flex flex-row justify-end">
          <h3 className="flex flex-row justify-center flex-1 space-x-8">
            <Link className="navlink py-3" href="/about">
              About Us
            </Link>
            <Link className="navlink py-3" href="/membership">
              Membership
            </Link>
            <Link className="navlink py-3" href="/programs">
              Programs
            </Link>
            <Link className="navlink py-3" href="/events">
              Events
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
