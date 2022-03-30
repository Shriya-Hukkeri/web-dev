import React from "react";

const PostSummaryItem = ({posts}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="wd-web-dev-design">{posts.topic}</div>
                    <div className="wd-bold_font">{posts.userName}
                        <span className="fa-stack wd-check-margin">
         <i className="fas fa-circle fa-stack-1x fa-sm"></i>
         <i className="fas fa-check fa-stack-1x fa-xs fa-inverse"></i>
        </span>
                        <span className="wd-normal-font wd-timestamp-margin">&#8211; {posts.time}</span>
                    </div>
                    <div className="wd-bold_font">
                        {posts.title}
                    </div>
                    <div className="wd-web-dev-design">{posts.tweets}</div>
                </div>
                <div className="col-2">
                    <img src={posts.image} alt={""} className="wd-side-image"/>
                </div>
            </div>

        </li>
    );
}

export default PostSummaryItem;