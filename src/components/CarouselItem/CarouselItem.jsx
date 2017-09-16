import React, { Component } from 'react';
import './CarouselItem.css';
class CarouselItem extends Component {
    render() {
        return (
            <div className="CarouselItem" data-index={this.props.index}>
                <h4 className="CarouselItem-title">{this.props.name}</h4>
                <span className="CarouselItem-info"><b>Genre: </b>{this.props.gender}</span>
                <span className="CarouselItem-info"><b>Height: </b>{this.props.height}</span>
                <span className="CarouselItem-info"><b>Mass: </b>{this.props.mass}</span>
                <span className="CarouselItem-info"><b>Birth Year: </b>{this.props.birth_year}</span>
            </div>     
        );
    }
}

export default CarouselItem;