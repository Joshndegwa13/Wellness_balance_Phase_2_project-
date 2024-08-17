import { Link } from 'react-router-dom';

function Navbar() {   
    return (                  //navigation links to different sections of my website 
        <nav>
            <ul>             
                <li><Link to="/">Home</Link></li>  
                <li><Link to="/workout-plan">Workout Plan</Link></li>
                <li><Link to="/progress-tracker">Progress Tracker</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
