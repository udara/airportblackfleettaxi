import React from 'react';

class DisplayFares extends React.Component{
    render(){
        return(
                <div className='row bg-secondary border-light p-2 ml-0 mr-0 mt-5'>
                    {
                        this.props.prices.map(vehicle => (
                        <div className="col-md-3 bg-light text-center p-2">
                            <p className="text text-uppercase font-weight-bold">{vehicle.name}</p>
                            <img className='w-75' src={'/img/fleet/' + vehicle.image} />
                            <p className="font-weight-light">{vehicle.description}</p>
                            <button type="button" className="btn btn-warning rounded-0 btn-sm">{vehicle.price} CAD</button>
                        </div>
                        ))
                    }
                </div>
        );
    }
}

export default DisplayFares;