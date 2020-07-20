import React from 'react';
import './Hero.css';
import FareCalculator from './FareCalculator';

class Hero extends React.Component{
    render(){
        return(
               <div className='container-fluid hero pt-5 '>
                    <div className="container">
                        <h1 className='display-4 text-left '>TORONTO AIRPORT TAXI & LIMO SERVICE</h1>
                        <FareCalculator/>
                        <div className='container-fluid pt-5 pb-1 mt-3'>
                            <img src='./img/fleet.png'/>
                        </div>
                    </div>
                   
               </div>
        );
    }
}

export default Hero;