import React, {Component} from 'react';

class Hello extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <h1>Welcome</h1>
                    <button onClick={this.props.onLogOut}>Log out</button>
                </div>
            </div>
        )
    }
}

export default Hello;