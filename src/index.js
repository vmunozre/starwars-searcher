import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App/App';
import registerServiceWorker from './js/registerServiceWorker.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
