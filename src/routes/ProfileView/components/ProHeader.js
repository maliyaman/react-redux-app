import React, { Component } from 'react';
import {connect} from 'react-redux'

import { profileInit } from 'store/profileReducer'


class ProHeader extends Component {
    componentWillMount(){
        this.state ={
            name: "Melih",
            surname:"Korkmaz",
            email: "mk@count.ly",
            age: 33,
            gender: "male"
        }
    }
    constructor() {
        super();
        this.state = {
            name: "",
            surname:"",
            email: "",
            age: 0,
            gender: ""
        }
    }
    
    render() {
        const { name, surname } = this.state;
        console.log(this.state)
        return (
           
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                            <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png" alt="stack photo" className="img" />
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                            <div className="container headerContainer">
                                <h2>{name+ ' ' + surname}</h2>
                            </div>
                            <hr />
                            <ul className="container details">
                                <li><p><span className="glyphicon glyphicon-earphone one headerElement"></span>+91 90000 00000</p></li>
                                <li><p><span className="glyphicon glyphicon-envelope one headerElement" ></span>somerandom@email.com</p></li>
                                <li><p><span className="glyphicon glyphicon-map-marker one headerElement"></span>Hyderabad</p></li>
                                <li><p><span className="glyphicon glyphicon-new-window one headerElement" ></span><a href="#">www.example.com</a></p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        profileHeaderData: state.profileHeader
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        profileHeaderUserData: (profileHeader) => dispatch(profileInit(profileHeader))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProHeader)
