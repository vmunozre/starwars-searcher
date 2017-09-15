import React, { Component } from 'react';
import '../css/Item.css';
class Item extends Component {
    render() {
        return (
            <div className="Item">
                <span data-url="{this.props.url}">{this.props.name}</span>
            </div>     
        );
    }
}

export default Item;