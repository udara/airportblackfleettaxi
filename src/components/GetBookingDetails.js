import React from 'react';
import './GetBookingDetails.css';

class GetBookingDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedVehicle : './img/fleet/lux_suv.png',
            date : '',
            time : '',
            pickup_address : '',
            drop_address : '',
            name : '',
            email : '',
            mobile : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({ [event.target.name] : event.target.value})
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.setState({

        })
    }

    render(){
        return(
               <div className='container pt-3 pb-3'>
                   <div className='row p-3'>
                        <div className='col-md-6 p-0'>
                            <form>
                                <div className="row">
                                    <div className='col-6'>
                                        <div className="form-group text-left">
                                            <label htmlFor="date">Pickup Date</label>
                                            <input onChange={this.handleChange} value={this.state.date} type="text" className="form-control rounded-0" id="date" aria-describedby="Pickup Date" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className="form-group text-left">
                                            <label htmlFor="time">Pickup Time</label>
                                            <input onChange={this.handleChange} value={this.state.time} type="text" className="form-control rounded-0" id="time" aria-describedby="Pickup Time" placeholder=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="pickup_address">Pickup Place / Address</label>
                                                <input onChange={this.handleChange}  value={this.state.pickup_address} type="text" className="form-control rounded-0" id="pickup_address" name="pickup_address" aria-describedby="Pickup Place / Address" placeholder=""/>
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="drop_address">Drop Place / Address</label>
                                                <input onChange={this.handleChange} value={this.state.drop_address} type="text" className="form-control rounded-0" id="drop_address" name="drop_address" aria-describedby="Drop Place / Address" placeholder=""/>
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="name">Name</label>
                                                <input onChange={this.handleChange} value={this.state.drop_name} type="text" className="form-control rounded-0" id="name" name="name" aria-describedby="Your Name" placeholder=""/>
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="email">Email</label>
                                                <input onChange={this.handleChange} value={this.state.drop_email}  type="email" className="form-control rounded-0 required" id="email" name="email" aria-describedby="Email Address" placeholder=""/>
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="mobile">Mobile</label>
                                                <input onChange={this.handleChange} value={this.state.drop_mobile} type="text" className="form-control rounded-0" id="mobile" name="mobile" aria-describedby="Mobile Phone" placeholder=""/>
                                            </div>
                                    </div>
                                </div>
                                <div className='col-12 text-right pr-0 mt-3'>
                                <button onClick className="btn btn-dark rounded-0 mb-3" type="button">Book Your Journey</button>
                                </div>
                               
                            </form>
                        </div>
                       
                         <div className='col-md-6'>
                                <h2 className='text-center display-4 pb-3'>SELECTED VEHICLE</h2>
                                <img className='selected-vehicle' src='./img/fleet/lux_suv.png'/>
                                <p className='font-weight-light text-center pt-4'>Passengers : 6 | Large Bags : 6 | Small Bags : 6</p>
                        </div>
                    </div>
               </div>
        );
    }
}

export default GetBookingDetails;