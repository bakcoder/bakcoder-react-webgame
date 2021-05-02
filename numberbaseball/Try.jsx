import React from 'react';

const Try = (props) => {
    const { keyName, tryInfo } = props;
    return (
        <li key={keyName}>
            <b>{tryInfo.try}</b> - {tryInfo.result}
        </li>
    )
};

export default Try;