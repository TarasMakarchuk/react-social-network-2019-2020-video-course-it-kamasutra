import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    console.log('LoginForm RERENDER');
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                   { createField('Email', 'email', Input, [required]) }
                   { createField('Password', 'password', Input, [required], {type: 'password'}) }
                   { createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me') }

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl &&  createField('Symbols from image', 'captcha', Input, [required], {}) }

                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    console.log('props.isAuth');
    console.log(props.isAuth);

    if (props.isAuth) {

        return <Redirect to={'/profile'}/>
    }

    return (
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    )
};

const mapStateToProps = state => ({
    getCaptchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);