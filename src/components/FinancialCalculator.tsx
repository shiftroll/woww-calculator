
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { calculateDebtConsolidation } from '@/lib/financialUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const FinancialCalculator = () => {
  const [bnplDebt, setBnplDebt] = useState(2500);
  const [creditCardDebt, setCreditCardDebt] = useState(450);
  const [carLoanDebt, setCarLoanDebt] = useState(2500);
  const [personalLoanDebt, setPersonalLoanDebt] = useState(450);
  const [homeLoanYear, setHomeLoanYear] = useState(23);
  const [currentMonthlyPayment, setCurrentMonthlyPayment] = useState(0);
  const [consolidatedPayment, setConsolidatedPayment] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const isMobile = useIsMobile();

  // Calculate consolidation results when inputs change
  useEffect(() => {
    const result = calculateDebtConsolidation(
      bnplDebt,
      creditCardDebt,
      carLoanDebt,
      personalLoanDebt,
      homeLoanYear
    );
    setCurrentMonthlyPayment(result.currentMonthlyPayment);
    setConsolidatedPayment(result.consolidatedPayment);
    setMonthlySavings(result.monthlySavings);
    setTotalSavings(result.totalSavings);
  }, [bnplDebt, creditCardDebt, carLoanDebt, personalLoanDebt, homeLoanYear]);
  
  return (
    <Card className="w-full mx-auto bg-[#31322C] text-white">
      <CardHeader className="pb-2 text-center">
        <CardTitle className="font-bold text-white mt-2 md:text-3xl px-[1px] text-3xl">
          Convert your multiple debts into one monthly payment
        </CardTitle>
        <p className="text-xl md:text-2xl text-white font-bold mt-8 mb-4">
          Compare here:
        </p>
      </CardHeader>

      <CardContent className="px-6 pb-10 pt-0">
        <div className="space-y-8 mt-2">
          {/* BNPL Slider */}
          <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">BNPL</div>
                <div className="text-base font-semibold">${bnplDebt.toLocaleString()}</div>
              </div>
              <div>
                <Slider value={[bnplDebt]} min={0} max={10000} step={100} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setBnplDebt(value[0])} />
              </div>
            </div>

          {/* Credit Cards Slider */}
          {/* BNPL Slider */}
          <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">Credit Card</div>
                <div className="text-base font-semibold">${creditCardDebt.toLocaleString()}</div>
              </div>
              <div>
                <Slider value={[creditCardDebt]} min={0} max={2000} step={50} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setCreditCardDebt(value[0])} />
              </div>
            </div>

          {/* Car Loan Slider */}
          <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">Car Loan</div>
                <div className="text-base font-semibold">${carLoanDebt.toLocaleString()}</div>
              </div>
              <div>
                <Slider value={[carLoanDebt]} min={0} max={10000} step={100} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setCarLoanDebt(value[0])} />
              </div>
            </div>

          {/* Personal Loans Slider */}
          <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">Personal Loan</div>
                <div className="text-base font-semibold">${personalLoanDebt.toLocaleString()}</div>
              </div>
              <div>
                <Slider value={[personalLoanDebt]} min={0} max={2000} step={50} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setPersonalLoanDebt(value[0])} />
              </div>
            </div>

          {/* Home Loan Slider */}
          <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-base font-bold">Home Loan</div>
                <div className="text-base font-semibold">{homeLoanYear.toLocaleString()}</div>
              </div>
              <div>
                <Slider value={[homeLoanYear]} min={0} max={30} step={1} className="my-2" colorClass="bg-[#F43F5F]" onValueChange={value => setHomeLoanYear(value[0])} />
              </div>
            </div>

          {/* Results Display */}
          <div className="mt-12 pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-xl md:text-xl font-bold">Current monthly payment:</div>
              <div className="text-xl md:text-xl font-bold">${currentMonthlyPayment.toLocaleString()}</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-xl md:text-xl font-bold">WOWW One Payment would be:</div>
              <div className="text-xl md:text-xl font-bold">${consolidatedPayment.toLocaleString()}</div>
            </div>

            <div className="mt-10 pt-4">
              <div className="text-2xl md:text-3xl font-bold text-center">YOUR WIN MONTHLY: ${monthlySavings.toLocaleString()}</div>
              <div className="text-2xl md:text-3xl font-bold text-center mt-4">TOTAL: ${totalSavings.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialCalculator;
