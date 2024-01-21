
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



export const Map: FC = () => {
  return (
                  <>
                  <div className="card bg-black  bg-opacity-50 shadow-xl">
  <figure className="px-10 pt-10"><Image src="/map.webp" alt="Bohemia" width={800} height={800} /></figure>
  <div className="card-body">
      <h1 className="mb-5 text-5xl font-bold">Vision Map</h1>
      <p className="mb-5 text-white">An art fair in the Solanaverse
            captivating Bohemia NFTs, envisioned and brought to life by the esteemed
            Filipino artist, Gringo Grass, stand as a testament to artistic innovation and individuality.
            Gringo Grass, known for his distinctive style, has meticulously handcrafted over 170 custom attributes,
            instilling each Bohemian with a distinctive personality that sets it apart in the world of digital art.
            More traits coming soon. And the creative journey continues, promising a myriad of new additions to this
            ever-expanding universe!</p>
      <div className="card-actions justify-center">
      <Link href="https://side.xyz/bohemiaartfair">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500 w-40">SEE ALL LINKS</button>
                  </Link>
    </div>
  </div>
      </div>
      
    </>
   
  );
}