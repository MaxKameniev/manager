import React, { Component } from 'react';
import moment from 'moment';
import { logo } from '../../constants/text'; 

import style from './Header.css';

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
        <div className={style.header}>
            <div className={style.logo}>{logo}</div>
            <div className={style.header_timer}>{this.state.time}</div>
        </div>
    )
}
}