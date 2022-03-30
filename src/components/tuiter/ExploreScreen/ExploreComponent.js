import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
	return(
		<>
		<div className="row opacity">
        <div className="col-11">
          <i className="fa fa-search mt-2 ms-3 wd-padding-top"
             style={{position: 'absolute', color: 'darkgray'}}></i>
          <div><input className="form-control wd-tweet-search-button"
                                     type="text"
                                     placeholder="Search twitter" /></div>
        </div>
        <div className="col-1">
          <i className="fas fa-cog fa-2x mt-1" style={{color: '#2487b6'}}></i>
        </div>
      </div>
      <div className="opacity">
        <ul className="nav nav-tabs mt-1">
          <li className="nav-item">
            <a className="nav-link active " href="#">For You</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Sports</a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link " href="#">Entertainment</a>
          </li>
        </ul>
      </div>

       <div className="card"
              style={{width: '100%', borderBottomStyle: 'solid', borderBottomWidth: 'thin', borderBottomColor: 'darkgrey'}}>
            <img src="../images/spaceX.jpg" className="card-img-top" alt="..." />
            <div style={{marginBottom: '-65px'}}>
               <h2 className="wd-card-image-design" style={{position: 'relative'}}>SpaceX's
                                                                           Starship</h2>
            </div>
         </div>
      <PostSummaryList/>
			</>
	);
}

export default ExploreComponent;