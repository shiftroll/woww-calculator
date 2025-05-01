
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import WealthLevels from './WealthLevels';
import { calculateFutureWealth } from '@/lib/financialUtils';

const FinancialCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(2500);
  const [monthlyContribution, setMonthlyContribution] = useState(450);
  const [startingAge, setStartingAge] = useState(23);
  const [hnwiAge, setHnwiAge] = useState(0);
  const [vhnwiAge, setVhnwiAge] = useState(0);
  const [uhnwiAge, setUhnwiAge] = useState(0);

  // Calculate wealth levels when inputs change
  useEffect(() => {
    const result = calculateFutureWealth(initialInvestment, monthlyContribution, startingAge);
    setHnwiAge(result.hnwiAge);
    setVhnwiAge(result.vhnwiAge);
    setUhnwiAge(result.uhnwiAge);
  }, [initialInvestment, monthlyContribution, startingAge]);

  return (
    <Card className="w-full max-w-3xl mx-auto border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl">
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-100 px-4 mt-2">
          See what your financial future would look like,
          <br /> assuming the fund's future performance is the same
          <br /> as it has been for the past 11 years.*
        </CardTitle>
        <p className="text-xs md:text-sm text-gray-300 px-6 pb-4">
          *The calculator is based on the Snobol fund's average annual return of 32.08%.
          Past performance never guarantees future performance, but it is better than nothing.
        </p>
      </CardHeader>

      <CardContent className="px-6 pb-8">
        <div className="space-y-8 mt-2">
          {/* Initial Investment Slider */}
          <div className="flex items-center gap-4">
            <div className="w-32 text-xl md:text-2xl font-bold">Initial $</div>
            <div className="flex-1">
              <Slider
                value={[initialInvestment]}
                min={1000}
                max={10000}
                step={100}
                className="my-2"
                onValueChange={(value) => setInitialInvestment(value[0])}
              />
            </div>
            <div className="w-24 text-right text-xl md:text-2xl font-semibold">${initialInvestment.toLocaleString()}</div>
          </div>

          {/* Monthly Contribution Slider */}
          <div className="flex items-center gap-4">
            <div className="w-32 text-xl md:text-2xl font-bold">Monthly $</div>
            <div className="flex-1">
              <Slider
                value={[monthlyContribution]}
                min={100}
                max={2000}
                step={10}
                className="my-2"
                onValueChange={(value) => setMonthlyContribution(value[0])}
              />
            </div>
            <div className="w-24 text-right text-xl md:text-2xl font-semibold">${monthlyContribution}</div>
          </div>

          {/* Starting Age Slider */}
          <div className="flex items-center gap-4">
            <div className="w-32 text-xl md:text-2xl font-bold">Starting age</div>
            <div className="flex-1">
              <Slider
                value={[startingAge]}
                min={18}
                max={50}
                step={1}
                className="my-2"
                onValueChange={(value) => setStartingAge(value[0])}
              />
            </div>
            <div className="w-24 text-right text-xl md:text-2xl font-semibold">{startingAge}</div>
          </div>

          {/* Wealth Levels Display */}
          <div className="mt-6 pt-4 border-t border-slate-700">
            <div className="mb-2 text-xl md:text-2xl font-bold">Your wealth levels:</div>
            <WealthLevels hnwiAge={hnwiAge} vhnwiAge={vhnwiAge} uhnwiAge={uhnwiAge} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialCalculator;
