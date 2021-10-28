import { blue, red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  feild: {
    fontWeight: 'bold',
  },
  card: {
    boxShadow: '0 2px 3px 3px solid rgba(0,0,0,0.9)',
  },
  redBg: {
    background: red[300],
    color: 'white',
  },
  blueBg: {
    background: blue[400],
    color: 'white',
  },
});
