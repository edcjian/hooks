import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router ,Route,Link } from 'react-router-dom';

import Index from "./components";
import List from "./components/list";
function Test(props) {
    useEffect(() => {
console.log('you clicked ${count} times')

    }

    )
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Router>
                <ul>
                    <li><Link to="/">列表</Link></li>
                    <li><Link to="/list/">首页</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list" exact component={List}></Route>
            </Router>
        </div>
    );
}

export default Test;
