import React from "react";
import { useState, useEffect } from "react";

export const Login = () => {
    const [item1, setItem1] = useState(0);
    const [item2, setItem2] = useState(0);

useEffect(() => {
  const localItem1 = localStorage.setItem('item1', JSON.stringify(item1));
  const localItem2 = localStorage.setItem('item2', JSON.stringify(item2));
  console.log(localItem1, localItem2);
  setItem1(localItem1);
  setItem2(localItem2)
}, []);

    function handleChangeItem1(e) {
        setItem1(e.target.value);
        localStorage.setItem('item1', e.target.value);
        }
    function handleChangeItem2(e) {
        setItem2(e.target.value);
        localStorage.setItem('item2', e.target.value);
        console.log(localStorage);
    }

    return(
        <>
        <input className="input-login" defaultValue="User" onChange={handleChangeItem1}></input>
        <input className="input-login" defaultValue="Password" onChange={handleChangeItem2}></input>

        <button className="button-login">Submit</button>
        </>
    );
}