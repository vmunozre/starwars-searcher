import React, { Component } from 'react';
import '../css/Historic.css';
import ItemsList from './ItemsList.jsx';
class Historic extends Component {
    render() {
        return (
            <div className="Historic">                
                <h3 className="Historic-title">Historic</h3>               
                <div className="Historic-container">                    
                   <ItemsList/>
                </div>
            </div>    
        );
    }
}

export default Historic;