import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return(
            <ul className="list-group  ">
                <li className="list-group-item wd-bold_font bg-dark text-white">Who To Follow</li>
                    {
                         who.map(who_list => {
                         return(<WhoToFollowListItem key={who_list.userName} who={who_list} />);
                     })
                    }
            </ul>
       
    );
}

export default WhoToFollowList;