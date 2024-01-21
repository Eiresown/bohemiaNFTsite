
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



export const Card: FC = () => {
  return (
                  
        <div className="card bg-black bg-opacity-50 shadow-xl">
        <figure className="px-10 pt-10"><Image src="/logo.png" alt="Bohemia" width={200} height={200} /></figure>
        <div className="card-body">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Bohemia</h1>
        <p className="mb-5 text-white"> Our project combines a unique 3D environment gallery concept with stunning art, tokenomics,
          staking and multiple burning mechanics. Bohemia comes with the full package and central to this vibrant world is the Bohemia
          Community—a dynamic gathering of like-minded individuals who share a passion for exploration and discovery. As members of this thriving community,
          Bohemians, Euphorias, and Mythical Creatures alike Fabulosa are granted access to a rich tapestry of tools
          and benefits within the Bohemia Ecosystem. This interconnected web of creativity and collaboration serves as
          a hub for all enthusiasts, fostering a sense of belonging and empowerment.</p>
              <div className="card-actions justify-center">
                <Link href="https://discord.gg/bohemiaartfair">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500">VISIT OUR DISCORD</button>
                  </Link>
        </div>
        </div>
</div>

   
  );
}