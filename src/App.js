import "./components/tuiter/design.css";
import "./components/tuiter/explore.css";

import Tuiter from "./components/tuiter";
import Labs from "./components/labs";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen";
import ProfileScreen from "./components/tuiter/profile/ProfileScreen";
import EditProfile from "./components/tuiter/profile/EditProfile";


function App() {
    return (
        <BrowserRouter>
            <div className="container ">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="profile/editProfile"
                                   element={<EditProfile/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
