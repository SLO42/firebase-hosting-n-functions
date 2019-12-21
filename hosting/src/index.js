import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


const root = document.getElementById('root');
ReactDOM.render(<App/>, root);


// const Context = () => (
    // 	<ProfileContext.Provider value={new Profile()} >
    // 		<App />
    // 	</ProfileContext.Provider>
    // );
// const root = document.getElementById('root');
// ReactDOM.render(<App/>, root);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
