
import Image from "next/image";
import { FC } from "react";



export const Banner: FC = () => {
  return (
    
          <>
          <div className="card card-compact bg-base-100 shadow-xl">
          <figure><Image src="/banner.jpg" alt="Bohemia" width={800} height={800} /></figure>
          </div>
          </>
   
  );
}