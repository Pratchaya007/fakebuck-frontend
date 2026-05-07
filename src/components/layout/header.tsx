import Image from "next/image";
import Link from "next/link";
import MainNavigation from "./main-navigation";
import UserDropdown from "./user-dropdown";

export default function Header() {
  return (
    <header className="bg-background shadow grid grid-cols-3 h-14 items-center fixed top-0 left-0 right-0 z-50 px-4">
      {/* Fakebuck logo */}
      <Link href={"/"} className=" size-10 relative">
        <Image alt="Fakebuck" src={"/logo.png"} fill />
      </Link>
      {/* Main navigation */}
      <MainNavigation />

      <div className=" justify-self-end">
        <UserDropdown />
      </div>
    </header>
  );
}
