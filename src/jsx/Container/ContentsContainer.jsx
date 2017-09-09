import React, {Component} from 'react'
import Article from '../compornent/Article'

export default class OverlayContainer extends Component {

    get defaultState() {
        return {
            items: {}
        }
    }

    constructor(props) {
        super();
        this.state = this.defaultState;
    }

    componentDidMount() {
        console.log("componentDidMount to OverlayContainer");
    }

    render() {
        console.log("render to OverlayContainer");
        if(!this.props.item) return null;
        return (            
            <div id="content_container" onClick={() => this.props.itemClick(-1)}>
                <Article id="1" title={this.props.item.title} timestamp={this.props.item.timestamp} body={this.props.item.body}/>
            </div>
        );
    }
}
