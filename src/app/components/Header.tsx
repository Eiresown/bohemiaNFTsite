
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header: FC = () => {
    return (
        <>
    <div className="navbar bg-black fixed" style={{zIndex: 1000}}>
          <div className="flex-1 pl-5">
          <Image src="/logo.png" alt="Bohemia" width={50} height={50} />  
          <Link className="pl-3" href={"/"}>Bohemia</Link>
    </div>
    <div className="flex-none pr-10">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>
            Menu
          </summary>
          <ul className="p-2 bg-black rounded-t-none">
            <li><Link href={"/"}>Staking</Link></li>
          </ul>
        </details>
            </li>
          </ul>
        </div>
      </div>
      </>
    );
  }