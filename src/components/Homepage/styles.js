import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: '../../assets/johny-goerend-XWWKKdG4Arg-unsplash.jpg',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },

    video: {
        position: "absolute",
        width: "100%", 
        height: "100%",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: -1
    },

    button: {
      minWidth: '100px',
      maxWidth: '300px',
      color: '#fff',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      fontSize: '36px',
      borderRadius: '15px',
      textTransform: 'none',
      marginLeft: '15%',
      [theme.breakpoints.down('sm')] : {
        marginLeft: '0',
        marginTop: '7%',
        textAlign: 'center',
        minWidth: '50px',
        fontSize: '24px',
      }
    },

    hero: {
      position: "absolute",
      top: '22%',
      left: '33%',
      width: '40vw',
      fontFamily: 'Roboto',
      color: '#fff',
      [theme.breakpoints.down('sm')] : {
        left: '13%',
        width: '80vw',
        textAlign: 'center'
      }
    },

    heroColor: {
      color: '#98FF98'
    }
  }));