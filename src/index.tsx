import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/main.scss';
import { SearchBox } from './components/SearchBox/SearchBox';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SearchBox />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
