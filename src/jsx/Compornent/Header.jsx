import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

export default class Header extends Component {

    defaultState(id) {
        return {
            id: id,
            title: "たいとる",
            timestamp: "2017/01/01",
            body: "ほんぶんほんぶんほんぶんほんぶんほんぶん"
        }
    }

    constructor(props) {
        super();
        this.state = this.defaultState(props.id);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to Article");
    }

    handleClick(e) {
        console.log("handleClick to Article");
    }

    render() {
        console.log("render to Article");
        return (
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <IconButton className="menuButton" color="contrast" aria-label="Menu" style={{marginLeft: 12, marginRight: 20}}><MenuIcon /></IconButton>
                    <Typography type="title" color="inherit" className="flex">Title</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}