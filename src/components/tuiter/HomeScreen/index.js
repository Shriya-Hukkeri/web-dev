import TuitList from '../tuit-list'
import WhatsHappening from "../whats-happening/WhatsHappening";

const HomeScreen = () => {
    return(
        <div className="opacity">
            <WhatsHappening/>
            <TuitList />
        </div>
    )
}
export default HomeScreen;