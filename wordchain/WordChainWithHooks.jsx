const React = require('react');
const { useState, useRef } = React;

const WordChainWithHooks = () => {
    const [word, setWord] = useState('바코더');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setWord(value);
            setValue('');
            setResult('딩동댕');
            
            inputRef.current.focus();
        } else {
            setValue('');
            setResult('땡');
            
            inputRef.current.focus();
        }
        
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };


    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label hftmlFor="wordInput">글자를 입력하시오.</label>  
                <input ref={inputRef} className="wordInput" value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordChainWithHooks;