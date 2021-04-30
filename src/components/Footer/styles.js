import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {color: '#fff', 
      backgroundColor: '#000', 
      width: '100%',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      marginTop: '15vh',
      textDecoration: 'none'
      
      // marginTop: 'calc(5% + 60px)'
    },
    list: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center'
    },
    listItem: {
      padding: '5px 20px',
      fontSize: '18px',
    },
    icon: {
      textDecoration: 'none',
      color: '#fff'
    }
  }));