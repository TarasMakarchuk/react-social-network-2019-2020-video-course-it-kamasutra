import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import lookinJob from '../../../assets/images/lookin_job.jpg'
import notLookinJob from '../../../assets/images/not_looking_job.jpg'
import defaultAvatar from '../../../assets/images/pandaHandUp.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import userPhoto from '../../../assets/images/senegalskii-galago.jpg'

const ProfileInfo = ({profile, status, updateStatus, isOwner = true, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = event => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });
    };

    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/howto/img_nature_wide.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.avatar}
                     src={profile.photos.large || defaultAvatar}/>
                <br/>
                     {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => setEditMode(true)}
                    />}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div><b>full name</b>: {profile.fullName}</div>
            <div><b>looking for a Job</b>: {(profile.lookingForAJob === true) ?
                <span>
                        <img src={lookinJob} width='90px' style={{'borderRadius': '50%'}}/>
                    {'yes!'}
                    </span> :
                <span>
                        <img src={notLookinJob} width='90px' style={{'borderRadius': '50%'}}/>
                    {'no'}
                    </span>
            }</div>
            <div><b>looking for a Job description</b>: {profile.lookingForAJobDescription}</div>
            <div><b>about Me</b>: {profile.aboutMe}</div>

            <div><b>contacts</b>:
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div>
                            <Contact key={key}
                                     contactTitle={key}
                                     contactValue={profile.contacts[key]}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};


const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
};

export default ProfileInfo;