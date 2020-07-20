import React from 'react';
import './Infobox.css';

class Featurebox extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-lg-3">
                <div className="feature_box" id={this.props.id}>
                    <div className="w-100 bg-warning feature_box_title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="feature_box_content w-100">
                        <img src={`./img/icons/` + this.props.icon} className="feature_icon"/>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featurebox;