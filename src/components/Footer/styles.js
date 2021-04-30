import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {color: theme.palette.common.white, 
      backgroundColor: theme.palette.common.black, 
      width: '100%',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      // marginTop: 'calc(5% + 60px)'
    }
  }));