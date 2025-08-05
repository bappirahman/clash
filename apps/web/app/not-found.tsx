import notFoundImg from "@/public/404.svg";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={notFoundImg} alt="not found" className="h-screen w-screen" />
    </div>
  );
}

export default NotFound;
