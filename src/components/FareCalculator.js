import React from 'react';
import axios from 'axios';
import DisplayFares from './DisplayFares';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import './FareCalculator.css';
import { BookingContext } from "../contexts/BookingContext";

class FareCalculator extends React.Component{
    static contextType = BookingContext;
    constructor(props)
    {
        super(props);
        this.state = {
            search : '',
            showFares: false,
            journeyFares : ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.SetContext = this.SetContext.bind(this);
    }

    handleUpdate(event)
    {
        console.log(event);
        this.setState({[event.target.name] : event.target.value})
    }

    DisplayPrices(props) {
        return <h1>Welcome back!</h1>;
    }

    SetContext()
    {
        const data = {
            selected_vehicle : 'van',
            address : '123456'
        }

        this.context.QuickCalcInfo(data);
    }

    handleSubmit(event)
    {
        
        let data = {
            origin : 'Toronto Pearson International Airport',
            destination : this.state.search
        }

        axios({
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            url: 'http://localhost:9000/api/calculate_distance',
            data: data
        })
        .then(response => {
            if(response.data.status === 'OK')
            {
                this.setState(
                    {
                        showFares : true,
                        journeyFares : response.data.prices
                    }
                );
            }
            else
            {
                this.setState(
                    {
                        showFares : false,
                        journeyFares : {}
                    }
                );
            }
           console.log(response.data);
        })
        .catch(error=>(
            console.log(error)
        ));
 
    }
    // <input onChange={this.handleUpdate} type='text' className='form-control rounded-0 w-100' value={this.state.fare} name='fare' placeholder="type your address here" id="fare"/>
    render(){
        return(
            <div>
               <div className='fare-calculator bg-warning col-lg-5 col-md-9 text-left p-2 '>
                   <p className='text-left mb-1'>FARE CALCULATOR</p>
                   <p className="text-white">Calculate discounted flat rate to/from Toronto Airport.</p>
                   <div className="input-group mb-3 w-100">
                        <div className="input-group-prepend w-75 bg-light">
                            <GooglePlacesAutocomplete
                             autocompletionRequest={{
                                componentRestrictions: {
                                  country: ['ca'],
                                }
                              }}
                            placeholder = 'Enter Address or Place name'
                            onSelect={({ description }) => (
                                this.setState({ search: description })
                              )}
                            
                            renderInput={(props) => (
                                  <input name="search"
                                  value={this.state.search}
                                  onKeyUp={this.handleUpdate}
                                  className="form-control fare rounded-0 w-100 pl-5"
                                    {...props}
                                  />
                              )}
                            />
                        </div>
                        <button onClick={this.handleSubmit, this.SetContext} className="btn btn-dark rounded-0 w-25" type="button">Search</button>
                    </div>
               </div>
                {this.state.showFares  ? <DisplayFares prices={this.state.journeyFares}/> : null}
               </div>
        );
    }
}

export default FareCalculator;