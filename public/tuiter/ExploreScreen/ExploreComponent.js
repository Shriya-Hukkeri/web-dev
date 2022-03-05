import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
	return(`
		<div class="row">
        <div class="col-11">
          <i class="fa fa-search mt-2 ms-3 wd-padding-top"
             style="position: absolute; color: darkgray;"></i>
          <div class="search"><input class="form-control wd-tweet-search-button"
                                     type="text"
                                     placeholder="Search twitter"></div>
        </div>
        <div class="col-1">
          <i class="fas fa-cog fa-2x mt-1" style="color: #2487b6"></i>
        </div>
      </div>
      <!--SEARCH INPUT AND GEAR ICON END-->

      <!--TABS START-->

      <div>
        <ul class="nav nav-tabs mt-1">
          <li class="nav-item">
            <a class="nav-link active " href="#">For You</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Sports</a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a class="nav-link " href="#">Entertainment</a>
          </li>
        </ul>
      </div>

      <!--TABS END-->

      <!--IMAGE START-->

       <div class="card"
              style="width: 100%; border-bottom-style: solid; border-bottom-width: thin; border-bottom-color: darkgrey">
            <img src="../images/spaceX.jpg" class="card-img-top" alt="...">
            <div style="margin-bottom: -65px">
               <h2 class="wd-card-image-design" style="position: relative">SpaceX's
                                                                           Starship</h2>
            </div>
         </div>
      ${PostSummaryList()}
	`);
}

export default ExploreComponent;