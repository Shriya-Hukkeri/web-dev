import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
    const profileData = useSelector(state => state.profile);
    const [name,setName] = useState(profileData.name);
    const [bio, setBio] = useState(profileData.bio)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChange = (value) => {
        setName(value);
    }

    const onBioChange = (value) => {
      setBio(value);
    }

    const onSave = () => {
      dispatch({type:'edit-profile', profileData:  {...profileData,
          name,
          bio}});
      goBack();
    }

    const goBack = () => {
        navigate("/tuiter/profile");
    }

    return (
        <div className="text-white">
            <div className="row">
                <div className="col-1" onClick={goBack}/>
                    <i className="fas fa-solid fa-xmark"></i>
                <div className="col-6">
                    <h5 className="text-white">Edit Profile</h5>
                </div>
                <div className="col-2">
                    <button onClick={onSave} className="btn btn btn-primary wd-follow-button bg-dark">Save</button>
                </div>
            </div>
            <div className="row col-12">
                <img src="../../images/spaceX.jpg" height={200}/>
            </div>
            <div className="row">
                <div className="col-8" style={{marginTop: -50, marginLeft: 20}}>
                    <img src="../../images/reactJs.jpg" style={{border: 'solid 5px'}} height={'100px'} width={'100px'} className="rounded-circle"/>
                </div>
            </div>
            <div className="row form-floating" style={{marginLeft: '10px', marginTop: '10px'}}>
                <input value={name} className="form-control bg-dark text-white" id="floatingInput"
                       onChange={(e) => onNameChange(e.target.value)}/>
                <label className="text-white" htmlFor="floatingInput">Name</label>
            </div>
            <div className="row form-floating" style={{marginLeft: '10px', marginTop: '10px'}}>
                <textarea value={bio} className="form-control bg-dark text-white" style={{height: '200px'}} id="floatingTextArea"
                onChange={event => onBioChange(event.target.value)}/>
                <label className="text-white" htmlFor="floatingTextArea">Bio</label>
            </div>
            <div className="row" >
                <div className="col-md-12 pt-3">
                    <span className="text-secondary"><i className="fas fa-map-marker-alt "></i> Boston, Ma</span>
                    <span className="text-secondary ms-3"><i className="fas fa-map-pin"></i> Born Dec 2 1994</span>
                    <span className="text-secondary ms-3"><i className="fas fa-calendar-alt"></i> Joined Dec 2017</span>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;