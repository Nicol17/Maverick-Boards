import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xs')] : {
      
    }
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  cartCard: {
    height: '60vh',
    [theme.breakpoints.up('xs')] : {
      height: '60vh',
    },
    [theme.breakpoints.up('sm')] : {
      height: '45vh',
    }
  },
  cartItemTitle: {
    [theme.breakpoints.up('xs')] : {
      fontSize: '20px'
    }
  }
}));