import React from 'react';
import PropTypes from 'prop-types';

const Pagination = props => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* go to the previous page */}
        {props.currentPage > 0 ? (
          <li className="page-item">
            <a className="page-link" onClick={() => props.handlePageClick(-1)}>
              Previous
            </a>
          </li>
        ) : null}
        {/* go to the next page */}
        {props.currentPage < props.numPages ? (
          <li className="page-item">
            <a className="page-link" onClick={() => props.handlePageClick(1)}>
              Next
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired
};
export default Pagination;
