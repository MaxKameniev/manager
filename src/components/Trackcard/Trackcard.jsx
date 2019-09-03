import React, { Component } from 'react';

import { status } from '../../constants/text'; 
import TrackingDetails from '../TrackingDetails';
import TrackingData from '../TrackingData';

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
        // console.log(this.props.data);
        return (
            <div>
                {this.props.data.StateName !== status.parcelRecived
                    ? 
                        <div>
                            <TrackingData
                                data={this.props.data}
                                toShow={this.showTrackingDetails}
                            />
                            <TrackingDetails 
                                data={this.props.data}
                                isShow={this.state.showDetails}
                                toShow={this.showTrackingDetails}
                            />
                        </div>
                    : null
                }
            </div>
        )
    }
}