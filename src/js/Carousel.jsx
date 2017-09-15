import React, { Component } from 'react';
import left_arrow from '../assets/images/left-arrow.svg';
import right_arrow from '../assets/images/right-arrow.svg';
import '../css/Carousel.css';
import CarouselItem from './CarouselItem.jsx';
class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            index_item: 0,
            items_backup: [],
            arrow_locked: false
        }
        this.onClickArrow = this.onClickArrow.bind(this);
    }

    componentWillMount() {
        /* Get Films before load components */
        fetch('https://swapi.co/api/people/')
            .then((_response) => {
                return _response.json()
            })
            .then((_people) => {
                if(_people != undefined){
                    this.setState({ items_backup: _people.results});
                }                
            });
    }

    render() {
        return (
            <div className="Carousel">
                <h2 className="Carousel-title">Characters</h2>                
                <div className="Carousel-center-container">
                    {this.renderItems()}
                </div>
            </div>    
        );
    }

    renderItems(){
        if(this.state.items_backup != undefined && this.state.items_backup.length > 0){             
            var left_index = this.state.index_item - 1,
                right_index = this.state.index_item + 1;            
            if(left_index < 0){
                left_index = (this.state.items_backup.length - 1);
            }
            if(right_index > (this.state.items_backup.length - 1)){
                right_index = 0;
            }
            return (
                <div className="Carousel-container">
                    <div class="Carousel-arrow-container">
                        <img id="left-arrow" className="Carousel-arrow" src={left_arrow} title="Left arrow" data-next={left_index} onClick={this.onClickArrow}/>
                    </div>
                   
                    <CarouselItem 
                        name={this.state.items_backup[this.state.index_item].name} 
                        height={this.state.items_backup[this.state.index_item].height} 
                        mass={this.state.items_backup[this.state.index_item].mass} 
                        gender={this.state.items_backup[this.state.index_item].gender}
                        birth_year={this.state.items_backup[this.state.index_item].birth_year}
                    />
                    <div class="Carousel-arrow-container">
                        <img id="right-arrow" className="Carousel-arrow" src={right_arrow} title="Right arrow" data-next={right_index} onClick={this.onClickArrow}/>
                    </div>
                </div>
            );
            
        } else {
            return (
                <div className="Carousel-container">
                    <span className="Carousel-loading spinner"></span>
                </div>
            );
        }
        
    }

    onClickArrow(_ev){
        /* Navigation action */
        if(!this.state.arrow_locked){
            this.setState({arrow_locked: true});
            var data_next = parseInt(_ev.target.getAttribute('data-next')),
                left_arrow = document.getElementById('left-arrow'),
                right_arrow = document.getElementById('right-arrow'),
                left_index = data_next - 1,
                right_index = data_next + 1;
                    
            if(left_index < 0){
                left_index = this.state.items_backup.length - 1;
            }
            if(right_index > (this.state.items_backup.length - 1)){
                right_index = 0;
            }
            left_arrow.setAttribute('data-next',left_index);
            right_arrow.setAttribute('data-next',right_index);

            this.setState({index_item: data_next}, function(){
                this.setState({arrow_locked: false});
            });
        }
        
    }

}

export default Carousel;