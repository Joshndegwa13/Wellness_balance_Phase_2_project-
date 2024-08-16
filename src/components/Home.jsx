import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Wellness Balance</h1>
            <Link to="/workout-plan" className="btn">Get Started</Link>
        </div>
    );
}

export default Home;
