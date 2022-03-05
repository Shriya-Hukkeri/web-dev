const NavigationSidebar = () => {

    return (`
            <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/"><i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-home me-1"></i><span class="d-none d-xl-inline-block">Home</span></a>
            <a class="list-group-item list-group-item-action active" href="#"><i class="fas fa-hashtag me-2"></i><span class="d-none d-xl-inline-block">Explore</span></a>
            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-bell me-2"></i><span class="d-none d-xl-inline-block">Notifications</span></a>
            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-envelope me-2"></i><span class="d-none d-xl-inline-block">Messages</span></a>
            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-bookmark me-2"></i><span class="d-none d-xl-inline-block">Bookmarks</span></a>
            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-list me-2"></i><span class="d-none d-xl-inline-block">Lists</span></a>
            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-user me-2"></i><span class="d-none d-xl-inline-block">Profile</span></a>
             <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-circle me-2"></i><span class="d-none d-xl-inline-block">More</span></a>
            
            <div class="d-grid mt-2">
                <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
            </div>
           
    `);
}
export default NavigationSidebar;
