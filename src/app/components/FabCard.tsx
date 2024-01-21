
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";



export const FabCard: FC = () => {
  return (
                  
        <div className="card bg-black bg-opacity-50 shadow-xl">
        <figure className="px-10 pt-10"><Image src="/fabPfp.webp" alt="Bohemia" width={200} height={200} /></figure>
        <div className="card-body">
            <h1 className="mb-5 text-5xl font-bold">Fabulosa</h1>
            <p className="mb-5 text-white">A NFT collection feturing 3,000 pieces from Bohemia. Those who don't believe in magic will never find it.


</p>
              <div className="card-actions justify-center flex flex-col mx-auto">
                <Link href="https://magiceden.io/marketplace/fabulosa">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500 w-40">Magic Eden</button>
                  </Link>
                <Link href="https://www.tensor.trade/trade/fabulosa">
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-teal-500 w-40">Tensor</button>
                  </Link>
        </div>
        </div>
</div>

   
  );
}