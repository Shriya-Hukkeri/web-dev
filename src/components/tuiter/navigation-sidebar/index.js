import React, {useState} from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const [activeSelect, setActive] = useState('home');
    return (
        <>
            <div className="list-group bg-dark text-white">
                <a className={`list-group-item  bg-dark`} href="/"><i className="fab fa-twitter"></i></a>
                <Link className={`list-group-item  list-group-item-action bg-dark text-white ${activeSelect === 'home' ? 'active' : ''}`}
                      to=""><i
                    className="fas fa-home me-1"></i><span
                    className="d-none d-xl-inline-block bg-dark text-white" onClick={() => setActive('home')}>Home</span></Link>
                <Link className={`list-group-item list-group-item-action bg-dark text-white ${activeSelect === 'explore' ? 'active' : ''}`}
                      to="explore" onClick={() => setActive('explore')}><i
                    className="fas fa-hashtag me-2"></i><span className="d-none d-xl-inline-block">Explore</span></Link>
                <a className={`list-group-item list-group-item-action bg-dark text-white ${activeSelect === 'notifications' ? 'active' : ''}`}
                   href="#"><i className="fas fa-bell me-2"></i><span
                    className="d-none d-xl-inline-block">Notifications</span></a>
                <a className={`list-group-item list-group-item-action  bg-dark text-white ${activeSelect === 'messages' ? 'active' : ''}`}
                   href="#"><i className="fas fa-envelope me-2"></i><span
                    className="d-none d-xl-inline-block">Messages</span></a>
                <a className={`list-group-item list-group-item-action bg-dark text-white ${activeSelect === 'bookmarks' ? 'active' : ''}`}
                   href="#"><i className="fas fa-bookmark me-2"></i><span
                    className="d-none d-xl-inline-block">Bookmarks</span></a>
                <a className={`list-group-item list-group-item-action bg-dark text-white ${activeSelect === 'lists' ? 'active' : ''}`}
                   href="#"><i className="fas fa-list me-2"></i><span
                    className="d-none d-xl-inline-block">Lists</span></a>
                <Link className={`list-group-item list-group-item-action bg-dark text-white ${activeSelect === 'profile' ? 'active' : ''}`}
                      to="profile" onClick={() => setActive('profile')}><i className="fas fa-user me-2"></i><span
                    className="d-none d-xl-inline-block">Profile</span></Link>
                <a className={`list-group-item list-group-item-action bg-dark text-white ${activeSelect === 'more' ? 'active' : ''}`}
                   href="#"><i
                    className="fas fa-circle me-2"></i><span
                    className="d-none d-xl-inline-block">More</span></a>

                <div className="d-grid mt-2">
                    <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">Tweet</a>
                </div>
            </div>
        </>

    );
}
export default NavigationSidebar;
