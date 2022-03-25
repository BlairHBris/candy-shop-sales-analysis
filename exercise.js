function getTotalItemSales(sales, itemId){
    let itemSales =  sales.filter(sale => sale.itemId === itemId)
    let itemQuantities = itemSales.map(sale => sale.quantity)
    return itemQuantities.reduce((sum,number)=> sum + number,0)
}


module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    //addTotalSalesToItems,
    //addTotalValueToItems
}
