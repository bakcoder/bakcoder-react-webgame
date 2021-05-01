const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    const [firstNumber, setFirstNumber] = useState(Math.ceil(Math.random() * 9));
    const [secondNumber, setSecondNumber] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onRefInput = (ref) => {
        input = ref;
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === firstNumber * secondNumber) {
            setFirstNumber(Math.ceil(Math.random() * 9));
            setSecondNumber(Math.ceil(Math.random() * 9));
            setResult((prevResult) => {
                return '정답: ' + value;
            });
            setValue('');
            inputRef.current.focus();
        } else {
            setFirstNumber(Math.ceil(Math.random() * 9));
            setSecondNumber(Math.ceil(Math.random() * 9));
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }

    return (
        <>
            <div>{firstNumber} 곱하기 {secondNumber}은?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}/>
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
}

module.exports = GuGuDan;