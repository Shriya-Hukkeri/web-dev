import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findAllTuits}
    from "../../../actions/tuits-actions";


const TweetList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);
    
    return(
        <ul className="list-group ">
            {
                tuits.map(tuit =>
                    <TuitListItem tuit={tuit}/>
                )
            }
        </ul>
    )
};
export default TweetList;


