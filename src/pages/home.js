import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Form from '../components/Form/Form';
import SmallCard from '../components/Card/SmallCard';
import styles from './styles.module.css';
import { useStyles } from './style';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/crud';

const AltText = () => {
  return (
    <Typography variant="h4" color="textSecondary" className={styles.title}>
      Add user to see
    </Typography>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [currentId, dispatch]);

  const data = useSelector((state) => state);
  console.log(data);
  return (
    <Container style={{ height: 'auto', padding: '15px 9px' }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        className={classes.title}
      >
        Welcome to MERN CRUD
      </Typography>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} sm={4}>
          <Form setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div className={styles.container}>
            <Grid container spacing={2}>
              {data.length > 0 ? (
                data.map((item) => (
                  <Grid item xs={12} sm={6} key={item._id}>
                    <SmallCard data={item} setCurrentId={setCurrentId} />
                  </Grid>
                ))
              ) : (
                <AltText />
              )}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
