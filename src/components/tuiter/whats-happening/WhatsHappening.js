import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });

    }
    return (
        <>
            <table style={{marginBottom: '16px'}} className="text-white">
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={"https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg"}
                             className="rounded-circle"
                             style={{width: '70px', margin: '18px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control bg-dark text-white"
                                  style={{
                                      width: "100%", marginLeft: 18,
                                      marginTop: 10,
                                      color: "gray",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"
                                  }}
                                  placeholder="What's happening?"/>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-analytics me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tuitClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}
export default WhatsHappening;