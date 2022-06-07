function handleSelect(e, data, setData) {
  setData({
    ...data,
    selectValue: parseInt(e.target.value, 10),
    indexOfPages: 1,
  });
}

function handleSearch(e, data, setData) {
  setData({
    ...data,
    searchValue: e.target.value,
    indexOfPages: 1,
  });
}

function previousPage(data, setData) {
  if (data.indexOfPages > 1) {
    setData({
      ...data,
      indexOfPages: data.indexOfPages - 1,
    });
  }
}

function nextPage(data, setData) {
  if (data.indexOfPages < data.filteredData.length / data.selectValue) {
    setData({
      ...data,
      indexOfPages: data.indexOfPages + 1,
    });
  }
}

function switchOrder(e, data, setData) {
  setData({
    ...data,
    column: e.target.className,
    order: data.order === 'asc' ? 'desc' : 'asc',
  });
}

/**
 * It takes a string as an argument and returns a string
 * @param {string} order  direction to sort
 * @return the value of the variable changeOrder.
 */
function ariaManager(order) {
  return order === 'asc' ? 'ascending' : 'descending';
}

function trClassManager(i) {
  let trClass = '';
  if (i % 2 === 0) {
    trClass = 'dark';
    return trClass;
  }
  trClass = 'light';
  return trClass;
}

/**
 * If the column is the key and the row is even, return 'darkBold', otherwise if the column is the key
 * and the row is odd, return 'lightBold'
 * @param {number} i - the index of the row
 * @param {string} column - the column name
 * @param {string} key - the key of the column you want to style
 * @return {string} A string defining the style.
 */
function tdClassManager(i, column, key) {
  let tdClass = '';
  if (column === key && i % 2 === 0) {
    tdClass = 'darkBold';
  }
  if (column === key && i % 2 !== 0) {
    tdClass = 'lightBold';
  }
  return tdClass;
}

export {
  handleSelect,
  handleSearch,
  previousPage,
  nextPage,
  switchOrder,
  ariaManager,
  trClassManager,
  tdClassManager,
};
