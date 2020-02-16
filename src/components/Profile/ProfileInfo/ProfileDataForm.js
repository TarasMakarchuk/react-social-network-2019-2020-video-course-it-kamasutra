import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import classes from '../../common/FormsControls/FormsControls.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>full name</b>: {createField('Full name', 'fullName', Input, [])}
            </div>
            <div>
                <b>looking for a Job</b>:
                {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}
            </div>
            <div>
                <b>about Me</b>:
                {createField('About me', 'aboutMe', Textarea, [])}
            </div>

            <div><b>contacts</b>:
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div className={styles.contact} key={key}>
                            <b>{key}:</b>{createField(key, 'contacts.'+key, Input, [])}
                        </div>
                    )
                })}
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm

