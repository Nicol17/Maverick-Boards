import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontSize: '42px',
    [theme.breakpoints.down('sm')] : {
      fontSize: '36px',
      marginBottom: '20px',
      marginTop: '10%',
    }
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')] : {
      margin: '15% 0'
    },
    [theme.breakpoints.up('lg')] : {
      marginTop: '7%',
      marginBottom: '2%'
    },
    [theme.breakpoints.between('sm', 'md')] : {
      marginTop: '25%',
      marginBottom: '2%'
    }
  },
  body: {
    minHeight: '100vh'
  },

  cartCard: {
    width: '30vw',
    height: '20vh'
  }
}));