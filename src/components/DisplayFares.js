import React from 'react';
import { Link } from "react-router-dom";
import { BookingContext } from "../contexts/BookingContext";

class DisplayFares extends React.Component{

    static contextType = BookingContext;

    constructor(props)
    {
        super(props);
        this.SetContext = this.SetContext.bind(this);
    }

    SetContext(vehicle, transfer_type)
    {
        const data = {
            selected_vehicle : vehicle.name,
            vehicle_description : vehicle.description,
            vehicle_image : vehicle.image,
            address : vehicle.address,
            transfer_type : transfer_type,
            price: vehicle.price
        }

        this.context.QuickCalcInfo(data);
    }

    render(){
        return(
                <div className='row bg-secondary border-light p-2 ml-0 mr-0 mt-5'>
                    {
                        this.props.prices.map(vehicle => (
                        <div className="col-md-3 bg-light text-center p-2">
                            <p className="text text-uppercase font-weight-bold">{vehicle.name}</p>
                            <img className='w-75' src={'/img/fleet/' + vehicle.image} />
                            <p className="font-weight-light">{vehicle.description}</p>
                            <Link to='/reservations' className="btn btn-warning rounded-0 btn-sm" onClick={() => this.SetContext(vehicle,this.props.transfer_type)}>{vehicle.price} CAD</Link>
                        </div>
                        ))
                    }
                </div>
        );
    }
}

export default DisplayFares;