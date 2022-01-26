import dummy from "../db/data.json"
import Word from "./Word";
import { useParams } from "react-router-dom";

function Day() {
    const urlDay = Number(useParams().day);
    const wordList = dummy.words.filter(ele => ele.day === urlDay);

    return (
        <>
            <h2>Day {urlDay}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;