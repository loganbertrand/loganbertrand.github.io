import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import GarageSail from '../../assets/garagesail.png';
import PickUp from '../../assets/pickupgames.png';
import Winnable from '../../assets/winnable.png';
import MemoryGame from '../../assets/react-memory.png';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 80,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        [theme.breakpoints.only('xs')]: {
            maxHeight: 200,
            maxWidth: 350
        },
        [theme.breakpoints.only('sm')]: {
            maxHeight: 400,
            maxWidth: 550
        },
        [theme.breakpoints.up('md')]: {
            maxHeight: 540,
            maxWidth: 550
        },
        boxShadow: '5px 4px 4px black',
        marginBottom: 15

    },
    title: {
        marginTop: 30,
        marginBottom: 70,
        textAlign: 'center',
    },
    container: {
        justifyContent: 'center',
        marginTop: '50px',
        [theme.breakpoints.up('sm')]: {
            paddingBottom:'8rem'
        },
        [theme.breakpoints.only('xs')]: {
            paddingBottom:'3rem'
        }
    },
    buttons: {
        textAlign: 'center'
    },
    item:{
        [theme.breakpoints.up('sm')]: {
            paddingBottom:'3rem'
        }
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={3} className={classes.container}>
                
                <Grid item sm={12} md={5} >
                <div className={classes.item}>
                    <Fade left>
                        <img src={Winnable} alt='Winnable Webpage' className={classes.image}></img>
                    </Fade>
                    </div>
                </Grid>

                <Grid item sm={12} md={5} className={classes.item}>
                    <Fade right>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Winnable</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography display='inline-block'>
                                    Winnable is an Overwatch Web Application centered around finding a team that fits your playstyle. With a player finder, team finder, and stats page, Winnable aims to the one and only website you use for all of your Overwatch needs.
                        <br></br>
                                    <br></br>
                                    <b>Technologies used:</b> HTML | CSS | JavaScript | React | Redux | React Router | Express | Passport | Mongoose | MongoDB | React Bootstrap | Node | Axios | Heroku | Overwatch API
                    <br></br>
                                    <br></br>
                                    <div className={classes.buttons}>
                                        <Button href='https://winnable.herokuapp.com/' target='_blank'>Live</Button>
                                        <Button href='https://github.com/randomslap/Winnable' target='_blank'>GitHub</Button>
                                    </div>

                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Fade>
                </Grid>
                

                <Grid item sm={12} md={5} className={classes.item}>
                <div className={classes.item}>
                    <Fade left>
                        <img src={GarageSail} alt='Garage Sale Webpage' className={classes.image}></img>
                    </Fade>
                    </div>
                </Grid>

                <Grid item sm={12} md={5} className={classes.item}>
                    <Fade right>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>GarageSail</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    GarageSail is a Web Application where users can search for and post garage sales happening in their area. By clicking on the specific garage sale you are intrerested in, there will be a dedicated page showing you the type of items you can expect to find at that sale.
                        <br></br>
                                    <br></br>
                                    <b>Technologies used:</b> HTML | CSS | JavaScript | JQuery | Bootstrap | Handlebars | Express | MySQL | Node | Sequelize | Heroku
                    <br></br>
                                    <br></br>
                                    <div className={classes.buttons}>
                                        <Button href='https://garage-sail.herokuapp.com/' target='_blank'>Live</Button>
                                        <Button href='https://github.com/loganbertrand/Garage-Sail-App' target='_blank'>GitHub</Button>
                                    </div>
                                </Typography>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Fade>
                </Grid>

                <Grid item sm={12} md={5} className={classes.item}>
                <div className={classes.item}>
                    <Fade left>
                        <img src={PickUp} alt='Pick Up Games Webpage' className={classes.image}></img>
                    </Fade>
                    </div>
                </Grid>

                <Grid item sm={12} md={5} className={classes.item}>
                    <Fade right>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Pick Up Games</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Pick Up Games is a Web application focused on getting locals together who enjoy recreational games. Using Google Maps, users can enter their zip code and create or find local pick up games in their area. When creating a game on the app, PickUpGames will show you a list of the closest parks and rec centers in your area.
                        <br></br>
                                    <br></br>
                                    <b>Technologies used:</b> HTML | CSS | JavaScript | JQuery | Bootstrap | Firebase | Google Maps API | Weather API
                    <br></br>
                                    <br></br>
                                    <div className={classes.buttons}>
                                        <Button href='http://loganbertrand.com/pick-up-games/' target='_blank'>Live</Button>
                                        <Button href='https://github.com/loganbertrand/pick-up-games' target='_blank'>GitHub</Button>
                                    </div>

                                </Typography>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Fade>
                </Grid>

                <Grid item sm={12} md={5} className={classes.item}>
                <div className={classes.item}>
                    <Fade left>
                        <img src={MemoryGame} alt='Memory Game Webpage' className={classes.image}></img>
                    </Fade>
                    </div>
                </Grid>

                <Grid item sm={12} md={5} className={classes.item}>
                    <Fade right>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>React Memory Game</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    The React Memory Game is a game that involves clicking on every image that is displayed only once, without clicking any a second time. Every time one image is clicked, the entire grid shuffles, so make sure to remember each image you have already selected!
                        <br></br>
                                    <br></br>
                                    <b>Technologies used:</b> HTML | CSS | JavaScript | React | React Bootstrap
                    <br></br>
                                    <br></br>
                                    <div className={classes.buttons}>
                                        <Button href='https://loganbertrand.com/react-memory-game/' target='_blank'>Live</Button>
                                        <Button href='https://github.com/loganbertrand/react-memory-game' target='_blank'>GitHub</Button>
                                    </div>

                                </Typography>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    );
}
