import React, { Component, CreateContext, createContext } from 'react';
import { set } from 'mongoose';

export const BookingContext = createContext();

export class BookingProvider extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            selected_vehicle : '',
            address : '',
            transfer_type: '',
            vehicle_description : '',
            vehicle_image : '',
            price : ''
        }
        this.getBookingData = this.getBookingData.bind(this);
    }

    getBookingData(data)
    {
        this.setState({...data});
    }

    render(){
        return(
        <BookingContext.Provider value={{ ...this.state , QuickCalcInfo : this.getBookingData }}>
            {this.props.children}
        </BookingContext.Provider>
        );
    }
}