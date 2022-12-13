
exports.ProfitLossAverageAndTotal = (positions) => {

    let profitPositions = positions.map(x =>{
        if(x.entryPrice < x.closePrice){
            return x
        }
    })
    let lossPositions = positions.map(x =>{
        if(x.entryPrice > x.closePrice){
            return x
        }
    })
    let totalProfit = profitPositions.reduce((x,y) => x+y)
    let totalLoss = lossPositions.reduce((x,y) => x+y)

    let profitAverage = totalProfit / profitPositions.length
    let lossAverage = totalLoss / lossPositions.length
    return {profitAverage,lossAverage,totalProfit,totalLoss}

};


exports.LiquidityPrice = (laverage , entryPrice , type ) => {
    let liquidityPrice = 0;
    if(type == "Long"){
        let priceRange = entryPrice / laverage;
        liquidityPrice = entryPrice - priceRange
        return liquidityPrice;
    }else{
        let priceRange = entryPrice / laverage;
        liquidityPrice = entryPrice + priceRange
        return liquidityPrice;
    }
};

exports.sizeUSD = (margin , laverage) => {
    return sizeUSD = marign * laverage
};

