import React, /*{ Component }*/ { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {}, //객체들이 있을 경우 PureComponent도 파악하기 힘듬
        array: [],
    };
    /*
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }
    */

    onClick = () => {
        // this.setState({array: []}); // 렌더링 O

        // const arr = this.state.array; // 렌더링 X
        // arr.push(1);

        this.setState({array: [...this.state.array, 1]}) // 렌더링 O
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <>
                <div>
                    <button onClick={this.onClick}>클릭</button>
                </div>
            </>
        );
    }
}

export default Test;