import React from 'react';
import axios from 'axios';
import './GetBookingDetails.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';

class GetBookingDetails extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedVehicle : './img/fleet/lux_suv.png',
            pickup_address : '',
            drop_address : '',
            name : '',
            email : '',
            mobile : '',
            pickup_date : '',
            pickup_time : '',
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
        // Validation pickup date 
        if (this.state.pickup_date.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/) === null) {
            this.setState({error_pickup_date : 'Please enter a valid date'});
        }
        else {
            this.setState({error_pickup_date : ''})
        }
        // Validation pickup time
        if (this.state.pickup_time.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm) === null) {
            this.setState({error_pickup_time : 'Please enter a valid time'});
        }
        else {
            this.setState({error_pickup_time : ''})
        }
        // Validation pickup address
        if (this.state.pickup_address.length < 5) {
            this.setState({error_pickup_address : 'Please enter valid address'});
        }
        else {
            this.setState({error_pickup_address : ''})
        }

        // Validation drop address
        if (this.state.drop_address.length < 5) {
            this.setState({error_drop_address : 'Please enter valid address'});
        }
        else {
            this.setState({error_drop_address : ''})
        }
        // Validation name
        if (this.state.name.length < 5) {
            this.setState({error_name : 'Name is required'});
        }
        else {
            this.setState({error_name : ''})
        }
        // Validation email
        if (this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) === null) {
            this.setState({error_email : 'Please Enter a Valid Email'});
        }
        else {
            this.setState({error_email : ''})
        }
        // Validation mobile
        if (this.state.mobile.length < 10) {
            this.setState({error_mobile : 'Please Enter a Valid mobile'});
        }
        else {
            this.setState({error_mobile : ''})
        }


        let data = {
            pickup_address : this.state.pickup_address,
            drop_address : this.state.drop_address,
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            pickup_date : this.state.pickup_date,
            pickup_time : this.state.pickup_time
        };

        axios({
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              url: 'http://localhost:9000/api/submit_reservation',
              data: data
            })
         .then((response) => {
            if(response.data.status === 'OK'){
                this.setState({isBooked:true})
            }
            
         })
        .catch(error=>{
            if(error.data.status === 'ERROR'){
                console.log('Error')
            }
             console.log(error)
        });
        

    }

    render(){
        return(
               <div className='container pt-3 pb-3'>
                   <div className='row p-3'>
                        <div className='col-md-6 p-0'>
                        { 
                        this.state.isBooked  ? 
                        <div className="bg-warning text-white p-2 ">Thank you! We have received your booking</div>
                        : null
                        }
                            <form autocomplete="off" onSubmit={this.handleSubmit} className="needs-validation">
                                <div className="row">
                                    <div className='col-6'>
                                        <div className="form-group text-left">
                                            <label htmlFor="pickup_date">Pickup Date</label>
                                            <input onChange={this.handleChange} value={this.state.pickup_date} type="text" className="form-control rounded-0" id="pickup_date" name="pickup_date" aria-describedby="Pickup Date" placeholder=""/>
                                            <span className='error'>{this.state.error_pickup_date}</span>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className="form-group text-left">
                                            <label htmlFor="pickup_time">Pickup Time</label>
                                            <input onChange={this.handleChange} value={this.state.pickup_time} type="text" className="form-control rounded-0" id="pickup_time" name="pickup_time" aria-describedby="Pickup Time" placeholder=""/>
                                            <span className='error'>{this.state.error_pickup_time}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="pickup_address">Pickup Place / Address</label>
                                                <GooglePlacesAutocomplete
                                                    autocompletionRequest={{
                                                        componentRestrictions: {
                                                        country: ['ca'],
                                                        }
                                                    }}
                                                    placeholder = 'Pickup Place / Address'
                                                    onSelect={({ description }) => (
                                                        this.setState({ pickup_address: description })
                                                    )}
                                                    
                                                    renderInput={(props) => (
                                                        <input name="pickup_address"
                                                        value={this.state.pickup_address}
                                                        onKeyUp={this.handleChange}
                                                        className="form-control rounded-0"
                                                            {...props}
                                                        />
                                                    )}/>
                                                    <span className='error'>{this.state.error_pickup_address}</span>  
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="drop_address">Drop Place / Address</label>
                                                <GooglePlacesAutocomplete
                                                    autocompletionRequest={{
                                                        componentRestrictions: {
                                                        country: ['ca'],
                                                        }
                                                    }}
                                                    placeholder = 'Drop Place / Address'
                                                    onSelect={({ description }) => (
                                                        this.setState({ drop_address: description })
                                                    )}
                                                    
                                                    renderInput={(props) => (
                                                        <input name="drop_address"
                                                        value={this.state.drop_address}
                                                        onKeyUp={this.handleChange}
                                                        className="form-control rounded-0"
                                                            {...props}
                                                        />
                                                    )}/>  
                                            <span className='error'>{this.state.error_drop_address}</span>
                                            </div>
                                            
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="name">Name</label>
                                                <input onChange={this.handleChange} value={this.state.name} type="text" className="form-control rounded-0" id="name" name="name" aria-describedby="Your Name" placeholder=""/>
                                                <span className='error'>{this.state.error_name}</span>
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="email">Email</label>
                                                <input onChange={this.handleChange} value={this.state.drop_email}  type="text" className="form-control rounded-0 required" id="email" name="email" aria-describedby="Email Address" placeholder=""/>
                                                <span className='error'>{this.state.error_email}</span>
                                            </div> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-12'>
                                            <div className="form-group text-left">
                                                <label htmlFor="mobile">Mobile</label>
                                                <input onChange={this.handleChange} value={this.state.drop_mobile} type="text" className="form-control rounded-0" id="mobile" name="mobile" aria-describedby="Mobile Phone" placeholder=""/>
                                                <span className='error'>{this.state.error_mobile}</span>
                                            </div>
                                            
                                    </div>
                                </div>
                                <div className='col-12 text-right pr-0 mt-3'>
                                <button className="btn btn-dark rounded-0 mb-3" type='submit'>Book Your Journey</button>
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