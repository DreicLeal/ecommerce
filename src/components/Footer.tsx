import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full justify-between items-center bg-[var(--secondary)] h-20 p-8">
      <div className="flex gap-4">
        {/* <Link href={} >Portfolio</Link> */}
        <Link href={"/about"}>About me</Link>
      </div>
      <div className="flex gap-4">
        <Link target="_blank" href={"https://www.youtube.com/@dreicleal01"}>
          <FaYoutube className="w-12 h-12" />
        </Link>
        <Link target="_blank" href={"https://www.linkedin.com/in/dreicleal/"}>
          <FaLinkedin className="w-12 h-12" />
        </Link>
        <Link target="_blank" href={"https://github.com/DreicLeal"}>
          <FaGithub className="w-12 h-12" />
        </Link>
      </div>
    </footer>
  );
}
