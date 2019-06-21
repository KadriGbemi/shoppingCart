import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
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
                    image={props.handleImageError(props.eachShoppingCartData.image, props.eachShoppingCartData.errorImage)}
                    title={props.eachShoppingCartData.title}/>

                <CardContent>
                    <div className="App-card-add-icon">
                        <ThemeProvider theme={theme}>
                            <Fab
                                color="primary"
                                aria-label="Add"
                                onClick={() => props.addItems(props.eachShoppingCartData, props.index)}>
                                <AddIcon/>
                            </Fab>
                        </ThemeProvider>
                    </div>
                    <Typography gutterBottom variant="h5">
                        {props.eachShoppingCartData.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.eachShoppingCartData.description}
                    </Typography>
                    <Typography gutterBottom variant="h4">
                        {props.eachShoppingCartData.price}
                        €
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default(AppCard)