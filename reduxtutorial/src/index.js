// import React from "react";
// import ReactDOM from 'react-dom';
// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, window.document.getElementById('root'));

import { createStore } from "redux";

const reducer = (state,action) => {
    switch (action.type) {
        case "ADD": 
            break;
        case "SUBTRACT":
            break;
    }
    return state;
};

const store = createStore(reducer, 1);

store.dispatch({
    type: "ADD",
    payload: 2,
});