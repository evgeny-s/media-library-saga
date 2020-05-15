import React from 'react';
import PropTypes from 'prop-types';

function Paginator({limit, page, count, fetchItems}) {
  const pages = Math.ceil(count / limit);

  const pagesArray = new Array(pages);
  pagesArray.fill(0);

  return (
    <div>
      <button>Back</button>
      {
        pagesArray.map((pageItem, index) => {
          const currentPage = index + 1;

          return (
            <button key={currentPage} onClick={fetchItems.bind(this, currentPage)}>{currentPage}</button>
          );
        })
      }
      <button>Next</button>
    </div>
  );
}

Paginator.propTypes = {
  limit: PropTypes.number,
  page: PropTypes.number,
  count: PropTypes.number,
  fetchItems: PropTypes.func,
};

export default Paginator;
