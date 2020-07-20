import React from 'react';
import './SelectVehicle.css';

class SelectVehicle extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedVehicle : './img/fleet/lux_suv.png'
        }
    }

    render(){
        return(
               <div className='container pt-3 pb-5'>
                  <div className='col-12 text-left mb-5'>
                  <h1>SELECT VEHICLE TYPE</h1>
                  </div>
                   <div className='row'>
                   <div className='col-md-6'>
                            <img className='fleet-thumb' src={this.state.selectedVehicle}/>
                       </div>
                       
                       <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-6'><img className='fleet-thumb' src='./img/fleet/lux_sedan.png'/></div>
                                <div className='col-6'><img className='fleet-thumb' src='./img/fleet/fleet_midsize_crossover.png'/></div>
                                <div className='col-6'><img className='fleet-thumb' src='./img/fleet/lux_suv.png'/></div>
                                <div className='col-6'><img className='fleet-thumb' src='./img/fleet/luxury_van.png'/></div>
                            </div>
                       </div>
                    
                    </div>
               </div>
        );
    }
}

export default SelectVehicle;