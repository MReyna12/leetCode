//P: array of integers each equal to or greater than zero
//R: number; return max profit that can be achieved, if no profit possible return 0
//E: [7, 6, 4, 3, 1] // 0
//P: Check if the length of the array is less than 2, if so return 0; create a maxprofit and temporary profit variable set to 0; we are going to use two pointers to solve, so set leftPointer to 0 and then rightPoint to 1;
// use a while loop (so long as rightPointer is less than the length of the array since rightPointer will get to the end of the array first) and conditional (check if leftpointer price is less than right pointer price and then use formula to update profit)
// and also determine if the current maxProfit is greater than the newly determined profit; if first conditional not applicable then leftpointer is equal to right pointer PRIOR to rightpointer being increased by one; return maxProfit

// Function declaration
function maxProfit(prices) {
  // First check to see the prices array is long enough to even create a profit
  if (prices.length < 2) {
    return 0;
  }

  // Set maxProfit and a temporary profit to zero; also set the leftPointer to zero and the rightPointer to 1;
  let maxProfit = 0;
  let profit = 0;
  let leftPointer = 0;
  let rightPointer = 1;
  while (rightPointer < prices.length) {
    console.log(
      `This is leftPointer: ${leftPointer} and this is rightPointer: ${rightPointer}`
    );
    if (prices[leftPointer] < prices[rightPointer]) {
      profit = prices[rightPointer] - prices[leftPointer];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      leftPointer = rightPointer;
    }
    rightPointer++;
  }
  return maxProfit;
}
