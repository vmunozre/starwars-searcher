import React, { Component } from 'react';
import './Searcher.css';
import ItemsList from '../ItemsList/ItemsList';

class Searcher extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            items_backup: undefined,
            films_searched: [],
            input_value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        /* Get Films before load components */
        fetch('https://swapi.co/api/films/')
            .then((_response) => {
                return _response.json()
            })
            .then((_films) => {
                if(_films !== undefined){
                    this.setState({ items_backup: _films.results});
                }                
            });
    }
    render() {
        if(this.state.items_backup !== undefined){    
            return (
                <div className="Searcher">
                    <h2 className="Searcher-title">Search Film</h2>

                    <input type="text" placeholder="Search Film" className="Searcher-input" value={this.state.input_value} onChange={this.handleChange}/>
                    
                    <ItemsList 
                        items={this.state.films_searched}
                        itemClickHandler={this.props.itemClickHandler}
                    />                
                </div>     
            );
        } else {
            return (
                <div className="Searcher">
                    <div className="Searcher-spinner-container">
                        <span className="spinner"></span>
                    </div>
                    
                </div>
            );
        }
    }

    handleChange(_e){
        this.setState({input_value: _e.target.value});
        if(_e.target.value.trim() !== ''){
            this.setState({films_searched: this.state.items_backup});
            /* Suggestion Filter */
            this.setState({films_searched: this.state.items_backup.filter(function(_film) {             
                return _film.title.includes(_e.target.value) 
            })});
        } else {
            this.setState({films_searched: []});
        }
    }
}

export default Searcher;