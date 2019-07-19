import React, { Component } from 'react';
import './Header.css';
import moment from 'moment'; 

export class Header extends Component {

    state = {
        time: this.time,
    }

    componentDidMount() {
       setInterval(this.getDate.bind(this), 1000);
    }

    getDate() {
        this.setState({time: moment().format('MMM Do ddd, hh:mm:ss')});
        }
    
render () {
    return (
        <div className="header">
            <div className="logo">BM CRM</div><div className="header__timer">{this.state.time}</div>
        </div>
    )
}
}