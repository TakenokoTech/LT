import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button'
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import red from 'material-ui/colors/red';

class CardComponent extends Component {

    defaultState() {
        return {
            expanded: false
        }
    }

    constructor(props) {
        super();
        this.state = this.defaultState();
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to Card");
    }

    handleExpandClick(e) {
        console.log("handleClick to Card");
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        console.log("render to Card");
        const classes = this.props.classes;
        return (
            <div id={"card_"+this.props.id} onClick={this.props.onClick}>
                <Card className={classes.card}>
                <CardHeader
                    avatar={<Avatar aria-label="Recipe" className={classes.avatar}>R</Avatar>}
                    title={this.props.title}
                    subheader={this.props.timestamp}
                />
                <CardMedia
                    className={classes.media}
                    image={this.props.image}
                    title="image"
                />
                <CardContent>
                <Typography component="p">
                    {this.props.typography}
                </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
                    <IconButton aria-label="Share"><ShareIcon /></IconButton>
                    <div className={classes.flexGrow} />
                    <IconButton
                        aria-label="Show more"
                        className={classnames(classes.expand, {[classes.expandOpen]: this.state.expanded})}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph type="body2">
                    Method:
                    </Typography>
                    <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                    </Typography>
                    <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                    chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                    salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                    minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                    cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                    Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                    the rice, and cook again without stirring, until mussels have opened and rice is
                    just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
                </Collapse>
                </Card>
            </div>
        );
    }
}

function styles(theme) {
    return {
        card: {
            maxWidth: 400,
        },
        media: {
            height: 194,
        },
        expand: {
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
        flexGrow: {
            flex: '1 1 auto',
        }
    }
}

export default withStyles(styles)(CardComponent);