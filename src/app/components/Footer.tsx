import { FC } from "react";
import Image from "next/image";
import Link from "next/link";


export const Footer: FC = () => {
    return (
        

<footer className="footer footer-center p-10 bg-gradient-to-r from-teal-900 to-teal-500 text-primary-content">
  <aside>
  <Image src="/logo.png" alt="Bohemia" width={50} height={50} />
    <p className="font-bold">
      Bohemia NFT Collection
    </p> 
    
  </aside> 
        <nav className="flex">
          <Link className="pr-5" href="https://twitter.com/BohemiaArtFair"><Image src="/twitter.png" alt="BohemiaXLink" width={35} height={35} /></Link>
          <Link className="pr-5" href="https://magiceden.io/marketplace/bohemia_"><Image src="/me.png" alt="BohemiaMagicEdenLink" width={40} height={40} /></Link>
          <Link href="https://discord.gg/bohemiaartfair"><Image src="/discord.png" alt="BohemiaDiscordLink" width={40} height={40} /></Link>
          </nav>
        </footer>
);
}