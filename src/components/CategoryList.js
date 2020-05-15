import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function CategoryList({fetchCategories, items, fetchCategoryError}) {
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (fetchCategoryError) {
      alert(fetchCategoryError);
    }
  }, [fetchCategoryError]);

  return (
    <div>
      {
        items.map(({id, title, description}) => (
          <div key={id}>
            <span>{id}</span>
            <span>{title}</span>
            <span>{description}</span>
          </div>
        ))
      }
    </div>
  );
}

CategoryList.propTypes = {
  items: PropTypes.array,
  fetchCategories: PropTypes.func,
  fetchCategoryError: PropTypes.string,
};

export default CategoryList;
