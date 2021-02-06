import React from 'react';
import { useState,useEffect } from 'react';
function List(props) {
    const [count,setCount]= useState(0)
    useEffect(() => {
        console.log('You clicked ${count} times')
        return ()=> {
            console.log('you leave')
        }
    },[count])
    return (
        <div>
            i am list
        </div>
    );
}

export default List;
