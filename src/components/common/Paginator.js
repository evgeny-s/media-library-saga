import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function Paginator({limit, page, count, fetchItems}) {
  const pages = Math.ceil(count / limit);

  const pagesArray = new Array(pages);
  pagesArray.fill(0);

  return (
    <div>
      <Button variant="outlined" color="primary">
        Back
      </Button>
      {
        pagesArray.map((pageItem, index) => {
          const currentPage = index + 1;

          console.log(currentPage, page);

          return (
            <Button
              variant={currentPage === page ? 'contained' : 'outlined'}
              color="primary"
              key={currentPage}
              onClick={fetchItems.bind(this, currentPage)}
            >
              {currentPage}
            </Button>
          );
        })
      }
      <Button variant="outlined" color="primary">
        Next
      </Button>
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
