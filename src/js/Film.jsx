import React, { Component } from 'react';
import btn_return from '../assets/images/return.svg';
import '../css/Film.css';
class Film extends Component {
    render() {
        return (
            <div className="Film">
                <img onClick={this.props.btnReturnClickHanlder} className="Film-btn-return" src={btn_return} title="Return Home"/>
                <h1>Episodie {this.props.episode_id} - {this.props.title}</h1>                
                <div>
                    <div className="Film-intro">
                        <div className="Film-titles">
                            <div className="Film-title-content">
                                <p>{this.props.opening_crawl}</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="Film-info-title">Info</h2>
                    <div className="Film-info">                                 
                        <span className="Film-info-item">Director: {this.props.director}</span>
                        <span className="Film-info-item">Productor: {this.props.producer}</span>
                        <span className="Film-info-item">Fecha de Realización: {this.props.release_date}</span>
                    </div>                                       
                </div>
            </div>    
        );
    }
}
export default Film;