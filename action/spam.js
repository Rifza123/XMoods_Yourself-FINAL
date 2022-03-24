const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000)
}
module.exports = { xSpam: { isFiltered, addFilter }};