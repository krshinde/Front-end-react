// Reusable components

import * as React from 'react';
import { TextField } from '@mui/material';

const input = ({className,placeholder,size,value,onChange}) => {
    return (
        <TextField
        //   error
        //   id="filled-error"
        //   label="Error"
        //   defaultValue=". . ."
          variant="filled"
          className={className}
          placeholder={placeholder}
          size={size}
          value={value}
          onChange={onChange}
        />
      );
}

export default input;

