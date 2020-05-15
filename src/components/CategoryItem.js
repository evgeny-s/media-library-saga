import React from 'react';
import {
  useParams
} from "react-router-dom";

function CategoryItem() {
  let {id} = useParams();

  return (
    <div>{id}</div>
  );
}

export default CategoryItem;
