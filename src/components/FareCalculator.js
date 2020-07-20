import React from 'react';
import './FareCalculator.css';

class FareCalculator extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            fare : ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(event)
    {
        this.setState({[event.target.name] : event.target.value})
    }

    render(){
        return(
               <div className='fare-calculator bg-warning col-lg-5 col-md-9 text-left p-2 '>
                   <p className='text-left mb-1'>FARE CALCULATOR</p>
                   <p className="text-white">Calculate A Discounted Flat-Rate To/From Pearson Airport</p>
                   <div className="input-group mb-3 w-100">
                        <div className="input-group-prepend w-75">
                            <input onChange={this.handleUpdate} type='text' className='form-control rounded-0 w-100' value={this.state.fare} name='fare' placeholder="type your address here" id="fare"/>
                        </div>
                        <button className="btn btn-dark rounded-0 w-25" type="button">Search</button>
                    </div>


               </div>
        );
    }
}

export default FareCalculator;