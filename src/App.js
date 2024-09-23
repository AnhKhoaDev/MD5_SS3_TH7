import React, {Component} from 'react';
import './App.css';
import Hello from "./components/Hello";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLogIn = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogOut = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const {isLoggedIn} = this.state;
        if (isLoggedIn) {
            return (
                <Hello onLogOut={this.handleLogOut}/>
            )
        }
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <h1>Please Log in</h1>
                    <button onClick={this.handleLogIn}>Log in</button>
                </div>
            </div>
        )
    }
}

export default App;
