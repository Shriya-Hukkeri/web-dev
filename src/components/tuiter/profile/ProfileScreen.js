import React, {useState} from "react";
import {Link, Route,  useNavigate} from "react-router-dom";
import EditProfile from "./EditProfile";
import {useSelector} from "react-redux";

const ProfileScreen = () => {
    const profileData = useSelector(state => state.profile)
    const navigate = useNavigate();

    const back = () => {navigate("/tuiter")}
    return (
        <div className="text-white">
            <div className="row">
                <div className="col-1" onClick={back}>
                    <i className="fas fa-solid fa-arrow-left"></i>
                </div>
                <div className="col-6">
                    <h5>{profileData.name}</h5>
                    <div className="text-secondary"> {profileData.tuitCount} tweets</div>
                </div>
            </div>
            <div className="row col-12">
                <img src="../images/spaceX.jpg" height={200}/>
            </div>
            <div className="row">
                <div className="col-8" style={{marginTop: -50, marginLeft: 20}}>
                    <img src="../images/reactJs.jpg" style={{border: 'solid 5px'}} height={'100px'} width={'100px'}
                         className="rounded-circle"/>
                </div>
                <div className="col-3" style={{margin: '5px'}}>
                        <Link to="editProfile" >
                            <button className="btn btn-primary wd-follow-button" >Edit Profile </button>
                        </Link>
                </div>
            </div>
            <div className="row" style={{marginLeft: '10px'}}>
                <h6>{profileData.name}</h6>
                <div className="text-secondary">@{profileData.handle}</div>
            </div>
            <div className="row">
                <p>{profileData.bio}</p>
            </div>
            <div className="row">
                <div className="col-md-12 pt-3">
                    <span className="text-secondary"><i className="fas fa-map-marker-alt "></i> {profileData.location}</span>
                    <span className="text-secondary ms-3"><i className="fas fa-map-pin"></i> {profileData.dateOfBirth}</span>
                    <span className="text-secondary ms-3"><i className="fas fa-calendar-alt"></i> {profileData.dateJoined}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;