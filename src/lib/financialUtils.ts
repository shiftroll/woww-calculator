
/**
 * Debt consolidation calculation utilities
 */

/**
 * Calculate debt consolidation savings and totals
 */
export const calculateDebtConsolidation = (
  bnplDebt: number,
  creditCardDebt: number,
  carLoanDebt: number,
  personalLoanDebt: number,
  homeLoanYear: number
) => {
  // Calculate current total monthly payment (simplified for demo)
  const bnplMonthly = bnplDebt * 0.05; // 5% minimum payment
  const creditCardMonthly = creditCardDebt * 0.03; // 3% minimum payment
  const carLoanMonthly = carLoanDebt * 0.02; // 2% monthly payment
  const personalLoanMonthly = personalLoanDebt * 0.03; // 3% monthly payment
  const homeLoanMonthly = homeLoanYear > 0 ? 1500 : 0; // Fixed amount for home loan if years > 0
  
  // Calculate total current monthly payment
  const currentMonthlyPayment = Math.round(bnplMonthly + creditCardMonthly + carLoanMonthly + personalLoanMonthly + homeLoanMonthly);
  
  // Calculate consolidated monthly payment (estimated as lower by about 20%)
  const consolidatedPayment = Math.round(currentMonthlyPayment * 0.8);
  
  // Monthly savings
  const monthlySavings = currentMonthlyPayment - consolidatedPayment;
  
  // Calculate total savings over 18.5 months (typical loan term)
  const totalSavings = Math.round(monthlySavings * 18.5);
  
  return {
    currentMonthlyPayment,
    consolidatedPayment,
    monthlySavings,
    totalSavings
  };
};
