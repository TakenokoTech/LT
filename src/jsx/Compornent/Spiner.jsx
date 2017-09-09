import React, {Component} from 'react'

export default class Spiner extends Component {

    constructor(props) {
        super();
    }

    componentDidMount() {
        console.log("componentDidMount to Spiner");
    }

    render() {
        console.log("render to Spiner");
        return (
            <div id="loading" style={{opacity: this.props.opacity}} >
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        );
    }
}
