import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component{
    render(){
        return(
               <div className='container'>
                   <div className='row'>
                        <div className='col-md-6 p-5 text-justify'>
                            <h2>ABOUT US</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Integer placerat sit amet nisl sit amet egestas. Vivamus quis rhoncus nibh, at feugiat orci.
                            Nulla in arcu tincidunt, aliquam purus non, lacinia mauris. </p>
                        </div>
                        <div className='col-md-6'>
                            2
                        </div>
                   </div>
                   <div className='row'>
                        <div className='col-md-6'>
                            3
                        </div>
                        <div className='col-md-6'>
                            4
                        </div>
                   </div>
               </div>
        );
    }
}

export default AboutUs;