import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      maxWidth: 288,
      minWidth: 288,
    },
    media: {
      height: 144,
      paddingTop: '32%'
    },
    buttons:{
      height: 40,
    },
     input:{
      maxWidth: 48,
      minWidth: 48,
      margin: 10
    }
  });

export default useStyles