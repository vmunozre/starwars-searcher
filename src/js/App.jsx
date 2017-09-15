import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import '../css/App.css';
import Searcher from './Searcher.jsx';
import Historic from './Historic.jsx';
import Carousel from './Carousel.jsx';
import Film from './Film.jsx';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            film_selected_url: '',
            film_selected: {},
            check_film: false
        }
        this.handlerOnClickItem = this.handlerOnClickItem.bind(this);
        this.handlerOnClickReturnHome = this.handlerOnClickReturnHome.bind(this);
    }
    render() {
        if(!this.state.check_film){
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    {this.renderHome()}
                </div>
            );
        } else {
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    {this.renderFilm()}
                </div>
            );
        }
    }

    renderFilm(){
        return (
            <div>
                <Film
                    btnReturnClickHanlder={this.handlerOnClickReturnHome}
                    episode_id={this.state.film_selected.episode_id}
                    title={this.state.film_selected.title}
                    opening_crawl={this.state.film_selected.opening_crawl}
                    director={this.state.film_selected.director}
                    producer={this.state.film_selected.producer}
                    release_date={this.state.film_selected.release_date}
                    characters={this.state.film_selected.characters}
                    planets={this.state.film_selected.planets}
                    starships={this.state.film_selected.starships}
                    vehicles={this.state.film_selected.vehicles}
                    species={this.state.film_selected.species}
                />                
            </div>
        );
    }

    renderHome(){
        return (
            <div>
                <Searcher itemClickHandler={this.handlerOnClickItem}/>
                <Historic />
                <Carousel />
            </div>
        );
    }
    
    handlerOnClickItem(_ev){        
        var data_url = _ev.target.getAttribute("data-url");
        fetch(data_url)
            .then((_response) => {
                return _response.json()
            })
            .then((_film) => {
                if(_film != undefined){
                    this.setState({ film_selected: _film });
                    this.setState({ film_selected_url: data_url });
                    this.setState({ check_film: true});                    
                }                
            })
    }
    handlerOnClickReturnHome(_ev){        
        this.setState({ film_selected: {} }, function(){
            this.setState({ film_selected_url: ''});  
            this.setState({ check_film: false});
        });                  
    }
}   

export default App;
