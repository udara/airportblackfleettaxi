import React from 'react';
import InfoBox from './InfoBox';


class HomePage extends React.Component {
    
    render(){
        let featureBoxs = [ 
            {
            title : 'FIXED RATES',
            id: 'feature_box_1',
            icon : 'icon-fixed-rates.png',
            description : 'You pay exactly quoted price. Cheapest prices guaranteed. No flight delay charges. Free child seats. Best limo & taxi service in toronto.'
            },
            {
                title : 'ONLINE BOOKING',
                id: 'feature_box_2',
                icon : 'icon-online-booking.png',
                description : 'No complicated forms to fill. Get a quick quote from our cost calculator & book within two miniutes.'
            },
            {
                title : 'NO OBLIGATION BOOKING',
                id: 'feature_box_3',
                icon : 'icon-no-advance.png',
                description : 'You pay the driver at the end of your transfer. Truly a no obligation booking. Once the booking is made, simply email back to confirm your booking.'
            },
            {
                title : 'RELIABLE',
                id: 'feature_box_4',
                icon : 'icon-relaible.png',
                description : 'All our chauffeurs are well trained professionals with clean driving license. You are guaranteed to be at your destinatin on time.'
            }
        ]

        return(
            <div className='container'>
                <div className='row'>
                {featureBoxs.map(featureBox => (
                     <InfoBox {...featureBox} />
                ))}
               </div>
            </div>
        );
    }
}

export default HomePage;