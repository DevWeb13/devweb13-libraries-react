/**
 * It takes in an array, a value, and a column, and returns a new array that is filtered based on the
 * value and column
 * @param {array} array - the array of data to be filtered
 * @param {string} value - the value of the search input
 * @param {string} column - the column name of the data you want to search
 * @return {array} a new array of employees that match the search criteria.
 */
function search(array, value, column) {
  let newfilteredData = [];
  if (value.length === 0) {
    newfilteredData = array;
  } else {
    newfilteredData = array.filter((employee) => {
      return employee[column]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    });
  }
  return newfilteredData;
}

/**
 * It takes in an array of objects, a string, and another string, and returns the array of objects
 * sorted by the string in ascending or descending order
 * @param {array}  data - the data that you want to sort
 * @param {string} type - the column name that you want to sort by
 * @param {string} meaning - asc or desc
 * @return {array} - the sorted array
 */
function columnChooseAndSort(data, type, meaning) {
  let sortedData = [];

  if (meaning === 'asc') {
    sortedData = data.sort((a, b) => {
      if (typeof a[type] === 'string') {
        return a[type].localeCompare(b[type]);
      }
      console.log(a[type], b[type]);
      return a[type] - b[type];
    });
  } else {
    sortedData = data.sort((a, b) => {
      if (typeof a[type] === 'string') {
        return b[type].localeCompare(a[type]);
      }
      return b[type] - a[type];
    });
  }
  return sortedData;
}

/**
 * It takes in an array, a page number, and a value, and returns an array of the data that should be
 * displayed on that page
 * @param {array} data - The array of data you want to paginate
 * @param {number} page - The current page number
 * @param {number} value - The number of items you want to display per page.
 * @returns An array of objects
 */
function paginateData(data, page, value) {
  const array = [];
  const startIndex = (page - 1) * value;
  const endIndex = startIndex + value;
  for (let i = startIndex; i < endIndex; i++) {
    if (data[i]) {
      array.push(data[i]);
    }
  }
  return array;
}

/**
 * Updates the list of employees to display on the screen
 *
 * @param   {array}   employees     Employées list
 * @param   {number}  selectValue   number of employees to be displayed on the screen
 * @param   {string}  searchValue   Value of search field
 * @param   {number}  indexOfPages  Page number
 * @param   {string}  order         List order
 * @param   {string}  column        Column to sort
 *
 * @return  {array}  Employees list filtered and at display on the screen
 */
function updateResult(
  employees,
  selectValue,
  searchValue,
  indexOfPages,
  order,
  column,
) {
  let employeesToRender = [];
  let filteredData = [];
  if (!employees || employees.length === 0) {
    return [employeesToRender, filteredData];
  }

  filteredData = search(employees, searchValue, column);

  filteredData = columnChooseAndSort(filteredData, column, order);

  employeesToRender = paginateData(filteredData, indexOfPages, selectValue);

  return [employeesToRender, filteredData];
}

export default updateResult;
