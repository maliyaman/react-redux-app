import React, { Component } from 'react';
import { connect } from 'react-redux'

import { profileInit } from 'store/profileReducer'
import PropTypes from 'prop-types';
import Modal from 'react-modal';



class ProHeaderPopUp extends Component {

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
        console.log(this.props.isOpen);
        return (
            <div className="container">
                <Modal
                    isOpen={this.props.isOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    closeTimeoutMS={5}

                    contentLabel="Modal"
                >
                    <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                    <h3 className="modal-title" id="lineModalLabel">My Modal</h3>
                    <hr />
                    <div className="modal-body">

                        <form className="form-vertical">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label >Surname</label>
                                <input type="text" className="form-control" placeholder="Enter Surname" />
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label >Phone</label>
                                <input type="text" className="form-control" placeholder="Enter Phone" />
                            </div>
                            <div className="form-group">
                                <label >Age</label>
                                <input type="number" className="form-control" placeholder="Enter Age" />
                            </div>
                            <div className="form-group">
                                <div class="radio">
                                    <label><input type="radio" name="gender" /> Male</label>
                            </div>
                                    <div class="radio">
                                        <label><input type="radio" name="gender" /> Female</label>
                             </div>
                                    </div>
                            <div className="form-group">
                                <label h>File input</label>
                                <input type="file" id="exampleInputFile" />
                                <p className="help-block">Example block-level help text here.</p>
                            </div>
                        
                                    <button type="submit" className="btn btn-default">Submit</button>
                          </form>

                            </div>
                            <div className="modal-footer">
                                <div className="btn-group btn-group-justified" role="group" aria-label="group button">
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-default" data-dismiss="modal" role="button">Close</button>
                                    </div>
                                    <div className="btn-group btn-delete hidden" role="group">
                                        <button type="button" id="delImage" className="btn btn-default btn-hover-red" data-dismiss="modal" role="button">Delete</button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button type="button" id="saveImage" className="btn btn-default btn-hover-green" data-action="save" role="button">Save</button>
                                    </div>
                                </div>
                            </div>
                </Modal>
                    </div>
                    );
    }
}
ProHeaderPopUp.contextTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(ProHeaderPopUp)
