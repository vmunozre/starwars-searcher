import React, { Component } from 'react';
import '../css/Carousel.css';
import CarouselItem from './CarouselItem.jsx';
class Carousel extends Component {
    render() {
        return (
            <div className="Carousel">
                <h2 className="Carousel-title">Characters</h2>                
                <div className="Carousel-container">
                    <span>left</span>
                    <CarouselItem/>
                    <CarouselItem/>
                    <span>right</span>
                </div>
            </div>    
        );
    }
}

export default Carousel;