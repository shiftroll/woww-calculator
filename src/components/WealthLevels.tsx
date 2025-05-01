import React from 'react';
interface WealthLevelsProps {
  hnwiAge: number;
  vhnwiAge: number;
  uhnwiAge: number;
}
const WealthLevels: React.FC<WealthLevelsProps> = ({
  hnwiAge,
  vhnwiAge,
  uhnwiAge
}) => {
  return <div className="space-y-4">
      {/* High Net Worth Individual */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h2 className="text-lg md:text-2xl font-bold">HNWI: Age {hnwiAge || "—"}</h2>
        </div>
        <div className="text-gray-300 text-xs md:text-sm">
          <div>High-net-worth: $1 million</div>
        </div>
      </div>

      {/* Very High Net Worth Individual */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h2 className="text-lg md:text-2xl font-bold">VHNWI: Age {vhnwiAge || "—"}</h2>
        </div>
        <div className="text-gray-300 text-xs md:text-sm">
          <div>Very-high-net-worth: $5 million</div>
        </div>
      </div>

      {/* Ultra High Net Worth Individual */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h2 className="text-lg md:text-2xl font-bold">UHNWI: Age {uhnwiAge || "—"}</h2>
        </div>
        <div className="text-gray-300 text-xs md:text-sm">
          <div>Ultra-high-net-worth: $30 million</div>
        </div>
      </div>

      <div className="pt-2 text-center">
        <h2 className="text-base font-bold my-[20px] md:text-3xl">JOIN THE MOVEMENT</h2>
      </div>
    </div>;
};
export default WealthLevels;