import React, {Component} from 'react'

export default class Article extends Component {

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
            <div id={'article_'+this.props.id} className='article'>
                <h2>{this.props.title}</h2>
                <div>{this.props.timestamp}</div>
                <div>{this.props.body}</div>
            </div>
        );
    }
}
