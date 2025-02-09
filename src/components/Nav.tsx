import { useLanguageContext } from "@/contexts/languageContext/languageContext";
import Link from "next/link";

export default function Nav() {
  const { languageSpreader } = useLanguageContext();

  const transition =
    "hover:bg-[var(--primary)] hover:bg-opacity-80 transition ease-in-out duration-150";

  return (
    <>
      <Link
        className={`${transition} text-[var(--text)] p-2 rounded-md`}
        href={"/"}
      >
        {languageSpreader.header.nav.home}
      </Link>
      <Link
        className={`${transition} text-[var(--text)] p-2 rounded-md`}
        href={"/about"}
      >
        {languageSpreader.header.nav.about}
      </Link>
      <Link
        className={`${transition} text-[var(--text)] p-2 rounded-md`}
        href={"/contact"}
      >
        {languageSpreader.header.nav.contact}
      </Link>
    </>
  );
}
