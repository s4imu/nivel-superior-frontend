import Image from "next/image";
import Link from "next/link";

function Logo({ color }) {
  return (
    <>
      <Link href="/">
        <Image
          src={`/logo-${color}.png`}
          alt="Nível Superior Logo"
          width={140}
          height={140}
        />
      </Link>
    </>
  );
}

export default Logo;
