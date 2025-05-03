
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import WealthLevels from './WealthLevels';
import { calculateFutureWealth } from '@/lib/financialUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const FinancialCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(2500);
  const [monthlyContribution, setMonthlyContribution] = useState(450);
  const [startingAge, setStartingAge] = useState(23);
  const [hnwiAge, setHnwiAge] = useState(0);
  const [vhnwiAge, setVhnwiAge] = useState(0);
  const [uhnwiAge, setUhnwiAge] = useState(0);
  const isMobile = useIsMobile();

  // Calculate wealth levels when inputs change
  useEffect(() => {
    const result = calculateFutureWealth(initialInvestment, monthlyContribution, startingAge);
    setHnwiAge(result.hnwiAge);
    setVhnwiAge(result.vhnwiAge);
    setUhnwiAge(result.uhnwiAge);
  }, [initialInvestment, monthlyContribution, startingAge]);
  
  return <Card className="w-full mx-auto border-gray-200 bg-white text-[#31322C]">
      <CardHeader className="pb-2 text-center">
        <CardTitle className="font-bold text-[#31322C] mt-2 md:text-4xl px-[4px] text-3xl">
          Financial Future Calculator
        </CardTitle>
        <p className="text-xs md:text-sm text-gray-500 px-4 pb-2">
          Based on Snobol fund's average annual return of 32.08%
        </p>
      </CardHeader>

      <CardContent className="px-4 pb-6 py-[16px]">
        <div className="space-y-6 mt-2">
          {/* Initial Investment Slider */}
          {isMobile ? <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">Initial</div>
                <div className="text-base font-semibold">${initialInvestment.toLocaleString()}</div>
              </div>
              <div>
                <Slider value={[initialInvestment]} min={1000} max={10000} step={100} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setInitialInvestment(value[0])} />
              </div>
            </div> : <div className="flex items-center gap-2">
              <div className="w-24 text-base md:text-lg font-bold">Initial</div>
              <div className="flex-1">
                <Slider value={[initialInvestment]} min={1000} max={10000} step={100} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setInitialInvestment(value[0])} />
              </div>
              <div className="w-20 text-right text-base md:text-lg font-semibold">${initialInvestment.toLocaleString()}</div>
            </div>}

          {/* Monthly Contribution Slider */}
          {isMobile ? <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">Monthly</div>
                <div className="text-base font-semibold">${monthlyContribution}</div>
              </div>
              <div>
                <Slider value={[monthlyContribution]} min={100} max={2000} step={10} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setMonthlyContribution(value[0])} />
              </div>
            </div> : <div className="flex items-center gap-2">
              <div className="w-24 text-base md:text-lg font-bold">Monthly</div>
              <div className="flex-1">
                <Slider value={[monthlyContribution]} min={100} max={2000} step={10} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setMonthlyContribution(value[0])} />
              </div>
              <div className="w-20 text-right text-base md:text-lg font-semibold">${monthlyContribution}</div>
            </div>}

          {/* Starting Age Slider */}
          {isMobile ? <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">Age</div>
                <div className="text-base font-semibold">{startingAge}</div>
              </div>
              <div>
                <Slider value={[startingAge]} min={18} max={50} step={1} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setStartingAge(value[0])} />
              </div>
            </div> : <div className="flex items-center gap-2">
              <div className="w-24 text-base md:text-lg font-bold">Age</div>
              <div className="flex-1">
                <Slider value={[startingAge]} min={18} max={50} step={1} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setStartingAge(value[0])} />
              </div>
              <div className="w-20 text-right text-base md:text-lg font-semibold">{startingAge}</div>
            </div>}

          {/* Wealth Levels Display */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="mb-2 text-lg md:text-xl font-bold">Results:</div>
            <WealthLevels hnwiAge={hnwiAge} vhnwiAge={vhnwiAge} uhnwiAge={uhnwiAge} />
          </div>
        </div>
      </CardContent>
    </Card>;
};

export default FinancialCalculator;
