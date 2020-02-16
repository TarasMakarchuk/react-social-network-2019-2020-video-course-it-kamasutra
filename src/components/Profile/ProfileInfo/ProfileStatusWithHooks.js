import React, {
    useState,
    useEffect
} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileStatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () =>{
        setEditMode(true);
    };

    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = event =>{
        setStatus(event.currentTarget.value);
    };

    return (
        <div>
            { !editMode &&
            <div>
                <b>Status: </b>

                <span
                onDoubleClick={activateEditMode}
                >{!props.status ? '------------' : props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                />
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;