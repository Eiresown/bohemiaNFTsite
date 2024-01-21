import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



export const WoopCard: FC = () => {
  return (
                  
        <div className="card bg-black bg-opacity-50 shadow-xl h-full">
        <figure className="px-10 pt-10 pb-3"><Image src="/woop.png" alt="Bohemia" width={200} height={200} /></figure>
        <div className="card-body">
            <h1 className="mb-5 text-5xl font-bold">$WOOP</h1>
            <p className="mb-5 text-white">Buy $WOOP on Raydium or birdeye.</p>
              <div className="card-actions justify-center flex flex-col mx-auto">
                <Link href="https://raydium.io/swap/?inputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputCurrency=A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500 w-40">RAYDIUM</button>
                  </Link>
                <Link href="https://birdeye.so/token/A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB?chain=solana">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500 w-40">BIRDEYE</button>
                  </Link>
                </div>
                </div>
</div>

   
  );
}