import { useState } from 'react';
import '../styles/App.css'; 

function ProgressTracker() {
    const [date, setDate] = useState('');
    const [details, setDetails] = useState('');
    const [entries, setEntries] = useState([]);

    // Function to add a new entry to the list
    const addEntry = () => {
        if (date && details) {
            setEntries([...entries, { date, details }]);
            setDate('');
            setDetails('');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Progress Tracker</h2>
            <div className="form-group">
                <label>Date of Workout:</label>
                <input className="form-control" type="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div className="form-group mt-3">
                <label>Exercise Plan:</label>
                <textarea className="form-control" value={details} onChange={e => setDetails(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-3" onClick={addEntry}>Save</button>
            <h3 className="mt-4">Your Entries</h3>
            <ul className="list-group">
                {entries.map((entry, index) => (
                    <li key={index} className="list-group-item">
                        <p><strong>{entry.date}</strong></p>
                        <p>{entry.details}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProgressTracker;
