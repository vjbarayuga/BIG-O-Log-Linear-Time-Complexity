const products = [50, 20, 60, 15, 30];

const sortByPrice = (arr) => {
    return arr.sort((a,b) => a-b);
}

console.log(sortByPrice(products));

module.exports = { sortByPrice };