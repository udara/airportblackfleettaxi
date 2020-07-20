import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <header className='container p-3'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'>
                        <img className='logo' src='./img/airfleetport_taxi.png'/>
                    </div>
                    <div className='col-md-8 col-sm-12 text-right '>
                        <div className='row header-contact-info'>
                            <div className="text-secondary col-sm-0 col-md-12">For Reservarions</div>
                            <div className="text-warning col-sm-0 col-md-12">Call Us on</div>
                            <div className="text-warning col-sm-12 col-md-12">+1-(416) 000-0000</div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;