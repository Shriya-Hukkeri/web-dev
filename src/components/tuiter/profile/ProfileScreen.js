import React from "react";

const ProfileScreen = () => {
    return (
        <div>
            <div className="row">
                <div className="col-1"/>
                <div className="col-6">
                    <h5>Shriya Hukkeri</h5>
                    <div className="text-secondary"> 100 tuits</div>
                </div>
            </div>
            <div className="row col-12">
                <img src="../images/spaceX.jpg" height={200}/>
            </div>
            <div className="row">
                <div className="col-8" style={{marginTop: -50, marginLeft: 20}}>
                    <img src="../images/reactJs.jpg" style={{border: 'solid 5px'}} height={'100px'} width={'100px'} className="rounded-circle"/>
                </div>
                <div className="col-3" style={{margin: '5px'}}>
                    <button className="btn btn-primary wd-follow-button">Edit Profile</button>
                </div>
            </div>
            <div className="row" style={{marginLeft: '10px'}}>
                <h6>Shriya Hukkeri</h6>
                <div className="text-secondary">@shukker</div>
            </div>
            <div className="row">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
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

export default ProfileScreen;