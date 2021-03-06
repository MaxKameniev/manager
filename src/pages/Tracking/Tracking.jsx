import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import { creds } from '../../config/api-creds';
import { api } from '../../constants/text';
import Trackcard from '../../components/Trackcard';
import './Tracking.css';
import { TrackingStat } from '../../components/TrackingStat/TrackingStat';

export class Tracking extends Component {

    state = {
        track: []
    }

    getRequestDate = () => {
        const timeFrom = moment().subtract(api.mounthRange, 'months').format('DD.MM.YYYY');
        const timeTo = moment().format('DD.MM.YYYY');
        return { timeFrom, timeTo };
    }

    post = (endpoint, key, timeFrom, timeTo) => {
        return {
            method: 'post',
            url: endpoint,
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
        }
    }

    componentDidMount() {
        const { timeFrom, timeTo } = this.getRequestDate();
        creds.map(key => 
            axios(this.post(api.endpoint, key, timeFrom, timeTo))
            .then(result => this.setState({ track: [result.data.data, ...this.state.track]
                .reduce((a, b) => a.concat(b)) }))
        )
    }

    render() {
        return (
            <div>
                <TrackingStat data={this.state.track}/>
                <div className="track-blc">
                    {this.state.track.sort((a, b) => b.StateId - a.StateId)
                        .map(data => 
                            <Trackcard
                                data={data}
                                key={data.IntDocNumber}
                            />
                    )}
                </div>
            </div>
        )
    }
}