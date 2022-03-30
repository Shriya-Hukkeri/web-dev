const profileData = {
    name: "Shriya Hukkeri", handle: 'shukker',
    profilePicture: '../images/spaceX.jpg',    bannerPicture: '../images/spaceX.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',    dateOfBirth: '12/2/1994',    dateJoined: '4/2017',
    followingCount: 312,    followersCount: 180,
    tuitCount: 123
}


const ProfileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'edit-profile':
            return action.profileData;
        default: return state
    }
}

export default ProfileReducer;