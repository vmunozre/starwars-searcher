import React, { Component } from 'react';
import './ItemsList.css';
import Item from '../Item/Item';

class ItemsList extends Component {
    render() {
        return (
            <div className="ItemsList">
                {                    
                    this.itemsConstruct()                                        
                }
            </div>
        );
    }

    itemsConstruct() {
        if(this.props.items !== undefined){            
            return (this.props.items.map((_item) => {
                return (<Item 
                            name={_item.title} 
                            url={_item.url}
                            onClickHandler = {this.props.itemClickHandler}
                        />
                );
            }));
        }        
    }
}

export default ItemsList;