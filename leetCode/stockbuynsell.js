//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


var maxProfit = function(prices) {
    let profit=0;
    let min = prices[0];
    
    for(let e of prices){
        if(e<min) min=e;
        let temp =e-min;
        if(temp>profit) profit=temp;
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]));