import React, { Component } from 'react';
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
        return (
            <div>
                {StateName !== "Одержано"
                    ? <div className="track-item">
                        <div className={StateName === "Прибув у відділення"
                            ? "track green"
                            : StateName === "Відмова від отримання"
                                ? "track yellow"
                                : "track"}>
                            <div>{IntDocNumber}</div>
                            <div>Код статуса - {StateId}</div>
                            <div className="sender-icon">
                                {this.state.persons.map(el => el.name === SenderDescription ? el.id : null)}</div>
                            <div>{StateName}</div>
                            <div>{DateLastUpdatedStatus}</div>
                            <i onClick={this.showTrackingDetails} className="more_icon fas fa-info-circle"></i>
                        </div>
                        <TrackingDetails data={this.props.data} isShow={this.state.showDetails} toShow={this.showTrackingDetails} />
                    </div>
                    : null}
            </div>
        )
    }
}