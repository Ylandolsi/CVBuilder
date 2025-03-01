import { PiReadCvLogoLight } from "react-icons/pi";

export default function Navbar() {
  return (
    <>
      <div className="w-100% bg-gray-100">
        <a
          href="#"
          className="flex gap-3 items-center justify-start pl-10 p-4 text-black"
        >
          <PiReadCvLogoLight className="w-10 h-10" />
          <h1 className="text-2xl">Build Your CV</h1>
        </a>
      </div>
    </>
  );
}
