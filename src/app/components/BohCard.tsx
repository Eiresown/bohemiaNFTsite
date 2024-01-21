
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



export const BohCard: FC = () => {
  return (
                  
        <div className="card bg-black bg-opacity-50 shadow-xl">
        <figure className="px-10 pt-10"><Image src="/pfp.webp" alt="Bohemia" width={200} height={200} /></figure>
        <div className="card-body">
            <h1 className="mb-5 text-5xl font-bold">Bohemia</h1>
              <p className="mb-5 text-white">Bohemia is Solana's interactive NFT Art Fair that 5000 Bohemians call home. Pick up yours on Magic Eden or Tensor.</p>
              <div className="card-actions justify-center flex flex-col mx-auto">
                <Link href="https://magiceden.io/marketplace/bohemia_">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500 w-40">Magic Eden</button>
                  </Link>
                <Link href="https://www.tensor.trade/trade/bohemia_">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500 w-40">Tensor</button>
                  </Link>
        </div>
        </div>
</div>

   
  );
}