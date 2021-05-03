import React, { memo } from 'react';

const Try = memo(({ keyName, tryInfo }) => {
    return (
        <li key={keyName}>
            <b>{tryInfo.try}</b> - {tryInfo.result}
        </li>
    )
});

export default Try;