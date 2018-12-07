import React, { Component } from 'react';
import './Trackcard.css';
import TrackingDetails from '../TrackingDetails/TrackingDetails';

export default class Trackcard extends Component {

    state = {
		persons: ['personal data'],
        showDetails: false,
    }

    showTrackingDetails = () => {
        this.setState(prev => ({
            showDetails: !prev.showDetails
        }))
    }
    render() {
        const { StateName, IntDocNumber, SenderDescription, DateLastUpdatedStatus, StateId } = this.props.data;
        const { persons, showDetails} = this.state;
        const parcelRecived = "Одержано";
        const parcelArrived = "Прибув у відділення";
        const refusalToReceive = "Відмова від отримання";
        return (
            <div>
                {StateName !== parcelRecived
                    ? <div className="track-item">
                        <div className="track">
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
                        </div>
                        <TrackingDetails data={this.props.data} isShow={showDetails} toShow={this.showTrackingDetails} />
                    </div>
                    : null}
            </div>
        )
    }
}