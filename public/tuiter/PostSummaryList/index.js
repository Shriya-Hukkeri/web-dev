import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import posts from "../PostSummaryList/posts.js";

const PostSummaryList = () => {
    return(`
            <ul class="list-group opacity">
            ${
                 posts.map(post => PostSummaryItem(post)).join('')
            }
            </ul>
            
    `);
}
export default PostSummaryList;