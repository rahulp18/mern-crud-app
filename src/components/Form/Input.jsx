import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

const Input = ({ label, name, onChange, type, value, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={12}>
      <TextField
        label={label}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        fullWidth
        required
        variant="outlined"
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
