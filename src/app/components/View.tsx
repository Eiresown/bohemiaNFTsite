
import { FC } from "react";
import { Card } from "./Card";
import { Map } from "./Map";
import { Banner } from "./Banner";
import { BohCard } from "./BohCard";
import { FabCard } from "./FabCard";
import { WoopCard } from "./WoopCard";

export const View: FC = () => {
  return (
    <div className="hero min-h-screen mb-20" style={{backgroundImage: 'url(/sky.webp)', backgroundAttachment: 'fixed'}}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col mt-20 mb-20">
        <Banner />
        <Card />
        <Map /> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="min-h-full">
            <BohCard />
          </div>
          <div className="min-h-full">
            <WoopCard />
          </div>
          <div className="min-h-full">
            <FabCard />
          </div>
        
        </div>
        
      
      </div>
    </div>
  );
}