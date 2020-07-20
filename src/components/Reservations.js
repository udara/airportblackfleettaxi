import React from 'react';
import SelectVehicle from './SelectVehicle';
import GetBookingDetails from './GetBookingDetails';


class Reservations extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
                <div>
               <GetBookingDetails/>
               </div>
        );
    }
}

export default Reservations;