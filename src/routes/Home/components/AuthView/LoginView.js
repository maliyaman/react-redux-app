import React from 'react';
import { connect } from 'react-redux';
import { browserHistory,hashHistory } from 'react-router';

import { userInit } from 'store/userReducer'


class LoginView extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }

    }

    emailChanged(e) {
        this.setState({
            email: e.target.value
        })
    }

    passwordChanged(e) {
        this.setState({
            password: e.target.value
        })
    }

    onUserClick() {
        // HTTP Call
        const user = {
            name: "Melih Korkmaz",
            email: "mk@count.ly",
            age: 33,
            gender: "male"
        }
        this.props.loginUserData(user);
        browserHistory.push('/profile');
    }


    render() {

        const onViewChange = this.props.onViewChange;

            const { email, password } = this.state;
            const errors = validate(email, password, true);
            const isEnabled = !(errors.email.valid || errors.password.valid);
            return (
                <div>
                    <form className="form">
                        <div className="form-group">
                            <input type="text" className={"form-control" + (errors.email.valid ? " error" : "")} placeholder="E-Posta" value={this.state.email} onChange={this.emailChanged.bind(this)} />
                            <p className="errMes">{errors.email.valid ? errors.email.errmes : ""}</p>
                        </div>
                        <div className="form-group">
                            <input type="password" className={"form-control" + (errors.password.valid ? " error" : "")} placeholder="Şifre" value={this.state.password} onChange={this.passwordChanged.bind(this)} />
                            <p className="errMes">{errors.password.valid ? errors.password.errmes : ""}</p>
                        </div>
                        <div className="form-group">
                            <button type="button" disabled={!isEnabled} className="btn btn-primary" onClick={this.onUserClick.bind(this)}>Giriş Yap</button>

                        </div>
                        <div className="form-group">
                            <a href="#" onClick={e => {
                                e.preventDefault();
                                onViewChange(3);
                            }}>Şifremi Unuttum!</a>
                        </div>
                    </form>

                    <p>
                        Henüz üye olmadınız mı? <br />
                        Ücretsiz kayıt olmak için <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                            e.preventDefault();
                            onViewChange(2);
                        }} >tıklayınız.</a></u></b>
                    </p>
                </div>
            )
        }
}
function validate(email, password, check) {
    // true means invalid, so our conditions got reversed
    if (check) {
        return {
            email: {
                valid: email.length === 0,
                errmes: "email boş bırakılamaz !"
            },
            password: {
                valid: password.length === 0,
                errmes: "şifre boş bırakılamaz !"
            }
        };
    } else {
        return {
            email: {
                valid: false,
                errmes: "email boş bırakılamaz !"
            },
            password: {
                valid: false,
                errmes: "şifre boş bırakılamaz !"
            }
        };
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginUserData: (user) => dispatch(userInit(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
// export default LoginView;