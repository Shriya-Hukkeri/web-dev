import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js";

const WhoToFollowList = () => {
    return(`
            <ul class="list-group opacity">
                <li class="list-group-item wd-bold_font">Who To Follow</li>
                    ${
                         who.map(who_list => {
                         return(WhoToFollowListItem(who_list));
                     }).join('')
                    }
            </ul>
       
    `);
}

export default WhoToFollowList;