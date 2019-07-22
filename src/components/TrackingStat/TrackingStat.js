import React, { Component } from 'react';

export class TrackingStat extends Component {

    getMoney = () => {
        this.props.data.reduce((acc, item) => 
        acc + item.StateName
            ? item.BackwardDeliveryMoney
            : null, 0)}


    render() {
        console.log(this.props.data);
        console.log(this.getMoney());
        return (
            <div>

            </div>
        );
    }
}
