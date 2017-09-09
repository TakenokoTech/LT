import React, {Component} from 'react'
import Card from '../compornent/Card'
import UtilApi from '../Utils/UtilApi'

export default class CardsContainer extends Component {

    get defaultState() {
        return {
            items: {}
        }
    }

    constructor(props) {
        super();
        this.state = this.defaultState;
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to CardsContainer");
    }

    handleClick() {
        console.log("handleClick to CardsContainer");
    }

    render() {
        console.log("render to CardsContainer");
        const cards = [];
        for(let k in this.props.items) {
            cards.push(<Card id={k} key={k} {...this.props.items[k]} onClick={() => this.props.itemClick(k)}/>);
        }
        return (            
            <div id="card_container">
                {cards}
            </div>
        );
    }
}
