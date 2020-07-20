import React from 'react';
import './Footer.css';

class Footer extends React.Component{

    render(){
        return(
            <div className="footer container-fluid">
               
               <div className='container'>
                    <div className="row">
                        <div className='col-lg-4 text-left'>
                            <h3>Our Services</h3>
                            <ul>
                            <li>Pick-Up From Airport</li>
                            <li>Drop Off to Airport</li>
                            <li>Toronto Airport Shuttle Service</li>
                            <li>Pick-Up From Airport</li>
                            <li>Limo from toronto to niagara falls</li>
                            </ul>
                            <h3>Links</h3>
                            <ul>
                            <li><a href="index.php">Home</a></li>
                            <li><a href="book_now.php">Book Now</a></li>
                            <li><a href="faq.php">FAQs</a></li>
                            <li><a href="about.php">About Us</a></li>
                            <li><a href="contact.php">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-4 text-left'>
                            <h3>Areas Served</h3>
                            <ul>
                            <li>Ajax</li>
                            <li>Aurora</li>
                            <li>Brampton</li>
                            <li>Burlington</li>
                            <li>Durham</li>
                            <li>Greater-Toronto-Area(GTA)</li>
                            <li>Markham</li>
                            <li>Milton</li>
                            <li>Mississauga</li>
                            <li>Newmarket</li>
                            <li>Oakville</li>
                            <li>Orangeville</li>
                            <li>Oshawa</li>
                            <li>Pickering</li>
                            <li>Richmond Hill</li>
                            <li>Scarborough</li>
                            <li>Stouffville Uxbridge</li>
                            <li>Vaughan</li>
                            <li>Whitby</li>
                            <li>Woodbridge</li>
                            <li>York Region</li>
                            </ul>
                        </div>

                        <div className='col-lg-4 text-left'>
                            <h3>Contact Details</h3>
                            <p>Tel: +1-(416) 548-9311<br/>
                            Email: info [at] airportblackfleettaxi.com</p>
                        </div>         
                    </div>
               </div>
            </div>
        );
    }
}

export default Footer;