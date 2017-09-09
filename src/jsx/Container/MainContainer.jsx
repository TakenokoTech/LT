import React, {Component} from 'react'
import Model from '../Model/Model'
import Header from '../compornent/Header'
import Spiner from '../compornent/Spiner'
import CardsContainer from './CardsContainer'
import OverlayContainer from './ContentsContainer'

export default class ContentsContainer extends Component {

    get defaultState() {
        return {
            isLoading: true,
            items: {},
            selectItem: -1
        }
    }

    constructor(props) {
        super();
        this.model = new Model()
        this.state = this.defaultState;
        this.itemClick = this.itemClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to MainContainer");
        this.model.getItem().then((items) => {
            this.setState({
                items: items,
                isLoading: false
            });
        })
    }

    itemClick(id) {
        console.log("itemClick to MainContainer", id);
        this.setState({ selectItem: id });
    }

    render() {
        console.log("render to MainContainer");
        return (
            <div>
                <Header />       
                <div id="contents">
                    <CardsContainer items={this.state.items} itemClick={this.itemClick}/>
                    <OverlayContainer item={this.state.items[this.state.selectItem]} itemClick={this.itemClick}/>
                </div>
                <Spiner opacity={this.state.isLoading ? 1 : 0 }/>
            </div>
        );
    }
}
