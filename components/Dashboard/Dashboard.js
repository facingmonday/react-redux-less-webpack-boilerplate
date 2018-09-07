import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                { this.props.title }
            </div>
        );
    }
}

export default Dashboard;