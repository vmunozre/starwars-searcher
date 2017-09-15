import React, { Component } from 'react';
import '../css/Item.css';
class Item extends Component {
    render() {
        return (
            <div className="Item">
                <span onClick={this.props.onClickHandler} data-url={this.props.url}>{this.props.name}</span>
            </div>     
        );
    }
}

export default Item;