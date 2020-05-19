import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  useParams
} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px'
  },
});

function CategoryItem({fetchCategoryData, fetchCategoryDataError, categoryTracks, categoryData}) {
  let {id} = useParams();

  useEffect(() => {
    fetchCategoryData(id);
  }, []);

  useEffect(() => {
    if (fetchCategoryDataError) {
      alert(fetchCategoryDataError);
    }
  }, [fetchCategoryDataError]);

  const classes = useStyles();

  return (
    <Container>
      <Typography variant='h4'>Category Data</Typography>
      {
        categoryData && (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                {categoryData.title}
              </Typography>
              <Typography color="textSecondary">
                {categoryData.description}
              </Typography>
            </CardContent>
          </Card>
        )
      }
      {
        categoryTracks.length !== 0 && (
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Url</TableCell>
                  <TableCell align="right">Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoryTracks.map(({id, name, url, duration}) => (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{url}</TableCell>
                    <TableCell>{duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
    </Container>
  );
}

CategoryItem.propTypes = {
  fetchCategoryData: PropTypes.func.isRequired,
  categoryData: PropTypes.object,
  categoryTracks: PropTypes.array,
  fetchCategoryDataError: PropTypes.string,
};

export default CategoryItem;
