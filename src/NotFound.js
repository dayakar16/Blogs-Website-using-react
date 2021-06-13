import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <div className="notfound">
        <h2>Sorry</h2>
        <p>The page cannot be found</p>
        <Link to='/'>Click here to go to home page</Link>
    </div> );
}
 
export default NotFound;