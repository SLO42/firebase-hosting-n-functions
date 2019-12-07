import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HeaderBar from './components/overview/overview.js'


const main = document.getElementById('main');
ReactDOM.render(<HeaderBar/>, main);


// const Context = () => (
    // 	<ProfileContext.Provider value={new Profile()} >
    // 		<App />
    // 	</ProfileContext.Provider>
    // );
const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
