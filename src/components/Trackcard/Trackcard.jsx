import React, { Component } from 'react';
import { persons } from '../../config/api-creds'
import { status } from '../../constants/text'
import TrackingDetails from '../TrackingDetails';
import './Trackcard.css';


export class Trackcard extends Component {

    state = {
        showDetails: false
    }

    showTrackingDetails = () => {
        this.setState(prev => ({
            showDetails: !prev.showDetails
        }))
    }
    render() {
        const { StateName, IntDocNumber, SenderDescription, DateLastUpdatedStatus } = this.props.data;
        const { showDetails } = this.state;
        const { parcelRecived, parcelArrived, refusalToReceive} = status;
        return (
            <div>
                {StateName !== parcelRecived
                    ? <div className="trackcard__item">
                            <div className="trackcard__number">{IntDocNumber}</div>
                            <i className={StateName === parcelArrived
                                ? "trackcard__status--icon green fas fa-circle"
                                : StateName === refusalToReceive
                                    ? "trackcard__status--icon red fas fa-circle"
                                    : "trackcard__status--icon fas fa-circle"}></i>
                            <div className="trackcard__sender--icon">{persons.map(el => el.name === SenderDescription ? el.id : null)}</div>
                            <div className="trackcard__status--name">{StateName}</div>
                            <div>{DateLastUpdatedStatus}</div>
                            <i onClick={this.showTrackingDetails} className="more_icon fas fa-info-circle"></i>
                        <TrackingDetails 
                            data={this.props.data}
                            isShow={showDetails}
                            toShow={this.showTrackingDetails}
                        />
                    </div>
                    : null}
            </div>
        )
    }
}