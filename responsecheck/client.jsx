import React from 'react';
import ReactDOM  from 'react-dom';

import ResponseCheck from './ResponseCheck';
import ResponseCheckWithHooks from './ResponseCheckWithHooks';

ReactDOM.render(<div>
                <h1>Class로 구현</h1>
                <ResponseCheck />
                <h1>Hooks로 구현</h1>
                <ResponseCheckWithHooks />
                </div>, document.querySelector("#root"));