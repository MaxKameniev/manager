import React, { Component } from 'react';
import axios from 'axios';
import Trackcard from '../Trackcard/Trackcard';
import './Tracking.css';
import moment from 'moment';

export default class Tracking extends Component {

    state = {
        track: [],
        keys: ["personal data"],
        endpoint: "personal data"
    }

    getRequestDate = () => {
        let timeFrom = moment().subtract(1, 'months').format('DD.MM.YYYY');
        let timeTo = moment().format('DD.MM.YYYY');
        return { timeFrom, timeTo };
    }

    componentDidMount() {
        const { timeFrom, timeTo } = this.getRequestDate();
        this.state.keys.map(key => axios({
            method: 'post',
            url: this.state.endpoint,
            data: {
                "apiKey": key,
                "modelName": "InternetDocument",
                "calledMethod": "getDocumentList",
                "methodProperties": {
                    "DateTimeFrom": timeFrom,
                    "DateTimeTo": timeTo,
                    "Page": "1",
                    "GetFullList": "0"
                }
            }
        })
        .then(result => this.setState({ track: [result.data.data, ...this.state.track].reduce((a, b) => a.concat(b)) }))
        )
    }


    render() {
        return (
            <div className="track-blc">
                {this.state.track.sort((a, b) => b.StateId - a.StateId).map(data => <Trackcard data={data} key={data.IntDocNumber} />)}
            </div>
        )
    }
}