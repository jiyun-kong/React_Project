import Word from "./Word";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Day() {
    const urlDay = Number(useParams().day);
    //const wordList = dummy.words.filter(ele => ele.day === urlDay);
    const [words, setWords] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${urlDay}`).then(response => {
            return response.json()
        }).then(data => {
            setWords(data);
        });
    }, []);

    return (
        <>
            <h2>Day {urlDay}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;
