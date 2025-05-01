
import React from 'react';
import FinancialCalculator from '@/components/FinancialCalculator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-4xl">
        <FinancialCalculator />
      </div>
    </div>
  );
};

export default Index;
