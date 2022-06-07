import React, { useEffect, useState } from 'react';
import './dataTableReact.css';

import updateResult from './updateResult';
import * as utils from './utils';

/**
 *
 * @param {object} props - props
 * @param {array} props.employees - array of employees
 * @param {object} props.employees[] - object of employee
 * @component
 */
export function DataTableReact({ employees }) {
  const [data, setData] = useState({
    selectValue: 10,
    searchValue: '',
    filteredData: [],
    indexOfPages: 1,
    order: 'asc',
    column:
      employees && employees.length !== 0 ? Object.keys(employees[0])[1] : '',
    employeesToRender: [],
  });

  /**
   * If the direction is 'asc' then return the up arrow, otherwise return the down arrow
   * @param {string} direction  Direction to sort
   * @returns an icon based on the direction of the sort.
   */
  function showIconFaSort(direction) {
    if (direction === 'asc') {
      return <i className="fas fa-sort-up" aria-hidden="true" />;
    }
    return <i className="fas fa-sort-down" aria-hidden="true" />;
  }

  useEffect(() => {
    setData({
      ...data,
      filteredData: updateResult(
        employees,
        data.selectValue,
        data.searchValue,
        data.indexOfPages,
        data.order,
        data.column,
      )[1],
      employeesToRender: updateResult(
        employees,
        data.selectValue,
        data.searchValue,
        data.indexOfPages,
        data.order,
        data.column,
      )[0],
    });
  }, [
    employees,
    data.selectValue,
    data.searchValue,
    data.indexOfPages,
    data.order,
    data.column,
  ]);

  return employees && employees.length !== 0 ? (
    <div id="employee-div" className="appContainer">
      <div id="employee-table_wrapper" className="dataTablesWrapper no-footer">
        <div className="dataTables_length" id="employee-table_length">
          <label htmlFor="selectButton">
            Show{' '}
            <select
              name="employee-table_length"
              aria-controls="employee-table"
              id="selectButton"
              value={data.selectValue}
              onChange={(e) => utils.handleSelect(e, data, setData)}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>{' '}
            entries
          </label>
        </div>
        <div id="employee-table_filter" className="dataTables_filter">
          <label htmlFor="searchInput">
            Search:{' '}
            <input
              type="search"
              id="searchInput"
              value={data.searchValue}
              onChange={(e) => utils.handleSearch(e, data, setData)}
            />
          </label>
        </div>
      </div>
      <table
        id="employee-table"
        className="display dataTable no-footer"
        role="grid"
        aria-describedby="employee-table_info"
      >
        <thead>
          <tr role="row">
            {Object.keys(employees[0]).map(
              (key) =>
                key !== 'id' && (
                  <th
                    key={key}
                    className={key}
                    tabIndex={0}
                    aria-controls="employee-table"
                    rowSpan={1}
                    colSpan={1}
                    onClick={(e) => utils.switchOrder(e, data, setData)}
                    aria-sort={
                      data.column === key ? utils.ariaManager(data.order) : null
                    }
                    aria-label={`${key}: activate to sort column ${
                      data.order === 'asc' ? 'descending' : 'ascending'
                    }`}
                  >
                    {key}
                    {data.column === key ? showIconFaSort(data.order) : null}
                  </th>
                ),
            )}
          </tr>
        </thead>
        <tbody>
          {data.employeesToRender.map((employee, index) => (
            <tr
              role="row"
              key={employee.id}
              className={utils.trClassManager(index)}
            >
              {Object.keys(employees[0]).map(
                (key) =>
                  key !== 'id' && (
                    <td
                      key={key}
                      className={utils.tdClassManager(index, data.column, key)}
                      aria-controls="employee-table"
                      rowSpan={1}
                      colSpan={1}
                      aria-sort={
                        data.column === key
                          ? utils.ariaManager(data.order)
                          : null
                      }
                      aria-label={
                        data.column === key
                          ? `${key}: ${utils.ariaManager(data.order)}`
                          : key
                      }
                    >
                      {employee[key]}
                    </td>
                  ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="dataTablesWrapper">
        <div
          className="dataTables_info"
          id="employee-table_info"
          role="status"
          aria-live="polite"
        >
          Showing{' '}
          {data.employeesToRender.indexOf(data.employeesToRender[0]) +
            1 +
            data.selectValue * (data.indexOfPages - 1)}{' '}
          to{' '}
          {data.filteredData.length < data.selectValue
            ? data.employeesToRender.length
            : data.employeesToRender.length +
              data.selectValue * (data.indexOfPages - 1)}{' '}
          of {data.filteredData.length} entries
        </div>
        <div className="dataTables_paginate" id="employee-table_paginate">
          {data.indexOfPages > 1 && (
            <button
              type="button"
              className="paginate_button previous"
              aria-controls="employee-table"
              tabIndex={-1}
              id="employee-table_previous"
              onClick={() => utils.previousPage(data, setData)}
            >
              Previous
            </button>
          )}

          <div className="paginate_button current">{data.indexOfPages}</div>
          {data.indexOfPages < data.filteredData.length / data.selectValue && (
            <button
              type="button"
              className="paginate_button next"
              aria-controls="employee-table"
              tabIndex={-1}
              id="employee-table_next"
              onClick={() => utils.nextPage(data, setData)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div id="employee-div" className="appContainer">
      <h2>No data available in table</h2>
    </div>
  );
}
