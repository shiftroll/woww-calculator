import React from 'react';
import FinancialCalculator from '@/components/FinancialCalculator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#31322C] p-3 overflow-hidden">
      <div className="w-full max-w-4xl h-full">
        <FinancialCalculator />
      </div>
    </div>
  );
};

export default Index;