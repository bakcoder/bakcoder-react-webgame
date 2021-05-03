import React, { useState, useRef } from 'react';
import Try from './Try';

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0 ; i < 4 ; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {

    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런');
            setTries((prevTries) => {
                return [ ...prevTries, 
                    {try: value, result: '홈런'}
                ]
            });
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패, 답은 ${answer.join('')}이었습니다.`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4 ; i++) {
                    if (answerArray[i] === answer[i]){
                        strike++;
                    } else if (answer.includes(answerArray[i])) {
                        ball++;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, {try : value, result: `${strike} 스트라이크, ${ball} 볼`}];
                });
                setValue('');
            }
        }
    };

    const onChangeInput = (e) => {
        if(e.nativeEvent.data != null) {
            e.preventDefault();
            if(!value.includes(e.nativeEvent.data)) {
                setValue(value + e.nativeEvent.data)    
            }
        } else {
            const deletedValue = value.substring(0, value.length-1);
            setValue(deletedValue);
        }
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} ref={inputRef} onChange={onChangeInput} value={value}/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => (<Try keyName={`${i + 1}차 시도`} tryInfo={v}/>))}
            </ul>
        </>
    );
};

export default NumberBaseball;