import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import '../css/App.css';
import '../css/Stars.css';
import Searcher from './Searcher.jsx';
import Historic from './Historic.jsx';
import Carousel from './Carousel.jsx';
import Film from './Film.jsx';
import KonamiCode from './KonamiCode.jsx';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            film_selected_url: '',
            film_selected: {},
            check_film: false,
            historic_items: [],
            cookie: ''
        }
        this.handlerOnClickItem = this.handlerOnClickItem.bind(this);
        this.handlerOnClickReturnHome = this.handlerOnClickReturnHome.bind(this);
    }
    componentWillMount(){  
        /* Load Cookie and set params */      
        var cookie = this.getCookie('starwars-historic'),
            historic_items = this.getCookie('starwars-historic');
        if(historic_items == undefined || historic_items == '' || historic_items == 'undefined'){
            historic_items = [];
        } else {
            historic_items = JSON.parse(historic_items);
        }
        this.setState({cookie: cookie});
        this.setState({historic_items: historic_items});
    }
    render() {
        if(!this.state.check_film){
            return (
                <div className="App">
                    <div id='stars'></div>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>                    
                    {this.renderHome()}
                    <KonamiCode/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <div id='stars'></div>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    {this.renderFilm()}
                    <KonamiCode/>
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
                />                
            </div>
        );
    }

    renderHome(){
        return (
            <div>
                <Searcher 
                    itemClickHandler={this.handlerOnClickItem}
                />
                <Historic 
                    historic_items={this.state.historic_items} 
                    itemClickHandler={this.handlerOnClickItem}
                />
                <Carousel />
            </div>
        );
    }
    
    handlerOnClickItem(_ev){        
        var data_url = _ev.target.getAttribute("data-url"),
            name = _ev.target.textContent,
            historic_obj = {
                url: data_url,
                title: name
            },
            array_aux = this.state.historic_items;        
        /* Save action in the cookie */
        array_aux.push(historic_obj);
        this.setState({cookie: array_aux});
        this.setState({historic_items: array_aux});
        this.setCookie('starwars-historic', JSON.stringify(array_aux));
        this.setState({ check_film: true});
        /* Load Film page */
        fetch(data_url)
            .then((_response) => {
                return _response.json()
            })
            .then((_film) => {
                if(_film != undefined){
                    this.setState({ film_selected: _film });
                    this.setState({ film_selected_url: data_url });
                }                
            })
    }
    handlerOnClickReturnHome(_ev){   
        /* Return Home*/     
        this.setState({ film_selected: {} }, function(){
            this.setState({ film_selected_url: ''});  
            this.setState({ check_film: false});
        });                  
    }

    setCookie(_cname, _cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = _cname + "=" + _cvalue + ";" + expires + ";path=/";
    }

    getCookie(_cname) {
        var name = _cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}   

export default App;
