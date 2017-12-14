import React, { Component } from 'react';
import { connect } from 'react-redux'

import { profileInit } from 'store/profileReducer'
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ProHeaderPopUp from './ProHeaderPopUp'


class ProHeader extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            surname: "",
            email: "",
            phone: "",
            age: 0,
            gender: "",
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentWillMount() {
        const store = this.context.store;
        const user = {
            name: "Melih",
            surname: "Korkmaz",
            email: "mk@count.ly",
            phone: "+90507 515 20 60",
            age: 33,
            gender: "male"
        };
        this.props.profileHeaderUserData(user);
        this.setState(store.getState().profile);
        Modal.setAppElement('body');

    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.

    }
    render() {
        const { name, surname, email, phone } = this.state;
        return (
            <div className="container">
                     <ProHeaderPopUp isOpen={this.state.modalIsOpen}/>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                            <img src="https://www.svgimages.com/svg-image/s5/man-passportsize-silhouette-icon-256x256.png" alt="stack photo" className="img" />
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                            <div className="container headerContainer">
                                <h2>{name + ' ' + surname}</h2>
                                <button onClick={this.openModal}>Open Modal</button>
                            </div>
                            <hr />
                            <ul className="container details">
                                <li><p><span className="glyphicon glyphicon-earphone one headerElement"></span>{phone}</p></li>
                                <li><p><span className="glyphicon glyphicon-envelope one headerElement" ></span>{email}</p></li>
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
ProHeader.contextTypes = {
    store: PropTypes.object.isRequired
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
