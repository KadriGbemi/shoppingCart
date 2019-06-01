import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './card.scss';


const useStyles = makeStyles({
    card: {
      maxWidth: 288,
      minWidth: 288,
    },
    media: {
      height: 144,
      paddingTop: '56%'
    },
  });

  const theme = createMuiTheme({
    palette: {
      primary: { main: '#28657c'},
    },
  });
function AppCard(props) {
    const classes =  useStyles();
    return(
            <div className="App-card">
            <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className= {classes.media}
                image = {require( '../../assets/images/' + props.eachShoppingCartData.image)}
                title= {props.eachShoppingCartData.title}
            />
            <CardContent>
                <cardAction className="App-card-add-icon">
                <ThemeProvider theme = {theme}>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
                </ThemeProvider>
                </cardAction>
                <Typography gutterBottom variant="h5" component="h2">
                {props.eachShoppingCartData.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.eachShoppingCartData.description}
                </Typography>
                <Typography  gutterBottom variant="h4"  component="h2">
                {props.eachShoppingCartData.price}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
             </div>
        );
    }

// AppCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default (AppCard)