import React from "react";

const WhoToFollowListItem = ({ who }) => {
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-3 col-xl-3 col-lg-2">
                        <img src={who.avatarIcon} alt={""} className="wd-who-to-follow-image"/>
                    </div>
                    <div className="col-7 col-lg-6 col-xl-6 wd-check-margin">
                        <div className="wd-bold_font">{who.userName}
                            <span className="fa-stack wd-check-margin">
                         <i className="fas fa-circle fa-stack-1x fa-sm"></i>
                         <i className="fas fa-check fa-stack-1x fa-xs fa-inverse"></i>
                         </span>
                        </div>
                        <div className="wd-normal-font" style={{marginTop: '-5px'}}>{who.handle}
                        </div>
                    </div>

                    <div className="col-2 col-xl-3 col-lg-4">
                        <button className="btn btn-primary wd-follow-button">Follow</button>
                    </div>
                </div>
            </li>
        </>
);
};

export default WhoToFollowListItem;
