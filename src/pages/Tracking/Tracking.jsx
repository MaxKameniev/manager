import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import { creds } from '../../config/api-creds';
import { api } from '../../constants/text';
import Trackcard from '../../components/Trackcard';
import TrackingStat from '../../components/TrackingStat';

import style from './Tracking.css';

export class Tracking extends Component {

    state = {
        track: []
    }

    getRequestDate() {
        const timeFrom = moment().subtract(api.monthRange, 'months').format(api.dateFormat);
        const timeTo = moment().format(api.dateFormat);
        return { timeFrom, timeTo };
    }

    post(endpoint, key, timeFrom, timeTo) {
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

    totalSum(data, sum, key, code) {
        return data.reduce((acc, item) => item[key] !== code ? acc + Number(item[sum]) : null, 0);
    }

    render() {
        return (
            <div>
                <TrackingStat                        
                    data={this.state.track}
                    totalSum={this.totalSum}
                />
                <div className={style.track_blc}>
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