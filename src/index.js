// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return []
    return matrix.map((item, index) => {
        if (index % 2 != 0) {
            return item.reverse()
        } else return item
    }).flat();
}
