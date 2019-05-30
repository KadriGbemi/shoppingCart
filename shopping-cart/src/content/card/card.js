import React from 'react';
// import './styles/mobile-navbar.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.scss';

const useStyles = makeStyles({
    card: {
      maxWidth: 288,
    },
    media: {
      height: 144,
    },
  });

function AppCard(){
    const classes = useStyles();
    return(
    <card className="App-card">
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
        </Card>
    </card>
    );

}

export default AppCard