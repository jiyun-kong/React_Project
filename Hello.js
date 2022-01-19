import { useState } from "react";
import UserName from "./UserName";

function Hello(props) {
    const [name, setName] = useState('Jenet');
    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? '성인입니다.' : '미성년자입니다.'

    return (
        <div>
            <UserName name={name} />

            <h2>
                {name}({age}세) : {msg}
            </h2>
            <button onClick={
                () => {
                    setName(name === 'Jenet' ? 'Lucy' : 'Jenet');
                }
            }>
                Change Name
            </button>
            <button onClick={
                () => {
                    setAge(age + 1);
                }
            }>Increase Age</button>


        </div>
    );
};

export default Hello;