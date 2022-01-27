import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DayList() {
    const [days, setDays] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/days").then(response => {
            return response.json()
        }).then(data => {
            setDays(data);
        });
    }, []);

    return (
        <ul className="list_day">
            {days.map(dayElement => (
                <li key={dayElement.id}>
                    <Link to={`./day/${dayElement.day}`}>Day {dayElement.day}</Link>
                </li>
            ))}
        </ul>
    );
}

export default DayList;
