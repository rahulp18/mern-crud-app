import React, { useState, useEffect } from 'react';
import { useStyles } from './style';
import {
  Card,
  Avatar,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { Edit, Delete, Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deletePosts } from '../../actions/crud';
import Input from '../Form/Input';
import { blue, red } from '@mui/material/colors';
const SmallCard = ({ data, setCurrentId }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [chooseColor, setChooseColor] = useState(false);
  const RandomNumber = () => {
    const rand = Boolean(Math.round(Math.random()));
    setChooseColor(rand);
  };
  const toglePassword = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    RandomNumber();
  }, []);

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            className={chooseColor ? classes.blueBg : classes.redBg}
            style={{ background: `${chooseColor ? red[300] : blue[400]}` }}
            aria-label={data.name}
          >
            {data.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={toglePassword}>
            {show ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />

      <CardContent>
        <Typography>
          <span className={classes.feild}>Name</span> {data.name}
        </Typography>
        <Typography>
          <span className={classes.feild}>Email</span> {data.email}
        </Typography>
        <div className={classes.password}>
          <span className={classes.feild}>Password</span>{' '}
          <Input
            value={data.password}
            variant="outlined"
            type={show ? 'text' : 'password'}
            showPassword={show}
          />
        </div>
        <Typography>
          <span className={classes.feild}>Message</span> {data.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => setCurrentId(data._id)}>
          <Edit />{' '}
        </Button>
        <Button onClick={() => dispatch(deletePosts(data._id))}>
          {' '}
          <Delete />
        </Button>
      </CardActions>
    </Card>
  );
};

export default SmallCard;
