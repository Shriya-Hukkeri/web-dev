import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts";

const PostSummaryList = () => {
    return(
            <ul className="list-group opacity">
            {
                 posts.map(post => <PostSummaryItem key={post.userName} posts={post} />)
            }
            </ul>
            
    );
}
export default PostSummaryList;