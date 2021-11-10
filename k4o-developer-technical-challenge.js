/**
 * TASK:
 * Write a function (JavaScript) such that given a accountBalanceHistory array as an argument, 
 * it will categorise the array based on the way that the balance value is changing month by month.
 * Algorith will return B if the amount decrease was Fixed else it will return A if the amount decrease was Variable between all the elements of array.
 */


const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]

function accountTypeChecker(accountBalanceHistory) {

    //Sort by month if array elements are randomly arranged
    accountBalanceHistory.sort(function (a, b) {
        return a.monthNumber - b.monthNumber;
    });

    /**
     * This array will store the unique differential amount between two months.
     * If the same amount is already present then new amount won't be pushed in the array
     */
    var uniqueDifferenceArr = [];


    /**
     * Array loop to run in half of the length of array to save ittrations, so the ittrations will be n/2
     * we will compare the array elements from top and bottom of array in per ittration.
     */
    for (let i = 0; i < parseInt(accountBalanceHistory.length / 2); i++) {

        let tail = accountBalanceHistory.length - 1 - i; //Array Bottom Index pointer to point from Bottom of array and gradually pointing to the middle of array length by increase in the irration

        let headDifference = accountBalanceHistory[i + 1]['account']['balance']['amount'] - accountBalanceHistory[i]['account']['balance']['amount']; //Getting difference between starting two elements of the array ittration
        let tailDiffference = accountBalanceHistory[tail]['account']['balance']['amount'] - accountBalanceHistory[tail - 1]['account']['balance']['amount']; //Getting difference between ending two elemts of the array ittration

        
        //Check if the differential amount is already present in the "uniqueDifferenceArr" array
        if (uniqueDifferenceArr.indexOf(headDifference) == -1) {
            uniqueDifferenceArr.push(headDifference);
        }
        if (uniqueDifferenceArr.indexOf(tailDiffference) == -1) {
            uniqueDifferenceArr.push(tailDiffference);
        }

        /**
         * If "uniqueDifferenceArr" array length is greater than 1, that means there are more than 1 differential ammount present in the input array.
         * we will break the loop and return the result if the array length is greater than 1 as will know that thier is a variable differnce in amount
         * e.g. 
         *      [100] Fixed Amount Difference
         *      [100.50] Variable Amount difference
         * */

        if (uniqueDifferenceArr.length > 1) {
            break;
        }
    }

    /**
     * If "uniqueDifferenceArr" array length is greater than 1 , then the input array had a "Variable" difference in amount else the differnece in amount is "Fixed"
     * we will return 'A' if the amount differnece is Variable
     * we will return 'B' if the amount difference is Fixed
    */
    return (uniqueDifferenceArr.length > 1) ? 'A' : 'B'
}

console.log("Result ",accountTypeChecker(accountBalanceHistory));
