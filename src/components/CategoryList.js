import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {
  NavLink
} from "react-router-dom";

import Paginator from './../containers/CategoryPaginator';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function CategoryList({fetchCategories, items, fetchCategoryError}) {
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (fetchCategoryError) {
      alert(fetchCategoryError);
    }
  }, [fetchCategoryError]);

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({id, title, description}) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell align='right'>
                  <Button variant="contained" color="secondary">Remove</Button>
                  <Button variant="contained">Edit</Button>
                  <NavLink className='nav-link' to={`/category/${id}`}><Button variant="contained" color="primary">Show ></Button></NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paginator/>
    </div>
  );
}

CategoryList.propTypes = {
  page: PropTypes.number,
  items: PropTypes.array,
  fetchCategories: PropTypes.func,
  fetchCategoryError: PropTypes.string,
  count: PropTypes.number,
};

export default CategoryList;
