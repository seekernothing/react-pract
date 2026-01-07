import React, { useEffect } from "react";
import { setDark } from "../utils/toggleSlice";
import {useDispatch,useSelector} from "react-redux"


const Toggle = () => {

    const dispatch = useDispatch()
    const {dark} = useSelector((state)=>state.toggle)

    useEffect(()=>{


console.log("document.body.className", document.body.className);

       document.body.className = dark ?"white":"black"

    },[dark])
  return (
    <div>
      <h1>Toggle Theme App</h1>

      <div>
        <button
        onClick={()=>dispatch(setDark(!dark))}
        >Toggle Theme</button>
      </div>
    </div>
  );
};

export default Toggle;

