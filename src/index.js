module.exports = (matrix = []) => [].concat(...matrix.map((item,index) => (index+1) % 2 ===0 ? item.reverse() : item))
