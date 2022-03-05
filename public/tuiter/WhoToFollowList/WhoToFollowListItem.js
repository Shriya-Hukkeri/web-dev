const WhoToFollowListItem = (who) => {
    return (`
    
        <li class="list-group-item">
            <div class="row">
                <div class="col-3 col-xl-3 col-lg-2">
                    <img src=${who.avatarIcon} class="wd-who-to-follow-image">
                </div>
                 <div class="col-7 col-lg-6 col-xl-6 wd-check-margin">
                     <div class="wd-bold_font">${who.userName}
                        <span class="fa-stack wd-check-margin">
                         <i class="fas fa-circle fa-stack-1x fa-sm"></i>
                         <i class="fas fa-check fa-stack-1x fa-xs fa-inverse"></i>
                         </span>
                     </div>
                    <div class="wd-normal-font" style="margin-top: -5px">${who.handle}
                     </div>
                 </div>

                <div class="col-2 col-xl-3 col-lg-4">
                    <button class="btn btn-primary wd-follow-button">Follow</button>
                </div>

            </div>

        </li>
    
    
    
    
    `);
}
export default WhoToFollowListItem;