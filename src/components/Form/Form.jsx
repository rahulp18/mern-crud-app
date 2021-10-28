import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography, Button } from '@mui/material';
import Input from './Input';
import { useStyles } from './style';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePosts } from '../../actions/crud';

const initialState = {
  name: '',
  email: '',
  password: '',
  message: '',
};

const Form = ({ currentId, setCurrentId }) => {
  const [formData, setFormData] = useState(initialState);
  const post = useSelector((state) =>
    currentId ? state.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Clear Function
  const clear = () => {
    setFormData(initialState);
    setCurrentId(0);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...formData }));
    } else {
      dispatch(updatePosts(currentId, { ...formData }));
    }
    clear();
  };

  // handleShowPassword
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (post) setFormData(post);
  }, [post]);

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" gutterBottom textAlign="center">
        {currentId === 0 ? 'Create User' : 'Update User'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Input
            name="name"
            type="text"
            value={formData.name}
            onChange={onChange}
            label="Name"
          />
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            label="Email"
          />
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
            value={formData.password}
            onChange={onChange}
            label="Password"
          />
          <Input
            name="message"
            type="text"
            value={formData.message}
            onChange={onChange}
            label="Message"
          />
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
            >
              {currentId === 0 ? 'Submit' : 'Update'}
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              onClick={clear}
              fullWidth
              className={classes.button2}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
