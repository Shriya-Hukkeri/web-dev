import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
import * as service from '../../../services/tuits-service';

const TweetList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    const findAllTuits = async () => {
        const tuits = await service.findAllTuits();
        dispatch({
            type: 'FIND_ALL_TUITS',
            tuits: tuits
        });
    }
    useEffect(findAllTuits, []);
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


