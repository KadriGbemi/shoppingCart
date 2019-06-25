import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {ThemeProvider} from '@material-ui/styles';

import useStyles from '../../MaterialDesignStyle';
import theme from '../../MaterialDesignTheme';

import './Card.scss';

function AppCard(props) {
    const classes = useStyles();
    return (
        <div className="App-card">
            <Card>
                <CardMedia
                    className={classes.media}
                    image={props.handleImageError(props.itemAvailableForSale.image, props.itemAvailableForSale.errorImage)}
                    title={props.itemAvailableForSale.title}/>

                <CardContent>
                    <div className="App-card-add-icon">
                        <ThemeProvider theme={theme}>
                            <Fab
                                color="primary"
                                aria-label="Add"
                                onClick={() => props.addShoppingCartItem(props.itemAvailableForSale)}>
                                <AddIcon/>
                            </Fab>
                        </ThemeProvider>
                    </div>
                    <h4 className="App-primary-text">
                        {props.itemAvailableForSale.title}
                    </h4>
                    <p className="App-secondary-text">
                        {props.itemAvailableForSale.description}
                    </p>
                    <p className="App-primary-text">
                        {props.itemAvailableForSale.price}
                        €
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

export default(AppCard)