import React, { Component } from 'react';

export default class Trackcard extends Component {

    state = {
        showDetails: false,
    }

    showTrackingDetails = () => {
        this.setState(prev => ({
            showDetails: !prev.showDetails
        }))
    }
    render() {
        const {StateName, IntDocNumber, SenderDescription, DateLastUpdatedStatus, StateId} = this.props.data;                     
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
                            {SenderDescription === "Алексєєнко Володимир Васильови" 
                            ? 'AV' 
                            : SenderDescription === "Каменева Олена Іванівна ФОП" 
                                ? 'KO' 
                                : SenderDescription === "БАЗИС МАРКЕТ" 
                                    ? 'BM' 
                                    : SenderDescription }</div>
                        <div>{StateName}</div>
                        <div>{DateLastUpdatedStatus}</div>
                        <i onClick={this.showTrackingDetails} className="more_icon fas fa-info-circle"></i>     
                    </div>
                    {this.state.showDetails 
                        ? <div className="track-details">
                            <i onClick={this.showTrackingDetails} className="close_icon far fa-times-circle"></i>
                            <div>{this.props.data.RecipientContactPerson}</div>
                            <div>{this.props.data.RecipientContactPhone}</div>
                            <div>{this.props.data.CityRecipientDescription}</div>
                            <div>{this.props.data.RecipientAddressDescription}</div>
                        </div> 
                        : null}
                </div>
                : null}
        </div>
    )
}
}