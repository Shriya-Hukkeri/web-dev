const PostSummaryItem = (posts) => {
    return(`
        <li class="list-group-item">
     <div class="row">
      <div class="col-10">
       <div class="wd-web-dev-design">${posts.topic}</div>
       <div class="wd-bold_font">${posts.userName}
        <span class="fa-stack wd-check-margin">
         <i class="fas fa-circle fa-stack-1x fa-sm"></i>
         <i class="fas fa-check fa-stack-1x fa-xs fa-inverse"></i>
        </span>
        <span class="wd-normal-font wd-timestamp-margin">&#8211; ${posts.time}</span>
       </div>
       <div class="wd-bold_font">
       ${posts.title}
       </div>
      <div class="wd-web-dev-design">${posts.tweets}</div>
      </div>
       <div class="col-2">
       <img src=${posts.image} class="wd-side-image">
      </div>
      </div>
     
    </li>
    `);
}

export default PostSummaryItem;