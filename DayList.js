import { Link } from "react-router-dom";
import dummy from "../db/data.json"

function DayList() {
    return (
        <ul className="list_day">
            {dummy.days.map(dayElement => (
                <li key={dayElement.id}>
                    <Link to={`./day/${dayElement.day}`}>Day {dayElement.day}</Link>
                </li>
            ))}
        </ul>
    );
}

export default DayList;