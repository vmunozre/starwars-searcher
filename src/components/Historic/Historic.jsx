import React, { Component } from 'react';
import './Historic.css';
import ItemsList from '../ItemsList/ItemsList';
class Historic extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            container_class: 'Historic-container'
        }
        this.onClickHistoric = this.onClickHistoric.bind(this);
    }
    render() {        
        return (
            <div className="Historic" onClick={this.onClickHistoric}>                
                <h3 className="Historic-title">History</h3>               
                <div className={this.state.container_class}>                    
                    <ItemsList 
                        items={this.props.historic_items}
                        itemClickHandler={this.props.itemClickHandler}
                    />
                </div>
            </div>    
        );
    }

    onClickHistoric(_ev){
        /* Toggle Hide */
        if(this.state.container_class === ''){
            this.setState({container_class: 'Historic-container'});
        } else {
            this.setState({container_class: ''});
        }
    }

}

export default Historic;