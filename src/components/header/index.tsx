import { MdFavoriteBorder } from "react-icons/md";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between py-4 px-8 border border-gray-300 shadow-md bg-white">
            <a href="/">
                <Image
                    className="object-contain"
                    src="/assets/logo1.png"
                    alt="logo"
                    width={120}
                    height={50}
                    priority
                />
            </a>

            <div className="flex gap-2">
                <a href="/home" className="flex justify-center items-center gap-1 border-2 border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
                    <IoHomeOutline size={'22px'} color="#0ea5e9" />
                    <span>Home</span>
                </a>

                <a href="/favoritos" className="flex justify-center items-center gap-1 border-2 border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
                    <MdFavoriteBorder size={'22px'} color="#0ea5e9" />
                    <span>Favoritos</span>
                </a>

            </div>
        </header>
    );
}
