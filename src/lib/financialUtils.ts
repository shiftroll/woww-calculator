
/**
 * Financial calculation utilities
 */

// Annual rate of return (32.08%)
const ANNUAL_RETURN_RATE = 0.3208;

// Calculate monthly rate from annual rate
const MONTHLY_RETURN_RATE = Math.pow(1 + ANNUAL_RETURN_RATE, 1/12) - 1;

/**
 * Calculate how long it will take to reach a specific net worth
 */
const calculateTimeToReachNetWorth = (
  initialInvestment: number,
  monthlyContribution: number,
  targetNetWorth: number
): number => {
  // If inputs are invalid, return 0
  if (initialInvestment <= 0 || monthlyContribution <= 0) return 0;
  
  let currentValue = initialInvestment;
  let months = 0;
  const maxMonths = 1200; // Cap at 100 years to prevent infinite loops
  
  while (currentValue < targetNetWorth && months < maxMonths) {
    // Add monthly contribution
    currentValue += monthlyContribution;
    
    // Apply monthly growth
    currentValue *= (1 + MONTHLY_RETURN_RATE);
    
    months++;
  }
  
  // If we hit the max, consider it unattainable
  if (months >= maxMonths) return 0;
  
  // Return years (rounded to nearest)
  return Math.round(months / 12);
};

/**
 * Calculate future wealth levels based on input parameters
 */
export const calculateFutureWealth = (
  initialInvestment: number,
  monthlyContribution: number,
  startingAge: number
) => {
  // Net worth thresholds
  const HNWI_THRESHOLD = 1000000;      // $1 million
  const VHNWI_THRESHOLD = 5000000;     // $5 million
  const UHNWI_THRESHOLD = 30000000;    // $30 million
  
  // Calculate years required for each threshold
  const yearsToHNWI = calculateTimeToReachNetWorth(
    initialInvestment,
    monthlyContribution,
    HNWI_THRESHOLD
  );
  
  const yearsToVHNWI = calculateTimeToReachNetWorth(
    initialInvestment,
    monthlyContribution,
    VHNWI_THRESHOLD
  );
  
  const yearsToUHNWI = calculateTimeToReachNetWorth(
    initialInvestment,
    monthlyContribution,
    UHNWI_THRESHOLD
  );
  
  // Calculate ages when reaching each threshold
  return {
    hnwiAge: yearsToHNWI ? startingAge + yearsToHNWI : 0,
    vhnwiAge: yearsToVHNWI ? startingAge + yearsToVHNWI : 0,
    uhnwiAge: yearsToUHNWI ? startingAge + yearsToUHNWI : 0
  };
};
