
import React from 'react';

interface WealthLevelsProps {
  hnwiAge: number;
  vhnwiAge: number;
  uhnwiAge: number;
}

const WealthLevels: React.FC<WealthLevelsProps> = ({ hnwiAge, vhnwiAge, uhnwiAge }) => {
  return (
    <div className="space-y-6">
      {/* High Net Worth Individual */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h2 className="text-3xl md:text-5xl font-bold">HNWI: Age {hnwiAge || "—"}</h2>
        </div>
        <div className="text-gray-300">
          <div className="text-sm md:text-base">High-net-worth individual</div>
          <div className="text-sm md:text-base">Net worth $1 million</div>
        </div>
      </div>

      {/* Very High Net Worth Individual */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h2 className="text-3xl md:text-5xl font-bold">VHNWI: Age {vhnwiAge || "—"}</h2>
        </div>
        <div className="text-gray-300">
          <div className="text-sm md:text-base">Very-high-net-worth individual</div>
          <div className="text-sm md:text-base">Net worth $5 million</div>
        </div>
      </div>

      {/* Ultra High Net Worth Individual */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h2 className="text-3xl md:text-5xl font-bold">UHNWI: Age {uhnwiAge || "—"}</h2>
        </div>
        <div className="text-gray-300">
          <div className="text-sm md:text-base">Ultra-high-net-worth individual</div>
          <div className="text-sm md:text-base">Net worth $30 million</div>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-widest">JOIN THE MOVEMENT.</h2>
      </div>
    </div>
  );
};

export default WealthLevels;
