import React, { Component } from 'react';
import joke1 from '../../assets/images/joke1.svg';
import jokesound from '../../assets/images/jokesound.ogg';

class KonamiCode extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            konami_code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
            key_save:[],
            start_joke: false
        }
        this.onKeyDownDocumentHandler = this.onKeyDownDocumentHandler.bind(this);
    }
    
    componentWillMount(){  
        document.addEventListener("keydown", this.onKeyDownDocumentHandler, false);
    }
    render() {
        if(!this.state.start_joke){
            return (
                <div hidden></div> 
            );
        } else {
            return (
                <div>
                    <img src={joke1} className="Joke-img" alt="Joke image"/>
                    <audio autoPlay loop hidden>
                        <source src={jokesound} type="audio/ogg"/>
                    </audio>
                </div>
            );
        }
        
    }

    onKeyDownDocumentHandler(_ev){
        var keyCode = _ev.keyCode, 
            array_save = this.state.key_save;
        array_save.push(keyCode);
        if (array_save.length > 10) {
            array_save.shift();
        }
        this.setState({key_save: array_save}, function(){
            if (this.array_equal_array(this.state.konami_code, this.state.key_save)) {
                this.setState({start_joke: true})                
            }
        });
        
        
    }

    array_equal_array(_array1, _array2) {
    if (_array1.length !== _array2.length) {
        return false;
    } else {
        for (var i = 0, iLen = _array1.length; i < iLen; i++) {
            if (_array1[i] !== _array2[i]) {
                return false;
            }
        }
    }
    return true;
}
}

export default KonamiCode;